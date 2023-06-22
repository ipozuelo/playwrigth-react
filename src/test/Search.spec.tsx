import { test, expect, devices } from "@playwright/experimental-ct-react";
import Search from "../pages/Search";

test("search", async ({ mount }) => {
  const component = await mount(<Search />);
  await component.locator("input").fill("pikachu");
  await component.locator("button").click();
});

test("search-pokemon", async ({ mount }) => {
  const component = await mount(<Search />);
  await component.locator("input").fill("pikachu");
  await component.locator("button").click();
  await component.locator("img");
});

test("notPokemonTxt", async ({ mount }) => {
  const component = await mount(<Search />);
  await component.locator("input").fill("pikachuu");
  await component.locator("button").click();
  const txt = await component.locator("p");
  await expect(txt).toBeEnabled();
});

test("img", async ({ mount }) => {
  const component = await mount(<Search />);
  await component.locator("input").fill("pikachu");
  await component.locator("button").click();
  const img = await component.locator("#img");
  await expect(img).toBeEnabled();
});

test.describe("variety", () => {
  test("search-pokemon", async ({ mount }) => {
    const component = await mount(<Search />);
    await component.locator("input").fill("pikachu");
    await component.locator("button").click();
    await component.locator("img");
  });

  test("responsive-movil", async ({ mount, page }) => {
    const component = await mount(<Search />);
    await component.locator("input").fill("snorlax");
    await page.getByRole("button", { name: "Buscar" }).click();

    const img = await component.locator("#img");
    await expect(img).toBeEnabled();

    page.setViewportSize({ width: 600, height: 600 });
    page.setViewportSize(devices["iPhone X"].viewport);
    await page.screenshot({ path: "screenshots-test/screenshot-movil.png" });
  });

  test("responsive-web", async ({ mount, page }) => {
    const component = await mount(<Search />);
    await component.locator("input").fill("snorlax");
    await page.getByRole("button", { name: "Buscar" }).click();

    const img = await component.locator("#img");
    await expect(img).toBeEnabled();

    page.setViewportSize({ width: 1600, height: 1200 });
    await page.screenshot({ path: "screenshots-test/screenshot-web.png" });
  });
});
