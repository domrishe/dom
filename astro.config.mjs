import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://astronaut.github.io',
  base: '/dom',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
});