import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD
    ? "https://amakodomoshokudou.org"
    : "http://localhost:4321",
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  build: {
    assets: "assets",
    inlineStylesheets: `never`,
  },
});
