import { test, expect } from '@playwright/test';

test('Check cart status', async ({ page }) => {
  // Go to login page
  await page.goto('https://www.saucedemo.com/');

  // LOgin thành công
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add sản phẩm thứ nhất vào giỏ hàng
  await page.click('#add-to-cart-sauce-labs-backpack');

  // Verify số lượng giỏ hàng = 1
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');

  // Add sản phẩm thứ hai
  await page.click('#add-to-cart-sauce-labs-bike-light');

  // Verify số lượng giỏ hàng = 2
  await expect(cartBadge).toHaveText('2');
});