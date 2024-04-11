/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderSlot, h as renderHead } from '../astro_wHd4-FNw.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
/* empty css                              */

const $$Astro$3 = createAstro("https://electriciansinphoenix.com/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const columns = [
    {
      title: "Product",
      rows: [
        { title: "Add Your Company", url: "/submit" },
        { title: "Advertise", url: "/advertise" }
      ]
    },
    //   {
    //     title: 'Support',
    //     rows: [
    //       { title: 'Documentation', url: '#' },
    //       { title: 'Guides', url: '#' },
    //     ],
    //   },
    {
      title: "Company",
      rows: [
        { title: "Contact", url: "/contact" },
        { title: "Blog", url: "/blog" }
      ]
    }
    //   {
    //     title: 'Legal',
    //     rows: [
    //       { title: 'Privacy', url: '#' },
    //       { title: 'Terms', url: '#' },
    //     ],
    //   },
  ];
  return renderTemplate`${maybeRenderHead()}<div class="max-w-7xl px-6 pb-8 mx-auto mt-20"> <footer class="py-20 border-t grid grid-cols-2 lg:grid-cols-4 gap-8"> ${columns.map((column) => renderTemplate`<div> <h3 class="pb-5 font-semibold border-b">${column.title}</h3> <ul class="mt-6 space-y-4"> ${column.rows.map((row) => renderTemplate`<li> <a${addAttribute(row.url, "href")} class="leading-6 dark:hover:text-white"> ${row.title} </a> </li>`)} </ul> </div>`)} </footer> </div>`;
}, "/Users/jonathan/Documents/code/electricians-in-phoenix/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://electriciansinphoenix.com/");
const $$TopBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TopBar;
  return renderTemplate`${maybeRenderHead()}<nav class="justify-between p-6 mb-4 font-semibold m-auto" x-data="{ open:false }"> <div class="flex"> <div class="flex-1"> <a href="/" class="text-xl">Electricians in Phoenix ⚡️</a> </div> <button @click="open = !open" class="bg-amber-600 rounded flex lg:hidden items-center align-middle group p-1 justify-center"> <svg x-show="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 bg-amber-600 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg x-show="open" class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg> </button> <div class="hidden lg:flex gap-x-12 text-md items-center"> <a href="/advertise" class="hover:underline">Advertise</a> <a href="/contact" class="hover:underline">Contact</a> </div> </div> <!-- Hide on small screens--> <div class="space-y-1 pr-2 pt-2 pb-3 items-center text-md" x-show="open" x-transition.duration.200ms> <a href="/advertise" class="block py-2">Advertise</a> <a href="/contact" class="block py-2">Contact</a> </div> </nav>`;
}, "/Users/jonathan/Documents/code/electricians-in-phoenix/src/components/TopBar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://electriciansinphoenix.com/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Electricians in Phoenix" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/high-voltage.svg" sizes="32x32"><script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"><\/script><meta name="generator"', "><title>", "</title>", '</head> <body class=""> <div class="max-w-5xl px-4 py-4 mx-auto text-white"> ', " ", " ", " </div> </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "TopBar", $$TopBar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/jonathan/Documents/code/electricians-in-phoenix/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://electriciansinphoenix.com/");
const $$Advertise = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Advertise;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Advertise Your Company", "data-astro-cid-gxgbmpg4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-gxgbmpg4> <div class="flex flex-col justify-center max-w-2xl items-center my-8 text-center mx-auto" data-astro-cid-gxgbmpg4> <h1 class="tracking-tight" data-astro-cid-gxgbmpg4>Boost your company to the top</h1> <p class="text-center mb-6 text-2xl" data-astro-cid-gxgbmpg4>
This feature is coming <span class="italic" data-astro-cid-gxgbmpg4>soon</span>.
</p> <p class="text-center mb-6 text-2xl" data-astro-cid-gxgbmpg4>
In the meantime please <a href="mailto:holidaysmith524@gmail.com" class="text-amber-600 italic" data-astro-cid-gxgbmpg4>email</a> me for inquiries.
</p> </div> </main> ` })} `;
}, "/Users/jonathan/Documents/code/electricians-in-phoenix/src/pages/advertise.astro", void 0);

const $$file = "/Users/jonathan/Documents/code/electricians-in-phoenix/src/pages/advertise.astro";
const $$url = "/advertise";

const advertise = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Advertise,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, advertise as a };
