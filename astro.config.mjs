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
  // # use the following when deploying a static website, it doesnt work for SSR for and serverless. Will fix it later
  // integrations: [purgecss({ safelist: ['data-theme', /^data-/], })] 
});