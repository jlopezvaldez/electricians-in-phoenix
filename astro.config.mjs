import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import 'dotenv/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: 'server',
  adapter: netlify(),
  site: 'https://electriciansinphoenix.com/'
});