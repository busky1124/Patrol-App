// Minimal service worker: required by Chrome/Android install criteria.
// Intentionally does NOT cache app data, so guards and the admin panel
// always see fresh scan data from Google Sheets.
self.addEventListener("install", (e) => { self.skipWaiting(); });
self.addEventListener("activate", (e) => { self.clients.claim(); });
self.addEventListener("fetch", (e) => {
  // network passthrough, no caching
});
