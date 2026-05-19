# AI Basics: Building an AI Brain + Everyday AI Usage

A lightweight, mobile-first Progressive Web App (PWA) designed to teach the fundamentals of Large Language Models (LLMs) and how to practically integrate tools like ChatGPT, Claude, Gemini, and Perplexity into daily workflows. 

Built with 100% free-to-use tools, this project utilizes Vanilla JavaScript, HTML, and CSS to deliver a fast, offline-capable learning experience without the need for complex frameworks.

## 🚀 Features

* **Interactive Course Viewer:** Segmented UI (Concept, Scenario, Exercise, Review) to break down complex AI topics into digestible, actionable lessons.
* **Interactive Knowledge Checks:** Built-in multiple-choice quizzes with immediate validation and explanations to test comprehension.
* **Progress Tracking:** Automatically saves user progress via the browser's `localStorage` so learners can pick up right where they left off.
* **Offline Capable (PWA):** Includes a fully configured Service Worker (`sw.js`) and Web Manifest, allowing the app to be installed on mobile devices and used without an internet connection.
* **Markdown Support:** Dynamically parses and renders course content using `marked.js` for clean, readable typography.
* **Modern UI/UX:** Clean, responsive, iOS-style design system utilizing CSS variables for easy theming.

## 📚 Course Content

The curriculum is structured into five core modules:
1. **AI Basics and Fundamentals:** How AI actually works (Tokens, Context Windows, Hallucinations).
2. **OpenAI / ChatGPT:** Mastering the versatile "Swiss Army Knife" of AI.
3. **Anthropic / Claude:** Nuanced writing, Artifacts, and long-document analysis.
4. **Google Gemini:** Real-time search, Google Workspace integration, and speed.
5. **Perplexity AI:** Deep research, citations, and factual verification.
6. **The Human in the Loop:** Safety, ethics, copyright, and orchestrating the ultimate AI workflow.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
* **Markdown Parsing:** [Marked.js](https://marked.js.org/) (via CDN)
* **PWA:** Service Workers, `manifest.json`
* **Architecture:** Component-based vanilla JS (No React, Vue, or build steps required)

## 📁 Project Structure

```text
/
├── index.html        # Home screen & progress dashboard
├── course.html       # Dynamic course viewer layout
├── styles.css        # Global design system and UI components
├── app.js            # Logic for the home screen and global progress
├── course.js         # Logic for rendering tabs, markdown, and interactive quizzes
├── courses.js        # The data structure containing all curriculum text and quiz questions
├── sw.js             # Service Worker for offline caching
├── manifest.json     # Web App Manifest for mobile installation
└── assets/           # App icons and imagery

💻 How to Run Locally
Because this project uses ES6 Modules (import/export), it must be run on a local web server (opening the HTML file directly in your browser will cause a CORS error).

Clone the repository to your local machine.

Open the project folder in your preferred code editor (e.g., VS Code or Cursor).

Start a local server:

If using VS Code: Install the "Live Server" extension and click "Go Live".

If using Python: Open your terminal in the project directory and run python3 -m http.server 8000. Then, open http://localhost:8000 in your browser.

🔄 Updating the App (Cache Management)
This app heavily utilizes a Service Worker for offline performance. If you make changes to the code or course content (courses.js), you must update the cache version to force users' browsers to download the new files.

Open sw.js and increment the version number at the very top of the file:
// Change v1 to v2, v3, etc.
const CACHE_NAME = 'ai-course-v2';

