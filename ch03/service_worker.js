const sCacheName = 'hello-pwa';

// 오프라인에서도 동작하도록 캐시에 파일을
const aFilesToCache = [
    './', './index.html', './manifest.json', './images/hello-pwa.png'
];

self.addEventListener('install', pEvent => {
    console.log('install service worker');
    pEvent.waitUntil(
        caches.open(sCacheName)
        .then(pCache => {
            console.log('파일을 캐시에 저장함');
            return pCache.addAll(aFilesToCache);
        })
    );
});

self.addEventListener('activate', pEvent => {
    console.log('service worker 동작 시작');
});

self.addEventListener('fetch', pEvent => {
    pEvent.respondWith(
        caches.match(pEvent.request)
        .then(response => {
            if (!response) {
                console.log('네트워크에서 데이터 요청', pEvent.request);
                return fetch(pEvent.request);
            }
            console.log("캐시에서 데이터 요청", pEvent.request);
            return response;
        }).catch(err => console.log(err))
    )
})
