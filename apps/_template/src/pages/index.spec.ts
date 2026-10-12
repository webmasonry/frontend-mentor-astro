/** biome-ignore-all lint/nursery/useConsistentTestIt: ? */
import { expect, test } from "@playwright/test";

test.describe("index.astro integration tests", () => {
  const title = "TEMPLATE";

  test.beforeAll(async ({ page }) => {
    await page.goto("/");
  });

  test("Should render the homepage with correct metadata", async ({ page }) => {
    await expect(page).toHaveTitle(title);
  });
});
