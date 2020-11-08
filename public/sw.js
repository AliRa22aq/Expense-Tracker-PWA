var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
'/static/js/bundle.js',
'/static/js/0.chunk.js',
'/static/js/main.chunk.js',
'/',
'/index.html',
];

self.addEventListener("activate", function(e){
    console.log("[servicworker] Activate")
})

self.addEventListener('install', function(event) {
    console.log("[servicworker] Install")

  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    console.log(event)
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });