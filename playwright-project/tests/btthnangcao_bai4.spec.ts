import { test, expect } from '@playwright/test';

test('Test Login and Logout', async ({ page }) => {

  // Go to page
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verify login thành công 
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Mở menu sidebar
  await page.click('#react-burger-menu-btn');

  // Wait menu hiện ra
  await page.waitForSelector('#logout_sidebar_link');

  // Click logout
  await page.click('#logout_sidebar_link');

  // Verify quay về trang login
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});