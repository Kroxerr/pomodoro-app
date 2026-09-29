const CACHE = "pomodoro-v7";
const FILES = [
  "./", "./index.html", "./manifest.webmanifest",
  "./fonts/doto-latin-500-normal.woff2", "./fonts/doto-latin-900-normal.woff2",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-512.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
