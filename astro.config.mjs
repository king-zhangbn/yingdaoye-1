// @ts-check
import { defineConfig, sharpImageService } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro'



import netlify from "@astrojs/netlify";



// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: true,

  image: {
    service: sharpImageService(),
  },

  site: "https://en.icu",
  integrations: [icon(), sitemap(), react(), markdoc(), keystatic()],
  adapter: netlify(),
});