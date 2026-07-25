const SHELL_CACHE = 'shell-v3';
const ASSETS_CACHE = 'mil-benefits-v3';

const SHELL_URLS = ['/', '/explore', '/map', '/va', '/settings', '/library', '/auth', '/paywall'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then(cache => cache.addAll(SHELL_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== SHELL_CACHE && k !== ASSETS_CACHE).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Network-first for API calls
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request).catch(() => new Response('{"error":"offline"}', { headers: { 'Content-Type': 'application/json' } }))
    );
    return;
  }

  // Stale-while-revalidate for hashed build assets: instant from cache,
  // refreshed in the background so the next load picks up new builds.
  if (url.pathname.match(/\.(js|css|png|svg|ico|woff2?)$/)) {
    event.respondWith(
      caches.open(ASSETS_CACHE).then(cache =>
        cache.match(request).then(cached => {
          const fetchPromise = fetch(request).then(res => {
            cache.put(request, res.clone());
            return res;
          }).catch(() => cached);
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  // Stale-while-revalidate for navigation: serve the cached shell instantly,
  // but always refetch in the background so updates aren't stuck forever.
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.open(SHELL_CACHE).then(cache =>
        cache.match('/').then(cached => {
          const fetchPromise = fetch(request).then(res => {
            cache.put('/', res.clone());
            return res;
          }).catch(() => cached);
          return cached || fetchPromise;
        })
      )
    );
    return;
  }
});
