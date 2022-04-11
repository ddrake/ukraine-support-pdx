import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig ({
 site: 'https://www.ukraine-support-pdx',
  build: {
  },
  integrations: [
    preact(),
    sitemap(),
  ],
});
