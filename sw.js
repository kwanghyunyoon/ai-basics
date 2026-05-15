const CACHE_NAME = 'ai-course-v1';

// List of all the files needed for the app to work offline
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './course.html',
    './styles.css',
    './app.js',
    './course.js',
    './courses.js',
    './manifest.json',
    './assets/icon-192.png',
    './assets/icon-512.png',
    // Cache the markdown parser CDN so it works offline too
    'https://cdn.jsdelivr.net/npm/marked/marked.min.js'
];

// Install Event: Cache all critical assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Opened cache');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Activate Event: Clean up old caches if you update the CACHE_NAME version
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch Event: Serve from cache first, then fall back to the network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Return the cached version if found
            if (response) {
                return response;
            }
            // Otherwise, fetch from the network
            return fetch(event.request);
        })
    );
});