const staticDeiscount = "deiscount-v1";
const assets = [
  "/",
  "style.css",
  "app.js",
  "assets/icons/utensils.svg",
  "assets/icons/theater-masks.svg",
  "assets/icons/dumbbell.svg",
  "assets/icons/bus-alt.svg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDeiscount).then(cache => {
      cache.addAll(assets);
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})