const i = [
  "/tensorpose-demo/_app/immutable/start-65725eaf.js",
  "/tensorpose-demo/_app/immutable/components/pages/_layout.svelte-d4108572.js",
  "/tensorpose-demo/_app/immutable/assets/_layout-c6e5cb46.css",
  "/tensorpose-demo/_app/immutable/components/error.svelte-a455444c.js",
  "/tensorpose-demo/_app/immutable/components/pages/_page.svelte-978f9c79.js",
  "/tensorpose-demo/_app/immutable/components/pages/interactive-demos/_page.svelte-240a6c74.js",
  "/tensorpose-demo/_app/immutable/chunks/singletons-c3571633.js",
  "/tensorpose-demo/_app/immutable/chunks/paths-34b7d8a7.js",
  "/tensorpose-demo/_app/immutable/chunks/preload-helper-aa6bc0ce.js",
  "/tensorpose-demo/_app/immutable/chunks/Icon-e5a3e5d7.js",
  "/tensorpose-demo/_app/immutable/assets/Icon-17239937.css",
  "/tensorpose-demo/_app/immutable/chunks/detector-698e2f7b.js",
  "/tensorpose-demo/_app/immutable/chunks/0-f299262e.js",
  "/tensorpose-demo/_app/immutable/chunks/1-a5c0581e.js",
  "/tensorpose-demo/_app/immutable/chunks/2-b2ea0ad9.js",
  "/tensorpose-demo/_app/immutable/chunks/3-3b38a3de.js",
  "/tensorpose-demo/_app/immutable/chunks/p5.min-2c911239.js"
], d = [
  "/tensorpose-demo/.nojekyll",
  "/tensorpose-demo/android-chrome-192x192.png",
  "/tensorpose-demo/android-chrome-512x512.png",
  "/tensorpose-demo/apple-touch-icon-precomposed.png",
  "/tensorpose-demo/apple-touch-icon.png",
  "/tensorpose-demo/browserconfig.xml",
  "/tensorpose-demo/favicon-16x16.png",
  "/tensorpose-demo/favicon-32x32.png",
  "/tensorpose-demo/favicon.ico",
  "/tensorpose-demo/favicon.png",
  "/tensorpose-demo/models/detector/group1-shard1of2.bin",
  "/tensorpose-demo/models/detector/group1-shard2of2.bin",
  "/tensorpose-demo/models/detector/model.json",
  "/tensorpose-demo/models/landmark/group1-shard1of2.bin",
  "/tensorpose-demo/models/landmark/group1-shard2of2.bin",
  "/tensorpose-demo/models/landmark/model.json",
  "/tensorpose-demo/mstile-150x150.png",
  "/tensorpose-demo/site.webmanifest"
], c = "1665504392990", l = self, t = l, p = `cache${c}`, r = i.concat(d), h = new Set(r);
function u(e) {
  e.waitUntil(
    caches.open(p).then((o) => o.addAll(r)).then(() => {
      t.skipWaiting();
    })
  );
}
function f(e) {
  e.waitUntil(
    caches.keys().then(async (o) => {
      for (const s of o)
        s !== p && await caches.delete(s);
      t.clients.claim();
    })
  );
}
async function b(e) {
  const o = await caches.open(`offline${c}`);
  try {
    const s = await fetch(e);
    return o.put(e, s.clone()), s;
  } catch (s) {
    const n = await o.match(e);
    if (n)
      return n;
    throw s;
  }
}
function _(e) {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const o = new URL(e.request.url), s = o.protocol.startsWith("http"), n = o.hostname === t.location.hostname && o.port !== t.location.port, a = o.host === t.location.host && h.has(o.pathname), m = e.request.cache === "only-if-cached" && !a;
  s && !n && !m && e.respondWith(
    (async () => a && await caches.match(e.request) || b(e.request))()
  );
}
t.addEventListener("install", u);
t.addEventListener("activate", f);
t.addEventListener("fetch", _);
