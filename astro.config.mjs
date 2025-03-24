// @ts-check
import { defineConfig, sharpImageService } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
  output: 'static',
  image: {
    service: sharpImageService(),
  },
  site: "https://cojocarudavid.me",
  integrations: [icon(), sitemap(), react(), markdoc(), keystatic()],
});