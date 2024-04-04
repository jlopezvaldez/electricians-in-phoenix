/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderSlot, h as renderHead } from '../astro_za-7moE0.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
/* empty css                              */

const $$Astro$3 = createAstro();
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
}, "/Users/jonathan/Documents/code/growing-graham/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$TopBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TopBar;
  return renderTemplate`${maybeRenderHead()}<nav class="mb-4 text-2xl m-auto md:w-[900px]" x-data="{ open:false }"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white"> <button @click="open = ! open" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <div> <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0"> <li class="mx-auto"> <button class="py-2 px-3"> <a href="/" class="block py-2 px-6 rounded hover:bg-amber-600 md:hover:bg-transparent md:border-0 md:hover:text-amber-600 md:p-0">Electricians in Phoenix ⚡️</a></button> </li> </ul> </div> <div :class="{'hidden': !open, 'block': open}" class="hidden w-full md:block md:w-auto md:my-4" id="navbar-default"> <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"> <li class="mx-auto"> <button class="py-2 px-3 rounded-xl hover:bg-blue-600"> <a href="/submit" class="block px-6 rounded md:border-0">Submit</a> </button> </li> <li class="mx-auto"> <button class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-amber-600 rounded-xl py-2 mx-2 duration-300"> <a href="/advertise" class="block px-6 md:hover:bg-transparent md:border-0">Advertise</a> </button> </li> <li class="mx-auto"> <button class="py-2 rounded-xl hover:bg-blue-600"> <a href="/contact" class="block px-6 md:hover:bg-transparent md:border-0">Contact</a> </button> </li> </ul> </div> </div> </nav>`;
}, "/Users/jonathan/Documents/code/growing-graham/src/components/TopBar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Electricians in Phoenix" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"><\/script><meta name="generator"', "><title>", "</title>", '</head> <body class=""> <div class="max-w-5xl px-4 py-4 mx-auto text-white"> ', " ", " <!-- <footer\n      class='m-auto md:w-[900px] text-white justify-center pt-6 border-t-2 border-amber-600'\n    >\n      <div class='mx-auto w-full max-w-screen-xl px-4'>\n        <div class='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'>\n          <div>\n            <h2 class='mb-6 text-2xl font-semibold uppercase'>Company</h2>\n            <ul class='text-lg'>\n              <li class='mb-4'>\n                <a href='/advertise' class='hover:underline'>Advertise</a>\n              </li>\n\n              <li class='mb-4'>\n                <a href='/blog' class='hover:underline'>Blog</a>\n              </li>\n            </ul>\n          </div>\n          <div>\n            <h2 class='mb-6 text-2xl font-semibold uppercase'>Help center</h2>\n            <ul class='text-lg'>\n              <li class='mb-4'>\n                <a\n                  href='https://twitter.com/thefakejona'\n                  class='hover:underline'>Twitter</a\n                >\n              </li>\n              <li class='mb-4'>\n                <a href='/contact' class='hover:underline'>Contact Us</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </footer> --> ", " </div> </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "TopBar", $$TopBar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/jonathan/Documents/code/growing-graham/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Advertise = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Advertise;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Advertise Your Company", "data-astro-cid-gxgbmpg4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-gxgbmpg4> <div class="flex flex-col justify-center items-cente my-8" data-astro-cid-gxgbmpg4> <h1 data-astro-cid-gxgbmpg4>Boost your company to the top</h1> <p class="text-center mb-6 text-2xl" data-astro-cid-gxgbmpg4>
This feature is coming <span class="italic" data-astro-cid-gxgbmpg4>soon</span>.
</p> <p class="text-center mb-6 text-2xl" data-astro-cid-gxgbmpg4>
In the meantime please <a href="mailto:holidaysmith524@gmail.com" class="text-amber-600 italic" data-astro-cid-gxgbmpg4>email</a> me for inquiries.
</p> </div> </main> ` })} `;
}, "/Users/jonathan/Documents/code/growing-graham/src/pages/advertise.astro", void 0);

const $$file = "/Users/jonathan/Documents/code/growing-graham/src/pages/advertise.astro";
const $$url = "/advertise";

const advertise = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Advertise,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, advertise as a };
