<<<<<<< HEAD
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return (
      registry[uri] ||
      new Promise((resolve) => {
        if ("document" in self) {
          const script = document.createElement("script");
          script.src = uri;
          script.onload = resolve;
          document.head.appendChild(script);
        } else {
          nextDefineUri = uri;
          importScripts(uri);
          resolve();
        }
      }).then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri =
      nextDefineUri ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = (depUri) => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require,
    };
    registry[uri] = Promise.all(
      depsNames.map((depName) => specialDeps[depName] || require(depName)),
    ).then((deps) => {
      factory(...deps);
      return exports;
    });
  };
}
define(["./workbox-95bb2c07"], function (workbox) {
  "use strict";

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute(
    "/",
    new workbox.NetworkFirst({
      cacheName: "start-url",
      plugins: [
        {
          cacheWillUpdate: async ({ request, response, event, state }) => {
            if (response && response.type === "opaqueredirect") {
              return new Response(response.body, {
                status: 200,
                statusText: "OK",
                headers: response.headers,
              });
            }
            return response;
          },
        },
      ],
    }),
    "GET",
  );
  workbox.registerRoute(
    /.*/i,
    new workbox.NetworkOnly({
      cacheName: "dev",
      plugins: [],
    }),
    "GET",
  );
});
//# sourceMappingURL=sw.js.map
=======
if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const u=e=>a(e,c),r={module:{uri:c},exports:t,require:u};s[c]=Promise.all(n.map((e=>r[e]||u(e)))).then((e=>(i(...e),t)))}}define(["./workbox-8c8aeaed"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"9d56bcaeabb3592c134387f68d9e058a"},{url:"/_next/static/RGpy4aXmzuW3S1NBxsO6w/_buildManifest.js",revision:"dacda1a3fd2ce60becca80a29d98f0f6"},{url:"/_next/static/RGpy4aXmzuW3S1NBxsO6w/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/117-639024600e865739.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/13-f8c6ff89c0088de5.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/140-e28423e60699ea1b.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/163-1cb3278e2f439cad.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/177-d05729304e49e823.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/240-9a52e21723f6961c.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/251-dd84103746c74a7e.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/26-55a3bbfd88a00d8b.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/294-0d3371d70185da54.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/383-73426ba577818524.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/436-b881af0b9ea8e00b.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/559-b819e6bcc20757fe.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/626-fe888c26f62c5e64.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/806-892a6249364875ff.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/817-d76710ea150e3789.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/889-e1d91009738d5917.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/938-f103d2b48dfb523c.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/968-9197e367a29caa21.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/a3f1e7fe-4fac83f4bdbab8dc.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-85eb64070625ee3e.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-00502c242a631283.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-6752329e246f4596.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-d3e29515776ac9e6.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-6355e4ac4cb0afc4.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-da41eca4e1e7c2be.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-0d59d9196a8e86d6.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-07eb6d90fa75cf13.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(internal)/team/%5Bslug%5D/page-6c661f6d91709a8c.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/blog/%5Bslug%5D/page-537a14493ddc36d9.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-11bf870be1ae3012.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/not-found-fb62a6a389d20f48.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-6d661250db44eec2.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/pricing/layout-b27b94c33f415bc1.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/pricing/page-b1810f065da83ead.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/dashboard/page-ecb0a6981243a4aa.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-09cc8ae18d847b37.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/not-found-64ae6efac99b1c31.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-c692b7cb59060656.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/loading-39b049f0e8b7f89f.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/%5Blocale%5D/not-found-869ebad44eaca4dd.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/_not-found-94f40b82d98940b6.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/layout-b5eaaefaab53deac.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/app/page-3f024b0d2eb26359.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/framework-eb124dc7acb3bb04.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/main-app-b0ea9566a97f1537.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/main-d5df5dc86d4e05e0.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/pages/_app-5e8ea5abfef45674.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/pages/_error-ef46b9f36eb00a37.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-09fb11b975d6ff8d.js",revision:"RGpy4aXmzuW3S1NBxsO6w"},{url:"/_next/static/css/23df03b5723e0b47.css",revision:"23df03b5723e0b47"},{url:"/_next/static/css/8ff9648731b6871a.css",revision:"8ff9648731b6871a"},{url:"/favicon.ico",revision:"78b252ce50947954133e07dd46b5ff9e"},{url:"/favicon/android-chrome-192x192.png",revision:"560d18324556cadfcc2086cc046ec712"},{url:"/favicon/android-chrome-512x512.png",revision:"bad3fa352eb0318c018cb984ef908288"},{url:"/favicon/apple-touch-icon.png",revision:"ba75e6956859b8fe23ce6e9d8b121eb0"},{url:"/favicon/browserconfig.xml",revision:"e4e40b0c82d228add33b5bcfe276a859"},{url:"/favicon/favicon-16x16.png",revision:"9d88813298a4caf0a7554ceee4e56945"},{url:"/favicon/favicon-32x32.png",revision:"c22b13899b0b07c9b5fd331288344155"},{url:"/favicon/mstile-150x150.png",revision:"bf3d7ad8816696affd99c2de339fa7f0"},{url:"/favicon/safari-pinned-tab.svg",revision:"2908df4d46385f3bf448a81be2758939"},{url:"/icon-192x192.png",revision:"458d20e1d2580482e53921386810fb11"},{url:"/icon-256x256.png",revision:"c522ba21b41e6ae7ef6d80f995aefcbc"},{url:"/icon-384x384.png",revision:"d03ce92e7de94296af5b92f2d62b8b0f"},{url:"/icon-512x512.png",revision:"c520e0ade99a1dd2ac3740688436a89b"},{url:"/manifest.json",revision:"45a9fcac5088271daa38e01291294494"},{url:"/registerServiceWorker.ts",revision:"8765915b36d922d470a3e0473e2ea46e"},{url:"/scripts/pixel.js",revision:"5108fa87c35985f2192a73aebcbd21be"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
>>>>>>> 47ce9099091d98b3e79bf71681324d8fa0298c1b
