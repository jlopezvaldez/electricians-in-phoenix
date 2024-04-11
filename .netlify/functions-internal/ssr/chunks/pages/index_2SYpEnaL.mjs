/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, F as Fragment } from '../astro_wHd4-FNw.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './advertise_kXfPL-oF.mjs';
import 'clsx';
import PocketBase from 'pocketbase';

const $$Astro$2 = createAstro("https://electriciansinphoenix.com/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<div> <div class="px-6 lg:px-8 max-w-2xl mx-auto text-center"> <!-- <p class='text-3xl my-8 sm:text-2xl'>Electricians in Phoenix ⚡️</p> --> <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
The easiest way to find electricians in Phoenix
</h1> <p class="mt-10 mb-10 text-xl text-center md:text-2xl">
We make it easy to find the best. Search by zip, city, ratings, and more.
      Updated daily.
</p> <div> <button class="mx-auto mb-5 rounded-full bg-amber-600 py-2 px-4 font-bold"> <a href="/submit"> Add your company </a> </button> </div> </div> </div>`;
}, "/Users/jonathan/Documents/code/electricians-in-phoenix/src/components/Hero.astro", void 0);

const pb = new PocketBase(process.env.POCKETBASE_URL || process.env.POCKETBASE_URL);
pb.autoCancellation(false);
async function getElectricians({ q = "", limit = 50, page = 1 }) {
  const options = {
    filter: "live = true",
    sort: "+companyName"
  };
  if (q) {
    options.filter = `live = true && companyName ~ "${q}" || rating ~ "${q}" || city ~ "${q}" || zip ~ "${q}"`;
  }
  let electricians;
  try {
    let result = await pb.collection("electrical_companies").getList(page, limit, options);
    electricians = result.items;
  } catch (e) {
    console.log(e.response);
  }
  return electricians;
}
async function createElectricians({ companyName, href, address, city, zip, userEmail }) {
  let newCompany;
  try {
    newCompany = await pb.collection("electrical_companies").create({
      companyName,
      href,
      address,
      city,
      zip,
      userEmail
    });
  } catch (e) {
    console.log(e.response);
  }
  return newCompany;
}

const $$Astro$1 = createAstro("https://electriciansinphoenix.com/");
const $$CompanyCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CompanyCard;
  const { company } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="rounded-lg bg-blue-600"> <a${addAttribute(company.href, "href")} class="block"> <div class="flex justify-between items-start p-6 pb-3"> <h3 class="text-2xl font-bold flex-grow">${company.companyName}</h3> <div class="flex-shrink-0"> <p class="text-lg whitespace-nowrap">${company.rating} ⭐️'s</p> </div> </div> <div class="px-6 pb-3"> <p class="pb-3"> ${company.phone} </p> <!-- <p>
          {company.address}, {company.city}, {company.zip}
        </p> --> <p class="text-base line-clamp-3">${company.body}</p> </div> <div class="px-6 pb-3"> <span class="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Learn More</span> </div> </a> </li>`;
}, "/Users/jonathan/Documents/code/electricians-in-phoenix/src/components/CompanyCard.astro", void 0);

const $$Astro = createAstro("https://electriciansinphoenix.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const q = Astro2.url.searchParams.get("q") ?? "";
  const pageStr = Astro2.url.searchParams.get("page");
  let page = pageStr ? parseInt(pageStr, 10) : 1;
  if (isNaN(page)) {
    page = 1;
  }
  const is_search = Astro2.request.headers.get("HX-Trigger") === "search";
  const electricians1 = await getElectricians({ q, page });
  return renderTemplate`${is_search && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<ul class="grid gap-6 sm:grid-cols-2">${electricians1?.map((n) => renderTemplate`${renderComponent($$result2, "CompanyCard", $$CompanyCard, { "company": n })}`)}</ul>${electricians1?.length == 50 && renderTemplate`<div${addAttribute(`/?page=${page + 1}`, "hx-get")} hx-trigger="revealed" hx-target="#electrician-results" hx-select="#electrician-results" hx-swap="beforeend" hx-swap-oob="true"></div>`}` })}`}${!is_search && renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Electricians in Phoenix" }, { "default": ($$result2) => renderTemplate`<main>${renderComponent($$result2, "Hero", $$Hero, {})}<input class="mt-4 w-full bg-blue-600 border-blue-300 outline-1 rounded-md p-2.5 placeholder-slate-300" name="q" id="search"${addAttribute(q, "value")} hx-get="/" hx-trigger="keyup delay:200ms, search" hx-target="#electrician-results" type="search" placeholder="Search by zip, city, rating..."><div id="electrician-results" class="py-10 mx-auto text-white max-w-7xl space-y-6"><ul class="grid gap-6 sm:grid-cols-2">${electricians1?.map((n) => (
    // <a
    //   href={n.href}
    //   class='block max-w p-6 my-8 border border-blue-300 rounded-lg shadow hover:bg-blue-600'
    // >
    //   <h2 class='text-xl'>
    //     {n.companyName}
    //     <span>&rarr;</span>
    //   </h2>
    //   <p>{n.body}</p>
    //   <p>
    //     Average Rating: {n.rating}
    //     <span> &#x2B50;s</span>
    //   </p>
    //   <p>{electricians1.length}</p>
    // </a>
    renderTemplate`${renderComponent($$result2, "CompanyCard", $$CompanyCard, { "company": n })}`
  ))}</ul>${electricians1?.length == 50 && renderTemplate`<div${addAttribute(`/?page=${page + 1}`, "hx-get")} hx-trigger="revealed" hx-target="#electrician-results" hx-select="#electrician-results" hx-swap="beforeend" hx-swap-oob="true"></div>`}</div></main>` })}`}`;
}, "/Users/jonathan/Documents/code/electricians-in-phoenix/src/pages/index.astro", void 0);

const $$file = "/Users/jonathan/Documents/code/electricians-in-phoenix/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { createElectricians as c, index as i };
