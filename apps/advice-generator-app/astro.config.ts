import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import cssDebugger from "@webmasonry/astro-css-debugger";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  adapter: cloudflare(),
  devToolbar: {
    enabled: true,
    placement: "bottom-center",
  },
  fonts: [
    {
      cssVariable: "--font-outfit",
      fallbacks: ["sans-serif"],
      name: "Outfit Variable",
      optimizedFallbacks: true,
      options: {
        variants: [
          {
            display: "swap",
            featureSettings: '"liga" off, "clig" off',
            src: [
              "@fontsource-variable/outfit/files/outfit-latin-ext-wght-normal.woff2",
            ],
            style: "normal",
            unicodeRange: [
              "U+0100-02BA",
              "U+02BD-02C5",
              "U+02C7-02CC",
              "U+02CE-02D7",
              "U+02DD-02FF",
              "U+0304",
              "U+0308",
              "U+0329",
              "U+1D00-1DBF",
              "U+1E00-1E9F",
              "U+1EF2-1EFF",
              "U+2020",
              "U+20A0-20AB",
              "U+20AD-20C0",
              "U+2113",
              "U+2C60-2C7F",
              "U+A720-A7FF",
            ],
            weight: "100 900",
          },
          {
            display: "swap",
            featureSettings: '"liga" off, "clig" off',
            src: [
              "@fontsource-variable/outfit/files/outfit-latin-wght-normal.woff2",
            ],
            style: "normal",
            unicodeRange: [
              "U+0000-00FF",
              "U+0131",
              "U+0152-0153",
              "U+02BB-02BC",
              "U+02C6",
              "U+02DA",
              "U+02DC",
              "U+0304",
              "U+0308",
              "U+0329",
              "U+2000-206F",
              "U+20AC",
              "U+2122",
              "U+2191",
              "U+2193",
              "U+2212",
              "U+2215",
              "U+FEFF",
              "U+FFFD",
            ],
            weight: "100 900",
          },
        ],
      },
      provider: fontProviders.local(),
    },
  ],
  integrations: [
    cssDebugger(),
    icon({
      iconDir: "./src/assets/.astro-icons",
    }),
  ],
  site: "https://advice-generator-app.webmasonry.workers.dev/",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      tsconfigPaths: true,
    },
  },
});
