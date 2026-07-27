import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://saucedemo.com');
// await page.locator('//input[@id="user-name"]').fill("standard_user");
// await page.locator('//input[@id="password"]').fill("secret_sauce");
// await page.locator("input[value=Login]").click();
// await page.locator("text=Sauce Labs Backpack").click();

await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();
await page.locator('[data-test="item-4-img-link"]').click();
await page.locator('[data-test="add-to-cart"]').click();
await page.locator('[data-test="shopping-cart-link"]').click();
await page.locator('[data-test="checkout"]').click();
await page.locator('body').press('ArrowDown');
await page.locator('body').press('ArrowDown');
await page.locator('[data-test="continue"]').click();
await page.getByText('CancelContinue').click();
await page.locator('[data-test="error-button"]').click();
await page.locator('.checkout_info').click();
await page.locator('[data-test="firstName"]').fill('John');
await page.locator('[data-test="lastName"]').fill('Doe');
await page.locator('[data-test="postalCode"]').fill('1504');
await page.locator('[data-test="continue"]').click();
await page.locator('[data-test="finish"]').click();
});

