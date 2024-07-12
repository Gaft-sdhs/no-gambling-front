self.addEventListener('install', event => {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open('static-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.webmanifest',
        './android/android-launchericon-512-512.png',
        // 다른 필요한 파일들
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activating.');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== 'static-cache';
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request).then(networkResponse => {
        return caches.open('static-cache').then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
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
  return fetch('/sync-endpoint').then(response => {
    return response.json();
  }).then(data => {
    console.log('Periodic Sync data: ', data);
  });
}

function doSomeBackgroundSync() {
  return fetch('/sync-endpoint').then(response => {
    return response.json();
  }).then(data => {
    console.log('Background Sync data: ', data);
  });
}