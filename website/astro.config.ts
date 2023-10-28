import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://magical-snickerdoodle-3d7fa3.netlify.app/",
  base: "",
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap(), react()],
  adapter: netlify()
});