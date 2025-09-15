import { test, expect } from "@playwright/test";

test('demo run in prod env', async ({page})=>
{
  await page.goto(`${process.env.URL}`);
})