import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: import.meta.env.PROD
    ? "https://amakodomoshokudou.org"
    : "http://localhost:4321",
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  build: {
    assets: "assets",
  },
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
