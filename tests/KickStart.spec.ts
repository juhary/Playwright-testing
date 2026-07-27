import { test } from '@playwright/test';

test("my first test", async({page})=> {
  await page.goto("https://gateway.77soft.com/login");
  await page.getByRole('button', { name: 'Login' })
});

test("my second test",()=> {
  console.log("my second test");
});