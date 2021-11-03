// install service worker
self.addEventListener("install", (e) => {
  console.log("Service worker installed");
});

// activate event
self.addEventListener("activate", (e) => {
  console.log("Service worker activated");
});

//fetch event
self.addEventListener("fetch", (e) => {
  //   console.log("Service worker fetch event", e);
});
