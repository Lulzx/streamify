if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-14389475"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1678-321ef7979b45eaef.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/187-5dd019573c9033ec.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/3797-d02884a4022ea682.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/3937-0a13aa07a1af3494.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/4563-c7b4a88f9f4f452e.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/4644-f50a7029bf5e6320.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/4661-d8cc436efb9f2b97.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/5430-cbdd618b0a66c4ec.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/5769-c2f32d7edb890785.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/58-cd0bdd8fb852bdef.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/5806-3debc39cf9bc71e0.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/6010-36920bd76f3e015e.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/6203-c20db438828ad0c3.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/6411-32ca20e1afa65210.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/6748-5a5653d163e9bd50.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/6938-42fd1360cb45dd4f.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/8446-2902123654be58c0.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/9306-7e5a8c8e5f86af72.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/9360-e230a35eb8268688.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/9759-5634c1d431898dd4.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/a3f1e7fe-32e4ab277f2d3a45.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/layout-5866c7efafc32886.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/layout-f8e4bde047f05df6.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/page-ff37545b4b8c604f.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/page-bdd0559ee578a384.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signin/reset-password/step-2/page-f91074da21dedead.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/layout-1838bd26c766915d.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signout/page-f0330f5f921a30fe.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/layout-422393f7dd66ef94.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/page-254024bd36be5400.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/signup/verify/page-cbf249c8df4a0463.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(auth)/sso-callback/page-36ebde04d6c7795f.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/home/page-ec4bd5a6c60e162f.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/layout-3bfc29e9bd050ef7.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/live/page-50dae56f90223bc0.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/matches/page-dd844e489e40a1b2.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/page-491cf8f0386c96b2.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/players/page-68f4940bc88fcc60.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(open-lobby)/subscribe/page-97367e965cfecbce.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/layout-3d3f04fa7a260c43.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(restricted-lobby)/plus/page-886a212093a94bd8.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(test)/layout-bc36ef7438b486e8.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/(test)/test/page-80e7edf9c2d07a3c.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-6b479405063a7266.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/loading-53fa9f81cf2d2a5f.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/%5Blocale%5D/not-found-11e6abe55884afe6.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/layout-476e354ec5f8a35d.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/loading-beb5aee1de83b14b.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/not-found-8e85522b1e984d62.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/app/page-6c7e9a40fe8bacb7.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/framework-0b20e5459de8ca7b.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/main-a009b1f148a7665e.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/main-app-91cc8d49267207b5.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/pages/_app-40dd9269b69f87dd.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/pages/_error-ffdae521629adfd4.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-eeb9f2b0fcdde13a.js",revision:"q05HU3WtYsVE173mYYXOP"},{url:"/_next/static/css/23df03b5723e0b47.css",revision:"23df03b5723e0b47"},{url:"/_next/static/css/849424d1fcbf394b.css",revision:"849424d1fcbf394b"},{url:"/_next/static/q05HU3WtYsVE173mYYXOP/_buildManifest.js",revision:"1a99a87d765b234c39d223b950e6b5bf"},{url:"/_next/static/q05HU3WtYsVE173mYYXOP/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
