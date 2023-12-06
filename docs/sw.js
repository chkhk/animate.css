if (!self.define) {
  let e,
    i = {};
  const s = (s, o) => (
    (s = new URL(s + '.js', o).href),
    i[s] ||
      new Promise((i) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (o, r) => {
    const n = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (i[n]) return;
    let d = {};
    const c = (e) => s(e, n),
      l = {module: {uri: n}, exports: d, require: c};
    i[n] = Promise.all(o.map((e) => l[e] || c(e))).then((e) => (r(...e), d));
  };
}
define(['./workbox-03270c55'], function (e) {
  'use strict';
  self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {url: 'animate.min.css', revision: '3528cb06a42459388f8adc13d7d56a58'},
        {url: 'img/animatecss-opengraph.jpg', revision: '56007ed2963f2a06e64539590f15a890'},
        {url: 'img/favicon.ico', revision: '4be7a36378b12047b117d90e03e46f25'},
        {url: 'index.html', revision: 'f78a957c94c2029187fb0d9d96714353'},
        {url: 'main.mjs', revision: '8638bef55e060be232d8b3e776a153e6'},
        {url: 'modules/buildDocsIndex.mjs', revision: 'aed20ca163d0bb1881b76ba96262a07b'},
        {url: 'modules/darkMode.mjs', revision: 'c32c936df18341226dfceb6cbc87a796'},
        {url: 'modules/playground.mjs', revision: '73d56cbae5469712f02c325448699665'},
        {url: 'modules/slowDownAnimations.mjs', revision: '615c13315398f2d9dc7e155f69850208'},
        {url: 'modules/startAnimations.mjs', revision: '0bcdd658fc7cbc881ee9023e2d6cee8a'},
        {url: 'modules/toggle.mjs', revision: '2e304832df487f94fb99fb22b70d5fbc'},
        {url: 'style.css', revision: '568dcf1f2e1560d1123fb6e5f3e81c50'},
      ],
      {ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]},
    );
});
//# sourceMappingURL=sw.js.map
