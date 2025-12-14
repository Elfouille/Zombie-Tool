const CACHE = "ztools-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./map.html",
  "./module.html",
  "./maps.js",
  "./assets/style.css",
  "./assets/app.js",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",

  // Modules (ajoute ici ceux que tu veux offline)
  "./modules/bo7_decoder_auto.html"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k !== CACHE ? caches.delete(k) : null)))
    ).then(() => self.clients.claim())
  );
});

// "Cache first" simple (offline)
self.addEventListener("fetch", (e) => {
  const req = e.request;
  e.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});
