self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("flappy-bird-cache").then((cache) => {
            return cache.addAll([
                "index.html",
                "game.js",
                "style.css",
                "manifest.json",
                "icon.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
