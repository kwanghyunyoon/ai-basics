// Import your courses
import { courses } from './courses.js'; 

const DOM = {
    content: document.getElementById('app-content'),
    navHome: document.getElementById('nav-home'),
    navProgress: document.getElementById('nav-progress')
};

// --- Storage Management ---
function initializeStorage() {
    if (!localStorage.getItem('aiCourseProgress')) {
        const initialProgress = {};
        // Default to 0 sections completed for all courses
        courses.forEach(course => {
            initialProgress[course.id] = 0; 
        });
        localStorage.setItem('aiCourseProgress', JSON.stringify(initialProgress));
    }
}

function getProgress(courseId) {
    const progress = JSON.parse(localStorage.getItem('aiCourseProgress'));
    return progress[courseId] || 0;
}

// For testing: Call this to simulate completing a section
export function updateProgress(courseId, completedSections) {
    const progress = JSON.parse(localStorage.getItem('aiCourseProgress'));
    progress[courseId] = completedSections;
    localStorage.setItem('aiCourseProgress', JSON.stringify(progress));
    renderHome(); // Re-render to update the bar
}

// --- Views ---
function renderHome() {
    let html = '<div class="course-list">';
    
    courses.forEach(course => {
        const completed = getProgress(course.id);
        const total = course.sections.length; 
        const percent = Math.round((completed / total) * 100);
        
        html += `
            <div class="course-card" onclick="openCourse('${course.id}')">
                <h2 class="course-title">${course.title}</h2>
                <p class="progress-text">${completed}/${total} sections complete</p>
                <div class="progress-track">
                    <div class="progress-fill" style="width: ${percent}%"></div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    DOM.content.innerHTML = html;
}

function renderProgressView() {
    DOM.content.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
            <h2 style="margin-bottom: 10px;">My Progress</h2>
            <p style="color: var(--text-muted)">Your global progress analytics will live here.</p>
        </div>
    `;
}

// Global function to attach to the onclick handler of the cards
window.openCourse = function(courseId) {
    // Navigate to the course viewer and pass the ID in the URL
    window.location.href = `course.html?id=${courseId}`;
};

// --- Navigation Logic ---
function switchTab(tabId) {
    // Reset active states
    DOM.navHome.classList.remove('active');
    DOM.navProgress.classList.remove('active');
    
    if (tabId === 'home') {
        DOM.navHome.classList.add('active');
        renderHome();
    } else if (tabId === 'progress') {
        DOM.navProgress.classList.add('active');
        renderProgressView();
    }
}

DOM.navHome.addEventListener('click', () => switchTab('home'));
DOM.navProgress.addEventListener('click', () => switchTab('progress'));

// --- Initialization ---
initializeStorage();
renderHome();
