const CACHE="radhasujana-blog-1.2";
const CORE=[
  "/","/te/","/blog/after-the-wedding/","/te/blog/pelli-tarvata/",
  "/invitation/","/invitation/en/","/invitation/te/","/invitation/hi/","/invitation/ta/","/invitation/zh/","/invitation/ne/","/invitation/ur/",
  "/blog.css","/blog.js","/neo2.css","/neo2.js","/neo2-config.js",
  "/favicon.png","/manifest.webmanifest","/assets/engagement/08.webp","/assets/blog/after-the-wedding-banner.webp"
];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
async function networkFirst(request){try{const response=await fetch(request,{cache:"no-store"});if(response&&response.ok){const cache=await caches.open(CACHE);cache.put(request,response.clone())}return response}catch(error){return(await caches.match(request))||(request.mode==="navigate"?caches.match("/"):Response.error())}}
async function cacheFirst(request){const hit=await caches.match(request);if(hit)return hit;const response=await fetch(request);if(response&&response.ok){const cache=await caches.open(CACHE);cache.put(request,response.clone())}return response}
self.addEventListener("fetch",event=>{if(event.request.method!=="GET")return;const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;const type=event.request.destination;const isCode=type==="script"||type==="style"||url.pathname.endsWith(".html")||url.pathname.endsWith(".webmanifest");event.respondWith(event.request.mode==="navigate"||isCode?networkFirst(event.request):cacheFirst(event.request))});
