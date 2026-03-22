import { test, expect } from '@playwright/test';

test('Register and Login successfully', async ({ page }) => {
  // Tạo username unique
  const username = `user_${Date.now()}`;
  const password = '123456';

  // Open Register page 
  await page.goto('https://buggy.justtestit.org/register');

  // Verify UI 
  await expect(page.locator('h2')).toHaveText('Register with Buggy Cars Rating');

  await expect(page.locator('#username')).toBeVisible();
  await expect(page.locator('#firstName')).toBeVisible();
  await expect(page.locator('#lastName')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();
  await expect(page.locator('#confirmPassword')).toBeVisible();

  // Fill form 
  await page.locator('#username').fill(username);
  await page.locator('#firstName').fill('Test');
  await page.locator('#lastName').fill('User');
  await page.locator('#password').fill(password);
  await page.locator('#confirmPassword').fill(password);

  // Submit
  await page.locator('button[type="submit"]').click();

  // Verify register success 
  await expect(page.locator('.result.alert-success')).toBeVisible();

  // Go to Login 
  await page.goto('https://buggy.justtestit.org/');

  // Login
  await page.locator('input[name="login"]').fill(username);
  await page.locator('input[name="password"]').fill(password);
  await page.locator('button[type="submit"]').click();

  // Verify login success 
  await expect(page.locator('text=' + username)).toBeVisible();
});