import { courses } from './courses.js';

const DOM = {
    backBtn: document.getElementById('btn-back'),
    courseTitle: document.getElementById('ui-course-title'),
    sectionProgress: document.getElementById('ui-section-progress'),
    sectionTitle: document.getElementById('ui-section-title'),
    tabBtns: document.querySelectorAll('.tab-btn'),
    tabContent: document.getElementById('ui-tab-content'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    modal: document.getElementById('completion-modal'),
    btnReturnHome: document.getElementById('btn-return-home')
};

// 1. Get the course ID from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get('id');

// Find the matched course data
const currentCourse = courses.find(c => c.id === courseId);

// Redirect to home if invalid course
if (!currentCourse) {
    window.location.href = 'index.html';
}

let currentSectionIndex = 0;
let currentTab = 'concept'; // Default tab

function initCourse() {
    DOM.courseTitle.textContent = currentCourse.title;

    // Load progress from Local Storage
    const progressData = JSON.parse(localStorage.getItem('aiCourseProgress')) || {};
    currentSectionIndex = progressData[courseId] || 0;
    
    // Prevent index out of bounds if the course is already fully completed
    if (currentSectionIndex >= currentCourse.sections.length) {
        currentSectionIndex = currentCourse.sections.length - 1;
    }

    setupEventListeners();
    renderSection();
}

function setupEventListeners() {
    DOM.backBtn.addEventListener('click', () => window.location.href = 'index.html');
    DOM.btnReturnHome.addEventListener('click', () => window.location.href = 'index.html');
    
    DOM.btnPrev.addEventListener('click', () => navigateSection(-1));
    DOM.btnNext.addEventListener('click', () => navigateSection(1));

    DOM.tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active tab UI
            DOM.tabBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Render specific tab content
            currentTab = e.target.dataset.tab;
            renderTabContent();
        });
    });
}

function renderSection() {
    const section = currentCourse.sections[currentSectionIndex];
    DOM.sectionTitle.textContent = section.sectionTitle;
    
    // Update navigation button states
    DOM.btnPrev.disabled = currentSectionIndex === 0;
    DOM.btnNext.textContent = currentSectionIndex === currentCourse.sections.length - 1 ? 'Finish' : 'Next';

    // Reset tabs to default (Concept) when changing sections
    currentTab = 'concept';
    DOM.tabBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-tab="concept"]').classList.add('active');

    renderTabContent();
    updateProgressUI();
}

function renderTabContent() {
    const section = currentCourse.sections[currentSectionIndex];
    let content = section[currentTab];
    
    // SPECIAL HANDLING FOR THE QUIZ TAB
    if (currentTab === 'knowledgeCheck' && Array.isArray(content)) {
        renderQuiz(content);
        return; // Stop here so it doesn't try to parse Markdown
    }

    // Normal Markdown parsing for Concept, Scenario, and Exercise
    DOM.tabContent.innerHTML = marked.parse(content || '*Content coming soon...*');
}

function renderQuiz(questions) {
    DOM.tabContent.innerHTML = ''; // Clear previous content
    const container = document.createElement('div');
    container.className = 'quiz-container';

    questions.forEach((q, qIndex) => {
        // Fallback: If the question is still just a string, render as a bullet point
        if (typeof q === 'string') {
            const p = document.createElement('p');
            p.textContent = `• ${q}`;
            container.appendChild(p);
            return;
        }

        // If it's an interactive object, build the quiz UI
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        
        let optionsHtml = q.options.map((opt, oIndex) => `
            <label class="quiz-option">
                <input type="radio" name="q-${qIndex}" value="${oIndex}">
                <span class="option-text">${opt}</span>
            </label>
        `).join('');

        questionDiv.innerHTML = `
            <p class="quiz-q-text"><strong>Q${qIndex + 1}:</strong> ${q.question}</p>
            <div class="quiz-options">${optionsHtml}</div>
            <button class="btn-check-answer" data-qindex="${qIndex}">Check Answer</button>
            <div class="quiz-feedback hidden" id="feedback-${qIndex}"></div>
        `;

        container.appendChild(questionDiv);
    });

    DOM.tabContent.appendChild(container);

    // Add event listeners to check answers
    const checkBtns = container.querySelectorAll('.btn-check-answer');
    checkBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const qIndex = e.target.dataset.qindex;
            const qData = questions[qIndex];
            const selected = document.querySelector(`input[name="q-${qIndex}"]:checked`);
            const feedbackEl = document.getElementById(`feedback-${qIndex}`);

            if (!selected) {
                feedbackEl.innerHTML = "⚠️ Please select an answer first.";
                feedbackEl.className = "quiz-feedback warning";
                return;
            }

            const selectedIndex = parseInt(selected.value);
            if (selectedIndex === qData.correctAnswerIndex) {
                feedbackEl.innerHTML = `<strong>✅ Correct!</strong> ${qData.explanation}`;
                feedbackEl.className = "quiz-feedback success";
            } else {
                feedbackEl.innerHTML = `<strong>❌ Not quite.</strong> Give it another try.`;
                feedbackEl.className = "quiz-feedback error";
            }
        });
    });
}

function updateProgressUI() {
    // Save to local storage
    const progressData = JSON.parse(localStorage.getItem('aiCourseProgress')) || {};
    if (currentSectionIndex > (progressData[courseId] || 0)) {
        progressData[courseId] = currentSectionIndex;
        localStorage.setItem('aiCourseProgress', JSON.stringify(progressData));
    }
}

function navigateSection(direction) {
    currentSectionIndex += direction;

    // Check if course is complete
    if (currentSectionIndex >= currentCourse.sections.length) {
        // Mark as 100% complete
        const progressData = JSON.parse(localStorage.getItem('aiCourseProgress')) || {};
        progressData[courseId] = currentCourse.sections.length;
        localStorage.setItem('aiCourseProgress', JSON.stringify(progressData));
        
        DOM.modal.classList.remove('hidden');
        DOM.modal.style.display = 'flex'; // Trigger modal
        return;
    }

    renderSection();
}

// Start the app
initCourse();
