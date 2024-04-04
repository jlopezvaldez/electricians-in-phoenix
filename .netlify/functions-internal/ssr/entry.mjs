import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_-Me6w_ho.mjs';

const _page0  = () => import('./chunks/generic_L_nJTSKY.mjs');
const _page1  = () => import('./chunks/advertise_B0XyAc25.mjs');
const _page2  = () => import('./chunks/blog_sVOOUpR4.mjs');
const _page3  = () => import('./chunks/_slug__Mj4W2aIW.mjs');
const _page4  = () => import('./chunks/index_XQK0F66b.mjs');
const _page5  = () => import('./chunks/contact_v-pf9YVH.mjs');
const _page6  = () => import('./chunks/submit_8iO2jG-F.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/advertise.astro", _page1],["src/pages/blog.astro", _page2],["src/pages/blog/[slug].astro", _page3],["src/pages/index.astro", _page4],["src/pages/contact.astro", _page5],["src/pages/submit.astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"a860e5f0-1855-422f-b414-fdfbac1b4703"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
