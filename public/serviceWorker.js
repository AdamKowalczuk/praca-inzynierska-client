const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";
const assets = [
  "/index.html",
  "/static/media/stars.8605eb71.png",
  "/static/media/traveling.3e2dbeac.svg",
  "/offline.html",
  //fonts
  "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap",
  "https://fonts.googleapis.com/css2?family=Bungee&display=swap",
  "https://fonts.googleapis.com/css2?family=Krona+One&family=Roboto:ital,wght@0,300;0,400;0,500;1,400;1,500;1,700&display=swap",
];

// cache size limit
// const limitCacheSize = (name, size) => {
//   caches.open(name).then((cache) => {
//     cache.keys().then((keys) => {
//       if (keys.length > size) {
//         cache.delete(keys[0]).then(limitCacheSize(name, size));
//       }
//     });
//   });
// };

// install service worker
self.addEventListener("install", (e) => {
  // console.log("Service worker installed");
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("chaching shell assets");
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener("activate", (e) => {
  // console.log("Service worker activated");
  e.waitUntil(
    caches.keys().then((keys) => {
      // console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

//fetch event
// self.addEventListener("fetch", (e) => {
//   //   console.log("Service worker fetch event", e);
//   e.respondWith(
//     caches.match(e.request).then((cacheRes) => {
//       return (
//         cacheRes ||
//         fetch(e.request).then((fetchRes) => {
//           return caches.open(dynamicCacheName).then((cache) => {
//             cache.put(e.request.url, fetchRes.clone());
//             // limitCacheSize(dynamicCacheName, 100);
//             return fetchRes;
//           });
//         })
//       );
//     })
//     // .catch(() => caches.match("/fallback.html"))
//   );
// });
self.addEventListener("fetch", (e) => {
  //console.log('fetch event', evt);
  e.respondWith(
    caches
      .match(e.request)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(e.request).then((fetchRes) => {
            return caches.open(dynamicCacheName).then((cache) => {
              cache.put(e.request.url, fetchRes.clone());
              // check cached items size
              // limitCacheSize(dynamicCacheName, 15);
              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
        caches.match("/offline.html");
      })
  );
});
