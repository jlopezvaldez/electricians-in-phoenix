/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_wHd4-FNw.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from './advertise_kXfPL-oF.mjs';
import { c as createElectricians } from './index_2SYpEnaL.mjs';
/* empty css                           */

const $$Astro = createAstro("https://electriciansinphoenix.com/");
const $$Submit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Submit;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const companyName = formData.get("companyName")?.toString() || "";
    const href = formData.get("website")?.toString() || "";
    const address = formData.get("address")?.toString() || "";
    const city = formData.get("city")?.toString() || "";
    const zip = formData.get("zip")?.toString() || "";
    formData.get("userEmail")?.toString || "";
    await createElectricians({
      companyName,
      href,
      address,
      city,
      zip
    });
    const htmlResponse = `<div>
    <h1>Thank you for your submission!</h1>
    </div>
    <style>
        h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    margin-bottom: 0.5em;
  }
        </style>`;
    return new Response(htmlResponse, {
      headers: {
        "Content-Type": "text/html"
      }
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Submit Your Company to Our Site", "data-astro-cid-cfftgubm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-cfftgubm> <h1 data-astro-cid-cfftgubm>Add your company to our list</h1> <p class="text-center text-2xl mb-12" data-astro-cid-cfftgubm>
👇 Get quick exposure to <span class="font-bold" data-astro-cid-cfftgubm>thousands</span> of residential
      and commercial customers who find their partner for their next project using
      our directory👇
</p> <div class="my-8" id="form-submission" data-astro-cid-cfftgubm> <form class="max-w-full mx-auto" hx-post="/submit" hx-target="#form-submission" hx-swap="outerHTTML swap:1s" hx-encoding="appplication/x-www-form-urlenconded" data-astro-cid-cfftgubm> <div class="mb-5" data-astro-cid-cfftgubm> <label for="userEmail" class="block mb-2 text-md font-medium text-white" data-astro-cid-cfftgubm><span class="text-amber-600" data-astro-cid-cfftgubm>* </span>Your Email</label> <input placeholder="jane@doe.com" type="text" id="userEmail" name="userEmail" required class="w-full bg-blue-600 border-blue-300 outline-1 rounded-md p-2.5 placeholder-slate-300" data-astro-cid-cfftgubm> </div> <div class="mb-5" data-astro-cid-cfftgubm> <label for="companyName" class="block mb-2 text-md font-medium text-white" data-astro-cid-cfftgubm><span class="text-amber-600" data-astro-cid-cfftgubm>* </span>Company Name</label> <input placeholder="Your company name..." type="text" id="companyName" required name="companyName" class="w-full bg-blue-600 border-blue-300 outline-1 rounded-md p-2.5 placeholder-slate-300" data-astro-cid-cfftgubm> </div> <div class="mb-5" data-astro-cid-cfftgubm> <label for="website" class="block mb-2 text-md font-medium text-white" data-astro-cid-cfftgubm>Website URL</label> <input placeholder="Your website..." type="text" id="website" name="website" class="w-full bg-blue-600 border-blue-300 outline-1 rounded-md p-2.5 placeholder-slate-300" data-astro-cid-cfftgubm> </div> <div class="mb-5" data-astro-cid-cfftgubm> <label for="address" class="block mb-2 text-md font-medium text-white" data-astro-cid-cfftgubm><span class="text-amber-600" data-astro-cid-cfftgubm>* </span>Address</label> <input placeholder="Street Address..." type="text" name="address" id="address" required class="w-full bg-blue-600 border-blue-300 outline-1 rounded-md p-2.5 placeholder-slate-300" data-astro-cid-cfftgubm> </div> <div class="md:mb-5 md:flex" data-astro-cid-cfftgubm> <div class="mb-5 md:w-1/2 md:mr-2" data-astro-cid-cfftgubm> <label for="city" class="block mb-2 text-md font-medium text-white" data-astro-cid-cfftgubm><span class="text-amber-600" data-astro-cid-cfftgubm>* </span>City</label> <input placeholder="City..." type="text" name="city" id="city" required class="w-full bg-blue-600 border-blue-300 outline-1 rounded-md p-2.5 placeholder-slate-300" data-astro-cid-cfftgubm> </div> <div class="mb-5 md:w-1/2 md:ml-2" data-astro-cid-cfftgubm> <label for="zip" class="block mb-2 text-md font-medium text-white" data-astro-cid-cfftgubm><span class="text-amber-600" data-astro-cid-cfftgubm>* </span>ZIP Code</label> <input placeholder="Zip Code..." type="text" name="zip" id="zip" required class="w-full bg-blue-600 border-blue-300 outline-1 rounded-md p-2.5 placeholder-slate-300" data-astro-cid-cfftgubm> </div> </div> <div class="flex flex-col items-center justify-center" data-astro-cid-cfftgubm> <button type="submit" class="md:w-1/2 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-amber-600 rounded-xl font-bold py-2 duration-300" data-astro-cid-cfftgubm>Submit</button> </div> </form> </div> </main> ` })} `;
}, "/Users/jonathan/Documents/code/electricians-in-phoenix/src/pages/submit.astro", void 0);

const $$file = "/Users/jonathan/Documents/code/electricians-in-phoenix/src/pages/submit.astro";
const $$url = "/submit";

export { $$Submit as default, $$file as file, $$url as url };
