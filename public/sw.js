// Service worker minimaliste — cache first pour usage offline (installable iPhone)
// Note : Astro écrit le build à la racine de dist/ (base géré en runtime),
// donc les chemins sont relatifs à la racine servie.
const CACHE = 'fv-v1';
const ASSETS = [
  './',
  './formation',
  './outils',
  './tarifs',
  './contact',
  './manifest.webmanifest',
  './favicon.svg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match('./')))
  );
});
