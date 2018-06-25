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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a55cf62e14480c828d4c39661447a905"
  },
  {
    "url": "about.html",
    "revision": "44f89db3c8af7369fb639dfa724819ea"
  },
  {
    "url": "assets/css/2.styles.99fff53e.css",
    "revision": "79c6af2569c7823bd4809a696cee8f7f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.21bf38e5.js",
    "revision": "d74ef84fbd75f298d576a1a57fc64ab1"
  },
  {
    "url": "assets/js/1.1497dc71.js",
    "revision": "c39e37785eca6f3b4e402b0ae7bb5cf1"
  },
  {
    "url": "assets/js/app.862aaabd.js",
    "revision": "af9836cfda7f28110a2877b38b239980"
  },
  {
    "url": "index.html",
    "revision": "42cb8e7f543e3c1befee5a7981a35563"
  },
  {
    "url": "mac_search.png",
    "revision": "dddfb8ba12c020841b79699952ca8c75"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
