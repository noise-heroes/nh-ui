// Service Worker to clear cache
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Intercept fetch requests and always fetch from network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request, {
      cache: 'no-store'
    }).catch(function() {
      return caches.match(event.request);
    })
  );
});