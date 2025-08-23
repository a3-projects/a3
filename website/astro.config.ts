import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://a3-team.de",
  base: "",

  integrations: [sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
