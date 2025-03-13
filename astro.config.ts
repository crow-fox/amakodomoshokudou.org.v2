import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import astroSsgMsw from "./astro-ssg-msw-integration";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), astroSsgMsw()],
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
  outDir: "_dist",
  experimental: {
    preserveScriptOrder: true,
  },
});
