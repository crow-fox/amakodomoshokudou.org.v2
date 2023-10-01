import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

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
    inlineStylesheets: "never",
  },
});
