const CACHE_NAME = 'raavi-ar-v1';
const urlsToCache = [
  '/raavi-ar/',
  '/raavi-ar/index.html',
  '/raavi-ar/Raavi_AR-final2.webm',
  '/raavi-ar/targets.mind'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
