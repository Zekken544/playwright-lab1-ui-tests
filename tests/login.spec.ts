// tests/login.spec.ts
// Lab 1: Playwright UI automation tests for https://www.saucedemo.com

import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com';

// Test 1: Successful login
test('Амжилттай нэвтэрсэн', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Confirm we landed on the products page
  await expect(page.getByText('Products')).toBeVisible();
  await expect(page).toHaveURL(/inventory.html/);
});

// Test 2: Failed login (wrong password)
test('Амжилтгүй нэвтэрсэн', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong_password');
  await page.getByRole('button', { name: 'Login' }).click();

  // Confirm error message is shown
  await expect(page.getByText('Username and password do not match')).toBeVisible();
});

// Test 3: Post-login action - add an item to the cart
test('add item to cart after login', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Add "Sauce Labs Backpack" to the cart
  await page.getByRole('button', { name: 'Add to cart' }).first().click();

  // Cart badge should show 1 item
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Logout to end the test cleanly (test isolation)
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.getByPlaceholder('Username')).toBeVisible();
});

