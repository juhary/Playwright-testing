import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://gateway.77soft.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('22-6375');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Juha!ber7890');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link').first().click();
  await page.getByRole('img', { name: 'logo' }).click();
});