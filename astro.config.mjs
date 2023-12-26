import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://frabjous-lolly-6837d2.netlify.app/",
  integrations: [react()]
});