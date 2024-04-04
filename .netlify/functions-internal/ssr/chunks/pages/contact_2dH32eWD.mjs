/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_za-7moE0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './advertise_sfSIqibe.mjs';
/* empty css                            */

const takumi = new Proxy({"src":"/_astro/takumi.uTJUoO45.jpg","width":296,"height":296,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jonathan/Documents/code/growing-graham/src/images/takumi.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-uw5kdbxl> <div class="flex flex-col items-center my-8" data-astro-cid-uw5kdbxl> <img${addAttribute(takumi.src, "src")} class="rounded-full w-28 h-28 justify-center mb-8" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>Hi I'm Jonathan</h1> <div id="gradient" data-astro-cid-uw5kdbxl> <p class="text-center mb-6 text-2xl" data-astro-cid-uw5kdbxl>
I created this website with a simple goal in mind - help big and small
          electricians be found by the people searching for them.
</p> <p class="text-center mb-6 text-2xl" data-astro-cid-uw5kdbxl>
You can find me on X (you can dm me) where I shared a bit on how this
          website came to be and more.
</p> <p class="text-center text-2xl" data-astro-cid-uw5kdbxl>
If you're a fellow builder I'd love to connect.
</p> </div> <button class="md:w-1/2 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-amber-600 rounded-xl font-bold py-2 duration-300 mb-6" data-astro-cid-uw5kdbxl><a href="https://twitter.com/thefakejona" data-astro-cid-uw5kdbxl>Find me on X</a></button> <button class="md:w-1/2 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-amber-600 rounded-xl font-bold py-2 duration-300 mb-6" data-astro-cid-uw5kdbxl><a href="https://paypal.me/ghostofakina?country.x=US&locale.x=en_US" data-astro-cid-uw5kdbxl>Buy me a coffee</a></button> </div> </main> ` })} `;
}, "/Users/jonathan/Documents/code/growing-graham/src/pages/contact.astro", void 0);

const $$file = "/Users/jonathan/Documents/code/growing-graham/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
