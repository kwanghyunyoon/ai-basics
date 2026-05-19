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
    
    // Handle the Knowledge Check arrays
    if (Array.isArray(content)) {
        content = content.map(item => `* ${item}`).join('\n');
    }

    // Parse Markdown using the marked.js library included in your HTML
    DOM.tabContent.innerHTML = marked.parse(content || '*Content coming soon...*');
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