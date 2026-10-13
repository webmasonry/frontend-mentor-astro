import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import cssDebugger from "@webmasonry/astro-css-debugger";

export default defineConfig({
  adapter: cloudflare(),
  devToolbar: {
    enabled: true,
    placement: "bottom-center",
  },
  fonts: [],
  integrations: [cssDebugger()],
  site: "https://qr-code-component.webmasonry.workers.dev/",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
});
