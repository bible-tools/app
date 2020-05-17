/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "647975c0bdeae9e53e4d2c30db94e0b0"
  },
  {
    "url": "dist/esm/_rollupPluginBabelHelpers-6e21a838.js",
    "revision": "ceddf03e076bf168ba1fea55e73cbeeb"
  },
  {
    "url": "dist/esm/bible-tools-app.js",
    "revision": "2b1f3531698c83128c7634c6698abba8"
  },
  {
    "url": "dist/esm/BibleToolsApp.js",
    "revision": "84aa0b9c772366c252aecfa50e1239da"
  },
  {
    "url": "dist/esm/BibleToolsBookMenu-72c0fe6a.js",
    "revision": "412a7aeea4fb0a408dc05ddc99ea0971"
  },
  {
    "url": "dist/esm/BibleToolsBookMenu.js",
    "revision": "5d2c82f2b6a95f1518927dad50b70083"
  },
  {
    "url": "dist/esm/BibleToolsBranding.js",
    "revision": "0e42d96f996c3c91356db6d066e539e6"
  },
  {
    "url": "dist/esm/BibleToolsChapterNavigator.js",
    "revision": "b0ff0988f38309f9c8f397e7c0105fbb"
  },
  {
    "url": "dist/esm/BibleToolsChapterRangeView.js",
    "revision": "72d25ba5efef3eac1b49c19063a04eec"
  },
  {
    "url": "dist/esm/BibleToolsDrawer.js",
    "revision": "c7285c3ca97bcaa3678010567d8e40f0"
  },
  {
    "url": "dist/esm/BibleToolsHamburger.js",
    "revision": "7d741c69f5ff74aae21f70ff0a1f76c6"
  },
  {
    "url": "dist/esm/BibleToolsPreferences.js",
    "revision": "50ba5b890d1200aa11c117487d282615"
  },
  {
    "url": "dist/esm/BibleToolsSingleChapterRange.js",
    "revision": "01c770a46fa0dac3822c32af617cc2e2"
  },
  {
    "url": "dist/esm/BibleToolsSingleVerse.js",
    "revision": "a44ad1a7d85224bb05052ae853eeefaa"
  },
  {
    "url": "dist/esm/BibleToolsSingleVerse2.js",
    "revision": "bf334a85905fe21217f1d3fb8c42003d"
  },
  {
    "url": "dist/esm/BibleToolsTheme.js",
    "revision": "4bcb843b135a1320d444ffd47ca3f7cf"
  },
  {
    "url": "dist/esm/configureStore.js",
    "revision": "23acd11ab32a2066fad14b11ad14d28a"
  },
  {
    "url": "dist/esm/connect-mixin-144a42a2.js",
    "revision": "a49ca2c2db5b35f334fe05ae290c94ac"
  },
  {
    "url": "dist/esm/creators.js",
    "revision": "6ee97f1b6c7574081f01584d108f7ed7"
  },
  {
    "url": "dist/esm/dispatchers.js",
    "revision": "81b957630d0f836857ed051624ee699f"
  },
  {
    "url": "dist/esm/events.js",
    "revision": "6e51e26a0292904d6b33c1b3c694a28e"
  },
  {
    "url": "dist/esm/index.js",
    "revision": "3bad80507283a3006edfee58be3a9e48"
  },
  {
    "url": "dist/esm/index2.js",
    "revision": "397a6d752714df4cc7361afe5bf05f95"
  },
  {
    "url": "dist/esm/index3.js",
    "revision": "a7c56129f2d5561067c06b22df2a7459"
  },
  {
    "url": "dist/esm/index4.js",
    "revision": "02948e2bb283b6d648bcb85969150bdd"
  },
  {
    "url": "dist/esm/index5.js",
    "revision": "410cebec36ddda5009b738f220c0304f"
  },
  {
    "url": "dist/esm/index6.js",
    "revision": "bb9f94d746879626487fec34550ed142"
  },
  {
    "url": "dist/esm/index7.js",
    "revision": "d4b1a0191c534638f9e849aeb37d54ce"
  },
  {
    "url": "dist/esm/initialState.js",
    "revision": "8b757f34967059c2dbb79ac2d2a3c2d2"
  },
  {
    "url": "dist/esm/iron-button-state-17c6d549.js",
    "revision": "b4a4eb8c1609cde7b2be21e062021449"
  },
  {
    "url": "dist/esm/iron-iconset-svg-9456d0fa.js",
    "revision": "4933839670b4a33ac3e798c064dde337"
  },
  {
    "url": "dist/esm/language.js",
    "revision": "58bff861995d244471c8ac1387ade1c8"
  },
  {
    "url": "dist/esm/lit-element-51727a0b.js",
    "revision": "512ccced44d65e9a956bf7b61de1fc1d"
  },
  {
    "url": "dist/esm/lit-redux-router-4dc3c97f.js",
    "revision": "402afdc4f0694ccba41e3c21afb4ff53"
  },
  {
    "url": "dist/esm/Loading.js",
    "revision": "eaec364fa1849160e401b9ff5a1e9ab8"
  },
  {
    "url": "dist/esm/middleware.js",
    "revision": "38a4f40b4dca48c7a89300a65ba9c47d"
  },
  {
    "url": "dist/esm/paper-item-d7bfa35b.js",
    "revision": "b742bf7de5725b6397bde0cd7705f492"
  },
  {
    "url": "dist/esm/redux-ce442100.js",
    "revision": "514d66c45b671e4e4fee06da7dc6e850"
  },
  {
    "url": "dist/esm/thunks.js",
    "revision": "bc3dba204621030e8dd7331fa0cb518f"
  },
  {
    "url": "dist/esm/types.js",
    "revision": "9d9b9dc8cc310916440d7c1a83b7f460"
  },
  {
    "url": "dist/esm/unsafe-html-8b0a0b93.js",
    "revision": "d9bd79227c043f3d8ddbba841b99055b"
  },
  {
    "url": "dist/esm/utilities.js",
    "revision": "f7efa89104771e756a754b5709f5c699"
  },
  {
    "url": "dist/esm/version.js",
    "revision": "8f4ee1d891c7f3054d3fd33dd3c37e66"
  },
  {
    "url": "favicon.ico",
    "revision": "b7a3dfde1f5d5e2437eeb9b4243cb473"
  },
  {
    "url": "icons/apple-touch-icon-114x114.png",
    "revision": "3205328186a247df9e81a6305bd4b514"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "9bb2995eeaabccb56b2eb648f370d15b"
  },
  {
    "url": "icons/apple-touch-icon-144x144.png",
    "revision": "706e1cbe0434152401aaf7a426bd99d9"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "2647f271f667b276a66909708ab0c09c"
  },
  {
    "url": "icons/apple-touch-icon-57x57.png",
    "revision": "e7af7dcb74ce899932f53a480983ca57"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "178774888157a69d3ef1ac0f7823ccec"
  },
  {
    "url": "icons/apple-touch-icon-72x72.png",
    "revision": "95b78597f9c13a1976167ee6ebfca1d0"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "c9c3f471a027633246730ac41988067e"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "be9a1e2d1185f65408ace044d4c7f64c"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "bd7ec5f5333daf6946a955fef9370931"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "d63129b4339fb8c69e90a366b660b423"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "5c85cc3b8258bb41f01c838fb44874fd"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "13745aa5f05018b025312aecb1ea8127"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "4f8a92cb6fa5128f41731f0e5784a7f1"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "213685b33cedbaac4295167696f73f29"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "576f9d87f0ce676ae11db061c2efc9b4"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "706e1cbe0434152401aaf7a426bd99d9"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "bcd6f605c6fb2eb22bc780048a29cde9"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "4c911eab49dafb24e79443ed7f16e59b"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "ad69b04fa70f4a5fdbc0b8409b8d3a30"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "be9a1e2d1185f65408ace044d4c7f64c"
  },
  {
    "url": "index.html",
    "revision": "a21c190c1f067cc742474655a560cee9"
  },
  {
    "url": "service-worker/registerServiceWorker.js",
    "revision": "2430ad6c9c7564564959df43b746fb26"
  },
  {
    "url": "service-worker/workbox-config.js",
    "revision": "579493a492265b98465d7b872e336173"
  },
  {
    "url": "theme.css",
    "revision": "63739f7440e59267451a76f017385b1a"
  },
  {
    "url": "/app/",
    "revision": "5eeb88e96e1d3933000a54716bf87278"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 100, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/bible-tools.github.io\/data\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"bible-tools-data", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
