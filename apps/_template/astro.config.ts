import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import cssDebugger from "astro-css-debugger";

const domain = "https://www.template.com";
export default defineConfig({
  adapter: cloudflare(),
  devToolbar: {
    enabled: true,
    placement: "bottom-center",
  },
  fonts: [],
  integrations: [cssDebugger()],
  site: domain,
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
});
