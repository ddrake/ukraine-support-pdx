import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
export default {
  build: {
  },
  integrations: [
    preact(),
    sitemap(),
  ],
};
