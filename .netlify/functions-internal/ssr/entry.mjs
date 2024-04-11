import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CSJZVfGz.mjs';

const _page0  = () => import('./chunks/generic_uGx8HEmT.mjs');
const _page1  = () => import('./chunks/advertise_jm-MZaPZ.mjs');
const _page2  = () => import('./chunks/blog_9s_wjHGN.mjs');
const _page3  = () => import('./chunks/_slug__bBVcitP-.mjs');
const _page4  = () => import('./chunks/index_yJABwssp.mjs');
const _page5  = () => import('./chunks/contact_4k0z3jbd.mjs');
const _page6  = () => import('./chunks/submit_NMq1EqyV.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/advertise.astro", _page1],["src/pages/blog.astro", _page2],["src/pages/blog/[slug].astro", _page3],["src/pages/index.astro", _page4],["src/pages/contact.astro", _page5],["src/pages/submit.astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"8a679253-50fa-4196-bb23-8d9fdccfdfff"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
