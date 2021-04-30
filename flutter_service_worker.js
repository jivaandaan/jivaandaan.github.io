'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "64571902f77280cd6a42e3da3eb9770d",
".git/config": "c272c84963ecdf1e8f72809724a2d9ad",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "3708a8665cf4cf0ce8d7c0c380200581",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "97cda6e51e83bf6a98e2f8ff635232ba",
".git/logs/refs/heads/main": "9e0de3bc533668d8c77c3f3dbae5c0d5",
".git/logs/refs/remotes/origin/main": "ed0d1f7f70a24b089ad875d9e95f2f50",
".git/objects/00/a60490bf8d6c8d9f585f80363d73cf1d247815": "115ce3b3266c7ce77656fb72cacec83d",
".git/objects/06/edb97eb445e41339eaac07bc7af53a2bd8ed38": "1416e0720891b9c1d8c976e46c7a6e53",
".git/objects/11/8e73a6fe90452113659122dbdd078b50e099f8": "4f51ed4dec8922617b8fb21495bddccb",
".git/objects/1a/aae6d8f66200f88289528330ae5408b1d5c23f": "65d2525562648d5805c36bc741100d67",
".git/objects/1d/d64985daf2019ac26c34b2e0b3709cc12b52fb": "26d2f2d887be347dfadceadae30d5e89",
".git/objects/20/c1ae68a20f58d6ac52d3f9b322ac06f09137d7": "a4a695b6bca0c2f30298201df28388e2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/39/9601d62785e19ef45fe6c0f5a3c000dfd21f2a": "9cbc1546af2be1f8512518cc26b348a5",
".git/objects/40/85b42576279f42c820ac13097ca02b4da156b6": "28b194e0bfc581e7d15f4f83763b48d1",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/43/60f63ffaebfcdc623c78690e2267fa625fbbba": "64c9061eec891241e1a2fd3188ce75b6",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4f/98e0cf6edc37155ad772ffe37a62cff997c0c7": "77738abac3029a0dad656442358025dc",
".git/objects/5d/29768f104e99795ff2a837d276784b0ace2d32": "1e8a53a5622ef758e0e9b2b9b2b43b4d",
".git/objects/62/31f25a3efef4a15c6dbabcc60f58a7409921ad": "19c7c1ce4444ef40187de59d4b7386ba",
".git/objects/62/4e306bb83cde71862063d3b2316c66997d7bcd": "103ab4f19e233d847246461b0785d945",
".git/objects/67/dc3519003c810bdbcbfb11c9426d3c1fe44755": "ae8551b731b2fd6c77551d271eeb99d6",
".git/objects/6f/ab22b02f546ee36ba97988ea3647a986f51ad4": "66236c614492de0bb0aa183889e273cd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/89/56994edff04d8acf457602cd032ae35378bf6f": "6a73e596c03c98ee700687fcb30abd58",
".git/objects/8c/6b50ff905efb93ea8651020e7436b679043af1": "9f1290bb454b973d563aab580f59a151",
".git/objects/8c/9a54bb3f443185ab89eae11a1a7d98bfcb4bdd": "9270649c0561fc8ec7145e53675b547d",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/8f/6213d492a93a0b163ff9e7707464ff7026e7e2": "45eaea18f8c95788a321e7bd39230495",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/98/05482345f9d7aa94bbf0fb8a9052acdb87cb46": "9b1c223ab8f57ea9cb1dd9703d577a90",
".git/objects/9d/fb5a2c39d90be38b8b44c50be29391ee5ff579": "9e388497617d05a91273139ed950194c",
".git/objects/9e/c6efed9d54092820b52404b3d97e1392c38aa0": "1909c648ba3b58cae082f49129de80c7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/af/94e50f4d53f743af842eb16ae1d643c607134d": "a0b817ccae8047c6ffc0bd2b4ea83663",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c7/91d6bbd2289e48c5f6f61f4689c6d283d00193": "a11ae634693c1ec20e235f160a8d71ce",
".git/objects/d5/0c3c8479ff6958093f104234d6d4b62bb54eaf": "47ac80beeb567048ab00e98605bf76c4",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/e0/9a7e521bd72a117aaa9f43175615517d05624b": "5babb265ecd4fff623bf4fdd2c3f08a6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/376a2f2675e879d9acea346fbce8986a6a1934": "70e44230173bd0c102d82524d667ca55",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/9d584e9b96eae0d093cd7e7e6b9626a00ba087": "fee964577bf2cad0256145563713e7b9",
".git/objects/f7/d32259b2b3dd260d037348eb3b8f13df02f623": "4daa829b28158ec225df86e8645b0f9f",
".git/objects/ff/625a91e473b7782471df0ba6a22adf666945d6": "fc4e4b905a852e0c61a9059833f3a838",
".git/refs/heads/main": "6db17888f10fa76cd6bf60c3c3572e7b",
".git/refs/remotes/origin/main": "6db17888f10fa76cd6bf60c3c3572e7b",
"assets/ambulance.svg": "a22caa6d5e16e7fb2cdb466f3ce14ed0",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/bed-hospital.svg": "724e303c7485c0f7eaaf8dcd68a404e9",
"assets/blood.svg": "3af800aa7e444cc5eed54b9e7ae1f949",
"assets/drug.svg": "d6953b3231f35ee30ef80af376556306",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/jivaandanlogo.png": "6ac345e1cbc298593255f3b88e00fe0b",
"assets/logo_save%201.svg": "278960aafe1e6c2944e591590c08a31b",
"assets/NOTICES": "433081a2e33b7806a869e58f625c30ca",
"assets/oxygen-cylinder.svg": "1850aa2ae3d2a5e66074b08b8567c77b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/result.webp": "63cc54e2d946facaaa90b95a5a2c8f47",
"favicon.ico": "0cf8b27d1ad1091ccc8c3891b716f6cf",
"icons/Icon-192.png": "a393839a7895e96bec597dfaf77331ed",
"icons/Icon-512.png": "9d5bcc374fc44d330bff190f8252996a",
"index.html": "18dd5021b34bf4e4adb9333e27c256fc",
"/": "18dd5021b34bf4e4adb9333e27c256fc",
"main.dart.js": "20b8dd7dba9d25c16e21fd6ff19fed76",
"manifest.json": "7d56e762261bceade298c9f0af74f2b2",
"README.md": "a9eff565730663ebdcf3d03b6344fb03",
"version.json": "6e7a74cf82463ff0ece42198fb8d4c1e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
