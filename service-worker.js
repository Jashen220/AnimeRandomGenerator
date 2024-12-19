importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        new RegExp('https://api.jikan.moe/v4/characters?page=1&limit=25'),
        new workbox.strategies.NetworkFirst()
    );
}