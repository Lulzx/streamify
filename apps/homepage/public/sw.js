if (!self.define) {
  let e,
    t = {};
  const s = (s, n) => (
    (s = new URL(s + ".js", n).href),
    t[s] ||
      new Promise((t) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = t), document.head.appendChild(e);
        } else (e = s), importScripts(s), t();
      }).then(() => {
        let e = t[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, a) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (t[i]) return;
    let c = {};
    const o = (e) => s(e, i),
      l = { module: { uri: i }, exports: c, require: o };
    t[i] = Promise.all(n.map((e) => l[e] || o(e))).then((e) => (a(...e), c));
  };
}
define(["./workbox-8c8aeaed"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "227cf4d98480315cf02425ac27962a0a",
        },
        {
          url: "/_next/static/1Zpl_vekABqbt3tC50K8h/_buildManifest.js",
          revision: "dacda1a3fd2ce60becca80a29d98f0f6",
        },
        {
          url: "/_next/static/1Zpl_vekABqbt3tC50K8h/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/13-18ef1a9561cb21bd.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/163-4738cec2c57556d6.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/177-61e13c0bfbef61b2.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/288-65ac502f43d0793e.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/320-247224fa2e0d4707.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/33-c85b281230a2d972.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/383-73426ba577818524.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/402-287aebad1f645573.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/455-5a7be70b27b10011.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/551-1b44b4b4212ed9bf.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/556-cc442a393d4ed3ee.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/559-0e45e8f3cb7f4e42.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/626-e77f12b3f8bdaeed.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/760-3f79b1a3ecf76347.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/806-c44ef47569f2c618.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/817-18827ac9baad8fd1.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/837-bb9dd0c9b963ddda.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/936-a4fd93134006121f.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/938-f103d2b48dfb523c.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/a3f1e7fe-4fac83f4bdbab8dc.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-e3a79c943a5c0455.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-1129af062164ae78.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-a3026f9ae7f546e5.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-29ccb160a7fe5465.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-7f398593f9d70df9.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-4b28937f09750655.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-dc95176cb5c71fc9.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-51cd9d4ad0e0936b.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(internal)/team/%5Bslug%5D/page-6c661f6d91709a8c.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/blog/%5Bslug%5D/page-537a14493ddc36d9.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-451d91336d726867.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/not-found-578e9347074adc2d.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-73885f105d39c450.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/pricing/layout-b27b94c33f415bc1.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/pricing/page-1f5d3de1c9d11fe1.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/dashboard/page-ecb0a6981243a4aa.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-9609cd91e4938cbd.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/not-found-fa706b4e95f63318.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-7bf866d39091f8c9.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/loading-39b049f0e8b7f89f.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-c2519e75d80c4e6f.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/_not-found-94f40b82d98940b6.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/layout-03bf48f604615653.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/app/page-3f024b0d2eb26359.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/framework-eb124dc7acb3bb04.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/main-5cb7ff3b3137149b.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/main-app-b0ea9566a97f1537.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/pages/_app-5e8ea5abfef45674.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/pages/_error-ef46b9f36eb00a37.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-1e1f3c1250c46666.js",
          revision: "1Zpl_vekABqbt3tC50K8h",
        },
        {
          url: "/_next/static/css/23df03b5723e0b47.css",
          revision: "23df03b5723e0b47",
        },
        {
          url: "/_next/static/css/8ab8e37ea78d0ac9.css",
          revision: "8ab8e37ea78d0ac9",
        },
        {
          url: "/favicon/android-chrome-192x192.png",
          revision: "560d18324556cadfcc2086cc046ec712",
        },
        {
          url: "/favicon/android-chrome-512x512.png",
          revision: "bad3fa352eb0318c018cb984ef908288",
        },
        {
          url: "/favicon/apple-touch-icon.png",
          revision: "ba75e6956859b8fe23ce6e9d8b121eb0",
        },
        {
          url: "/favicon/browserconfig.xml",
          revision: "e4e40b0c82d228add33b5bcfe276a859",
        },
        {
          url: "/favicon/favicon-16x16.png",
          revision: "9d88813298a4caf0a7554ceee4e56945",
        },
        {
          url: "/favicon/favicon-32x32.png",
          revision: "c22b13899b0b07c9b5fd331288344155",
        },
        {
          url: "/favicon/favicon.ico",
          revision: "78b252ce50947954133e07dd46b5ff9e",
        },
        {
          url: "/favicon/mstile-150x150.png",
          revision: "bf3d7ad8816696affd99c2de339fa7f0",
        },
        {
          url: "/favicon/safari-pinned-tab.svg",
          revision: "2908df4d46385f3bf448a81be2758939",
        },
        {
          url: "/icon/icon-192x192.png",
          revision: "458d20e1d2580482e53921386810fb11",
        },
        {
          url: "/icon/icon-256x256.png",
          revision: "c522ba21b41e6ae7ef6d80f995aefcbc",
        },
        {
          url: "/icon/icon-384x384.png",
          revision: "d03ce92e7de94296af5b92f2d62b8b0f",
        },
        {
          url: "/icon/icon-512x512.png",
          revision: "c520e0ade99a1dd2ac3740688436a89b",
        },
        { url: "/manifest.json", revision: "9d0e4bb037c7c5600730eadfcfb3b93e" },
        {
          url: "/registerServiceWorker.ts",
          revision: "8765915b36d922d470a3e0473e2ea46e",
        },
        {
          url: "/scripts/pixel.js",
          revision: "5108fa87c35985f2192a73aebcbd21be",
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: t,
              event: s,
              state: n,
            }) =>
              t && "opaqueredirect" === t.type
                ? new Response(t.body, {
                    status: 200,
                    statusText: "OK",
                    headers: t.headers,
                  })
                : t,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const t = e.pathname;
        return !t.startsWith("/api/auth/") && !!t.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
