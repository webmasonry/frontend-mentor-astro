import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import cssDebugger from "@webmasonry/astro-css-debugger";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  adapter: cloudflare(),
  devToolbar: {
    enabled: true,
    placement: "bottom-center",
  },
  fonts: [],
  integrations: [
    cssDebugger(),
    icon({
      iconDir: "./src/assets/icons",
    }),
  ],
  site: "https://designo-agency-website.webmasonry.workers.dev/",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      tsconfigPaths: true,
    },
  },
});
