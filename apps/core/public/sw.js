if (!self.define) {
  let e,
    s = {};
  const i = (i, a) => (
    (i = new URL(i + ".js", a).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, c) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[n]) return;
    let t = {};
    const r = (e) => i(e, n),
      l = { module: { uri: n }, exports: t, require: r };
    s[n] = Promise.all(a.map((e) => l[e] || r(e))).then((e) => (c(...e), t));
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
          revision: "cab713aa0a54a0a86e3a0124a0c4d387",
        },
        {
          url: "/_next/static/14KUXgL2-rpAzDl-JiIs-/_buildManifest.js",
          revision: "21443ad91a517871007503a1d62e277c",
        },
        {
          url: "/_next/static/14KUXgL2-rpAzDl-JiIs-/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/05890246.c8ab7c003607c722.js",
          revision: "c8ab7c003607c722",
        },
        {
          url: "/_next/static/chunks/0620364a.9aa4860fdc7a8a06.js",
          revision: "9aa4860fdc7a8a06",
        },
        {
          url: "/_next/static/chunks/068ccefe.8c1afe97f4354581.js",
          revision: "8c1afe97f4354581",
        },
        {
          url: "/_next/static/chunks/080f0404.ff99f735e9e47279.js",
          revision: "ff99f735e9e47279",
        },
        {
          url: "/_next/static/chunks/132696a4-c043b271de398d78.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/1328.43f00fdf5b3a9ba6.js",
          revision: "43f00fdf5b3a9ba6",
        },
        {
          url: "/_next/static/chunks/133-bf458b7a52790064.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/1390-2ff027445496b8a8.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/1399-a6e87da2d323a859.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/1565-8ae91be37da5a266.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/1749.889bcbbd2a4492ec.js",
          revision: "889bcbbd2a4492ec",
        },
        {
          url: "/_next/static/chunks/1775.ee1a736d1a19b006.js",
          revision: "ee1a736d1a19b006",
        },
        {
          url: "/_next/static/chunks/1966.6ac762694379aab4.js",
          revision: "6ac762694379aab4",
        },
        {
          url: "/_next/static/chunks/22.1a4d559c47abaea3.js",
          revision: "1a4d559c47abaea3",
        },
        {
          url: "/_next/static/chunks/2320.5c194dd5bd16bb77.js",
          revision: "5c194dd5bd16bb77",
        },
        {
          url: "/_next/static/chunks/2620.726541ae2117ed1a.js",
          revision: "726541ae2117ed1a",
        },
        {
          url: "/_next/static/chunks/2775-a37224b3eb62d39e.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/2805.c14341974f749edc.js",
          revision: "c14341974f749edc",
        },
        {
          url: "/_next/static/chunks/2810-d5ec1432a2c053ad.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/2863.281db4813214580a.js",
          revision: "281db4813214580a",
        },
        {
          url: "/_next/static/chunks/2895-614b20968f8b7053.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/3095.20409fff10c1053c.js",
          revision: "20409fff10c1053c",
        },
        {
          url: "/_next/static/chunks/3236.bd88aedf5b542741.js",
          revision: "bd88aedf5b542741",
        },
        {
          url: "/_next/static/chunks/3371.c10e609b54b213d6.js",
          revision: "c10e609b54b213d6",
        },
        {
          url: "/_next/static/chunks/36621557-16b954bbf189d2ba.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/3671.ed6a288adbdb7d88.js",
          revision: "ed6a288adbdb7d88",
        },
        {
          url: "/_next/static/chunks/3880.984efb289337dabb.js",
          revision: "984efb289337dabb",
        },
        {
          url: "/_next/static/chunks/4084-4f1df0ededadfd8c.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/4250-653fe05f559261af.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/442-41b64973885763a7.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/4506-1f0e5dfb81abc17d.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/4539.33bd5fd9f91891bb.js",
          revision: "33bd5fd9f91891bb",
        },
        {
          url: "/_next/static/chunks/45c3b639.8d5546a8b9b7d96c.js",
          revision: "8d5546a8b9b7d96c",
        },
        {
          url: "/_next/static/chunks/4890-221d6c35ebe7f2b4.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/5048.e627499fc14569bd.js",
          revision: "e627499fc14569bd",
        },
        {
          url: "/_next/static/chunks/50a4494c-c2b50f65e50716bd.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/5222-855dd5cde2d2d3d7.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/5500-adda63fb89d7f457.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/5613-8d4bfb30fcdf2cf6.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/5759.9ac4f6c49da2327e.js",
          revision: "9ac4f6c49da2327e",
        },
        {
          url: "/_next/static/chunks/5879.6154677e339a2f29.js",
          revision: "6154677e339a2f29",
        },
        {
          url: "/_next/static/chunks/59a3459d-c1386f8d05bda9ff.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/6054.c3c2eebc6a9cf500.js",
          revision: "c3c2eebc6a9cf500",
        },
        {
          url: "/_next/static/chunks/61a38f51-7aca22a42e84d0fb.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/6249.84777a718471db25.js",
          revision: "84777a718471db25",
        },
        {
          url: "/_next/static/chunks/6366.48a660a0892b2985.js",
          revision: "48a660a0892b2985",
        },
        {
          url: "/_next/static/chunks/6df67f3a-19b8719809c31763.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/6e2e82ec-232f9b126b386c2e.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/7029.82929fc705b7bd55.js",
          revision: "82929fc705b7bd55",
        },
        {
          url: "/_next/static/chunks/7270.f57866ec739bf7b6.js",
          revision: "f57866ec739bf7b6",
        },
        {
          url: "/_next/static/chunks/7316-060714b90dd5f20c.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/7376-1aa5a6e54df4fae0.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/7779.a489844390263073.js",
          revision: "a489844390263073",
        },
        {
          url: "/_next/static/chunks/7820-9569e34437c1a16f.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/7895.1af259e8b9994ecb.js",
          revision: "1af259e8b9994ecb",
        },
        {
          url: "/_next/static/chunks/7989-ebd3587bc64255d7.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/808.9f4ff14289520f27.js",
          revision: "9f4ff14289520f27",
        },
        {
          url: "/_next/static/chunks/8206-24989739ceade204.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/8405.1fa64ac57b3a9628.js",
          revision: "1fa64ac57b3a9628",
        },
        {
          url: "/_next/static/chunks/8547.9b48d7d2f055848d.js",
          revision: "9b48d7d2f055848d",
        },
        {
          url: "/_next/static/chunks/8684-51b5fb3ef3485dad.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/8737-b8d683584937b86e.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/9137.992b7d32bdf8c1fa.js",
          revision: "992b7d32bdf8c1fa",
        },
        {
          url: "/_next/static/chunks/9159.de5efbcf29ca4e3c.js",
          revision: "de5efbcf29ca4e3c",
        },
        {
          url: "/_next/static/chunks/920-cd31d29a23b91e86.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/9859.e61db70e40ab2a08.js",
          revision: "e61db70e40ab2a08",
        },
        {
          url: "/_next/static/chunks/9a9706cc-c9473debe31b7a58.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/9e33a154-5e047fce2cfa3490.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/9ffa21ba-17f54dc907522211.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/a27f6c92-9991acf0309f528a.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-d3b59023b32ff23c.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/layout-50879687f7a27c1d.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-5ca57c80fe4b9acf.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-3fa958c8b99814ed.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-3eaffe7ee2bddd43.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/layout-b69f37dc85a1602d.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-868b0c86fb4da7d5.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/layout-710ccaa8e657b122.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-7e8056a2dae32b11.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-f34225f8b97a764c.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-8b404db1020605bd.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(experimental)/layout-e07ca3bf670e2043.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(experimental)/posts/%5Bslug%5D/page-0cb00adfd8845b40.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(experimental)/posts/layout-4ec03f9d0f1bd038.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(experimental)/test/layout-4767981fe6a7690c.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(experimental)/test/page-c8f71f44b4497955.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(experimental)/unsigned/layout-b4f59dcfcd322354.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(experimental)/unsigned/page-73e4741abb383901.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(experimental)/video/%5Bslug%5D/page-5cf20ab14935d7a1.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(experimental)/video/layout-7f8b9dfb606c59f7.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(lobby)/layout-85fabaa2bb422a7c.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(lobby)/page-cefc185a22777110.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(lobby)/pricing/layout-aa37234bb91207f7.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(lobby)/pricing/page-3bde0778ecb6d5df.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(lobby)/welcome/layout-b729e001c17fe2f9.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(lobby)/welcome/page-a62e300d04fe8c81.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(sanity)/studio/%5B%5B...index%5D%5D/page-2ad2f5b7bfbc0238.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/error-e4aa9fc3555cdd03.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-0af9f2ab85982622.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/loading-9ecb1482df4a03f2.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-33a0d6b330f156b2.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/_not-found-6ef09094b952d04c.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/app/layout-28ad2547ce503285.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/b8e33433-30f699b42debd527.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/c5363472-27d245ab5fc20f6a.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/ef01c9fb-da02e026e871ed0a.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/fe56b05f-c979eb422044b866.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/framework-af9b1d45774ad36d.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/main-28df6525f60f31f1.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/main-app-551e0da3eb79efc4.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/pages/_app-a4a76331adf1df8c.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/pages/_error-eb1ac2ffeca4e645.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-e70eaa17acab220e.js",
          revision: "14KUXgL2-rpAzDl-JiIs-",
        },
        {
          url: "/_next/static/css/19772fe61074f098.css",
          revision: "19772fe61074f098",
        },
        {
          url: "/_next/static/css/40e14341ea2ebcd2.css",
          revision: "40e14341ea2ebcd2",
        },
        {
          url: "/_next/static/css/bcca0f7912e5cf6f.css",
          revision: "bcca0f7912e5cf6f",
        },
        {
          url: "/_next/static/media/05a31a2ca4975f99-s.woff2",
          revision: "f1b44860c66554b91f3b1c81556f73ca",
        },
        {
          url: "/_next/static/media/1282ebc61b96a9d9-s.p.ttf",
          revision: "ea5879884a95551632e9eb1bba5b2128",
        },
        {
          url: "/_next/static/media/2a2f0a2acb227a56-s.p.ttf",
          revision: "1753a05196abeef95c32f10246bd6473",
        },
        {
          url: "/_next/static/media/513657b02c5c193f-s.woff2",
          revision: "c4eb7f37bc4206c901ab08601f21f0f2",
        },
        {
          url: "/_next/static/media/51ed15f9841b9f9d-s.woff2",
          revision: "bb9d99fb9bbc695be80777ca2c1c2bee",
        },
        {
          url: "/_next/static/media/a32dfa2b07c3c134-s.p.ttf",
          revision: "805f19a5237533c893b6a6f00dd3ef35",
        },
        {
          url: "/_next/static/media/c146dcab14729d84-s.p.ttf",
          revision: "ba74cc325d5f67d0efbeda51616352db",
        },
        {
          url: "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",
          revision: "74c3556b9dad12fb76f84af53ba69410",
        },
        {
          url: "/_next/static/media/d6b16ce4a6175f26-s.woff2",
          revision: "dd930bafc6297347be3213f22cc53d3e",
        },
        {
          url: "/_next/static/media/ec159349637c90ad-s.woff2",
          revision: "0e89df9522084290e01e4127495fae99",
        },
        {
          url: "/_next/static/media/fd4db3eb5472fc27-s.woff2",
          revision: "71f3fcaf22131c3368d9ec28ef839831",
        },
        {
          url: "/favicon/android-chrome-192x192.png",
          revision: "87012cd05001408e02b1fbca59f46342",
        },
        {
          url: "/favicon/android-chrome-512x512.png",
          revision: "94508b12c21636a181b2a4dce889440d",
        },
        {
          url: "/favicon/apple-touch-icon.png",
          revision: "29c346c8be59005f7fbb7f01aeb91bfb",
        },
        {
          url: "/favicon/browserconfig.xml",
          revision: "c9f4763fc036a58115006c8d1a6aea0d",
        },
        {
          url: "/favicon/favicon-16x16.png",
          revision: "c20c298cea5f506216e2e699429b9385",
        },
        {
          url: "/favicon/favicon-32x32.png",
          revision: "b71ce1c05654701f24a8f1e55e63cf3c",
        },
        {
          url: "/favicon/favicon.ico",
          revision: "8939d1503e9629ef0e701f839e812ae1",
        },
        {
          url: "/favicon/mstile-144x144.png",
          revision: "87d752b90dc4f0c710cd0a720f45d4b0",
        },
        {
          url: "/favicon/mstile-150x150.png",
          revision: "0110512980dba6d689ce61fa7b6a5cdf",
        },
        {
          url: "/favicon/mstile-310x150.png",
          revision: "63815e71a86793062895fdb2f00144af",
        },
        {
          url: "/favicon/mstile-310x310.png",
          revision: "95a9dd69a15e69d4ab7b08720d34515c",
        },
        {
          url: "/favicon/mstile-70x70.png",
          revision: "0b717268c917fc023eebc601f566e5d1",
        },
        {
          url: "/favicon/safari-pinned-tab.svg",
          revision: "f1ce1c46cc4c7c45ec2bef63431f4cff",
        },
        {
          url: "/favicon/site.webmanifest",
          revision: "8093cf8e95b087e9277b6e62753e9425",
        },
        {
          url: "/icon/icon-128x128.png",
          revision: "7206a3c9f6363f503f3d8cd79d8f6f98",
        },
        {
          url: "/icon/icon-144x144.png",
          revision: "c912d579e970e6efbb323821a343025d",
        },
        {
          url: "/icon/icon-152x152.png",
          revision: "46df7442fafa9a0b910803c9274bd27e",
        },
        {
          url: "/icon/icon-192x192.png",
          revision: "97f137e686f952ec5f6411c7e4aed975",
        },
        {
          url: "/icon/icon-256x256.png",
          revision: "437612f48ecd1236f0c56c1060ce682b",
        },
        {
          url: "/icon/icon-384x384.png",
          revision: "9d464a8bb7704f68f99a6314cc1ca2ed",
        },
        {
          url: "/icon/icon-512x512.png",
          revision: "d14db847e659cae0fa9c2addb9fff054",
        },
        {
          url: "/icon/icon-72x72.png",
          revision: "2ec23d3cc1bd3496c183a2fcbe0e6b95",
        },
        {
          url: "/icon/icon-96x96.png",
          revision: "67cdea935ae7bf94113b242307cf20c4",
        },
        { url: "/manifest.json", revision: "037ea7fe7b07fb4c74b0d663a29a72b0" },
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
              response: s,
              event: i,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
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
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
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
