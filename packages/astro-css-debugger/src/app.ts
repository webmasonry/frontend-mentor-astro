import { defineToolbarApp } from "astro/toolbar";

const KEY = "astro-css-debug";
export default defineToolbarApp({
  init(_, app) {
    const styleEl = document.createElement("style");
    styleEl.id = "astro-css-debug";
    styleEl.textContent = `
      * {
        outline: 1px solid red !important;
        outline-offset: -1px !important;
      }
    `;

    const apply = (enabled: boolean) => {
      if (enabled) {
        document.head.appendChild(styleEl);
      } else {
        styleEl.remove();
      }
    };

    if (localStorage.getItem(KEY) === "true") {
      apply(true);
      app.toggleState({ state: true });
    }

    app.onToggled(({ state }) => {
      localStorage.setItem(KEY, String(state));
      apply(state);
    });
  },
});
