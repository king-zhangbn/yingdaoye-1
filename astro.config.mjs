import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
// import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    site: "https://en.icu",
    adapter: vercel(),
    redirects: {
        "/admin": "/keystatic",
    },
    integrations: [
        react(),
        keystatic(),
        tailwind(),
        sitemap(),
        compress({
            HTML: true,
            JavaScript: true,
            CSS: true,
            Image: false, // astro:assets handles this. Enabling this can dramatically increase build times
            SVG: false, // astro-icon handles this
        }),
    ],
});