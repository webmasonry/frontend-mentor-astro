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
      iconDir: "./src/assets/.astro-icons",
    }),
  ],
  site: "https://arch-studio-website.webmasonry.workers.dev/",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      tsconfigPaths: true,
    },
  },
});
