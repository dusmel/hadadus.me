import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  // integrations: [purgecss({ safelist: ['data-theme', /^data-/], })]
});