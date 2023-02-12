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
    "revision": "38d3420704d03ba40bfdd2c18bc0fa1f"
  },
  {
    "url": "assets/css/0.styles.565b1c87.css",
    "revision": "754ba1f7899992e15f744297575c7f05"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ad781c78.js",
    "revision": "899ef58f3f92b85d021edba26afd2097"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.6e2c7aa5.js",
    "revision": "dd9c343e5adea5288df3a5eab12f3a02"
  },
  {
    "url": "assets/js/16.f868886d.js",
    "revision": "c675477f2e17bea2023b9fbafcbb22ee"
  },
  {
    "url": "assets/js/17.4025fda4.js",
    "revision": "bc61fac2b292ef8bed45771d1ab7b412"
  },
  {
    "url": "assets/js/18.5c355aa4.js",
    "revision": "5f5c6fcb5da87725d71a27ab073aaebf"
  },
  {
    "url": "assets/js/19.686fa5bc.js",
    "revision": "a1d406c08ce6406bb14e2bc2a775469b"
  },
  {
    "url": "assets/js/2.fc35c0d2.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.0cd24c8e.js",
    "revision": "afe5cc056889b1eb9d04d2ac7dd6be35"
  },
  {
    "url": "assets/js/21.0c5a719e.js",
    "revision": "7ba28c865b708f4df664cfd7c93eb3b6"
  },
  {
    "url": "assets/js/22.c606fd39.js",
    "revision": "3a31629957ff84ce2060a72a9dfa96f7"
  },
  {
    "url": "assets/js/23.9c9cf32f.js",
    "revision": "ababb98b2fce59099380a5d4ca80a377"
  },
  {
    "url": "assets/js/24.e9fd0747.js",
    "revision": "aee22cad59c7b81c9981d293d118d54c"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.4ed45971.js",
    "revision": "b16159aab039353619946e13967d38e4"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.da9964a9.js",
    "revision": "25dc1348a91f0deb6e2f715432ca1c0f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "9bbcf3a26faf8f74be61b84aaeee8f1d"
  },
  {
    "url": "design/index.html",
    "revision": "5bee48112d046dd5891b5bed4cec65ce"
  },
  {
    "url": "index.html",
    "revision": "1c52d505234c688390902be4a93f5b27"
  },
  {
    "url": "intro/index.html",
    "revision": "6c9553efe54cf97efc1423fe89ae33ce"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "a23dd6d43d5d4261650ac78091dd783a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "d14cb193808fabd313fa70c1803d4b0b"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "6e6914e26a09fe870591aba8416cc215"
  },
  {
    "url": "software/index.html",
    "revision": "3cd76e82ffa46801dd780e5ef2fe4dcf"
  },
  {
    "url": "test/index.html",
    "revision": "6ad8ea18eeea359a6eb3ffd271b271c4"
  },
  {
    "url": "use cases/index.html",
    "revision": "e50ac242106e3049ad0b6ca736f2c94c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
