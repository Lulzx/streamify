if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>a(e,c),o={module:{uri:c},exports:i,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-14389475"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/AhQq-j8xSXBOOMNL5a2ON/_buildManifest.js",revision:"12945c04e8c627e99c0fa16bfb3c8ea8"},{url:"/_next/static/AhQq-j8xSXBOOMNL5a2ON/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/14-b476db2f4504d764.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/157-05b6838cd2901e97.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/169-380647d35096e671.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/193-9edd6ddcf2cd5214.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/218-a64bfc7ba7c1b594.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/320-c3838731ea6811eb.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/482-f7b202caf5c9daa2.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/483-e79ac216b2bdd674.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/581-3b0ee1d528ea9e5c.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/647-bb3234ec0f0001af.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/651-22d915a99bd7b791.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/675-7143251eae23e32f.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/7165ce4d-29037dc9c5c581ee.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/838-107345369174ee3e.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/880-7463cf17c06151e2.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/907-c993d32a8ad273c1.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/91-3fa2f6b3772b7a12.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/952-3ad25a22a0f38a2d.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-64fdac4dbc20f9a9.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-2c05f3fc56b5f69f.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-600e67eadb2dd3c2.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-4a6d207cbced9da9.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-08b1e118bc26adf2.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-df962b4787e2b5c6.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-60752dc0b67436e3.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-258ff62ead7c6c87.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/home/page-4bde1bee7a2351c7.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-5b9aca93602fc8c1.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/live/page-759a3391be608b8a.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/matches/page-a2195915f5a655e2.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-ac9dbc7e02608f61.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/players/page-ba2c9560d73ccde2.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/subscribe/page-fc9addf91c9fb1c6.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-77a45ff19671fc14.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/plus/page-67e849f54ab7f03f.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/(test)/test/page-70dbd3d0ec6b982b.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-d07bf37abc93da27.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/loading-b39778879c273af2.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/%5Blocale%5D/not-found-78f3ddf47fb836bb.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/layout-de0fbb416cc1499d.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/not-found-6cef52c748b84ab1.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/app/page-32974f3bd66c5639.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/framework-eb124dc7acb3bb04.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/main-app-85a5635d4f178ef4.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/main-ed821f054b10a4d5.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/pages/_app-833083005ca84465.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/pages/_error-7f351391d89f3c81.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-18d0f099bd3dad59.js",revision:"AhQq-j8xSXBOOMNL5a2ON"},{url:"/_next/static/css/23df03b5723e0b47.css",revision:"23df03b5723e0b47"},{url:"/_next/static/css/385ea3d63c2f4c03.css",revision:"385ea3d63c2f4c03"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
