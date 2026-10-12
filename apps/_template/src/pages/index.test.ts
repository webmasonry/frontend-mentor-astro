import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import IndexPage from "./index.astro";

describe("index.astro component tests", () => {
  it("renders the layout with correct content and design tokens", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(IndexPage);
    expect(result).toContain("<title>TEMPLATE</title>");
  });
});
