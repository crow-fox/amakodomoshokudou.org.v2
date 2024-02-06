import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), tailwind()],
  site: import.meta.env.PROD
    ? "https://amakodomoshokudou.org"
    : "http://localhost:4321",
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  build: {
    assets: "assets",
  },
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
