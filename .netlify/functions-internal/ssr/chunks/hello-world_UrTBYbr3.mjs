import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_za-7moE0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>We did it!</p>\n<ul>\n<li>lets</li>\n<li>go</li>\n</ul>";

				const frontmatter = {"title":"Hello World!","date":"2024-01-20T00:00:00.000Z"};
				const file = "/Users/jonathan/Documents/code/growing-graham/src/content/blog/hello-world.md";
				const url = undefined;
				function rawContent() {
					return "\nWe did it!\n\n- lets\n- go\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
