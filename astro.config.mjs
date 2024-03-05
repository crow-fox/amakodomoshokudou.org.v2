import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
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
  trailingSlash: "always",
  build: {
    assets: "assets",
  },
});
