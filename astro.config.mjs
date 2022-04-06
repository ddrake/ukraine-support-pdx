import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
export default {
  buildOptions: {
  },
  integrations: [
    preact(),
    sitemap(),
  ],
};
