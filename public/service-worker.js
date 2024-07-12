// service-worker.js

self.addEventListener('install', event => {
  console.log('Service Worker installing.');
  // Add a call to skipWaiting here if you want to trigger the service worker to take over the page immediately
  // self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activating.');
  // Clean up old caches if necessary
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});

// Offline Support
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('offline.html');
      })
    );
  }
});

// Push Notifications
self.addEventListener('push', event => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: 'icons/icon-512x512.png',
    badge: 'icons/badge-128x128.png',
  };
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Periodic Sync
self.addEventListener('periodicsync', event => {
  if (event.tag === 'sync-tag') {
    event.waitUntil(doSomePeriodicSync());
  }
});

// Background Sync
self.addEventListener('sync', event => {
  if (event.tag === 'sync-tag') {
    event.waitUntil(doSomeBackgroundSync());
  }
});

function doSomePeriodicSync() {
  // Logic for periodic sync
  return fetch('/sync-endpoint').then(response => {
    return response.json();
  }).then(data => {
    console.log('Periodic Sync data: ', data);
  });
}

function doSomeBackgroundSync() {
  // Logic for background sync
  return fetch('/sync-endpoint').then(response => {
    return response.json();
  }).then(data => {
    console.log('Background Sync data: ', data);
  });
}