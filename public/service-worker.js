self.addEventListener('install', event => {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open('static-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.webmanifest',
        './android/android-launchericon-512-512.png',
        './offline.html', // 오프라인 페이지 추가
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
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('offline.html');
      })
    );
  } else {
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
  }
});