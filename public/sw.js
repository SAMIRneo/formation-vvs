// Service worker FormationVVS — network-first pour les pages, cache-first pour les assets.
// Évite le piège des routes mortes qui renvoyaient 404 sur navigation.
const CACHE = 'fv-v2';
const ASSETS = [
  './',
  './marche/',
  './modules/',
  './modules/lire-le-prix/',
  './modules/analyse-technique/',
  './modules/gestion-du-risque/',
  './modules/setups-en-live/',
  './abonnement/',
  './contact/',
  './manifest.webmanifest',
  './favicon.svg',
];

self.addEventListener('install', (e) => {
  // Précache silencieux : on n'échoue PAS l'install si une route manque.
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS).catch(() => {})).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Navigations (pages HTML) : NETWORK FIRST, fallback accueil si hors-ligne.
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      }).catch(() => caches.match(e.request).then((hit) => hit || caches.match('./')))
    );
    return;
  }

  // Assets : CACHE FIRST puis réseau (avec mise en cache).
  e.respondWith(
    caches.match(e.request).then((hit) =>
      hit || fetch(e.request).then((res) => {
        if (res.ok && (url.pathname.endsWith('.css') || url.pathname.endsWith('.js') || url.pathname.endsWith('.svg') || url.pathname.endsWith('.png') || url.pathname.endsWith('.woff2'))) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      }).catch(() => hit))
    )
  );
});
