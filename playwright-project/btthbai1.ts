import { test, expect } from '@playwright/test';

test('Register user', async ({ page }) => {

  await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

  const username = 'tranghtt110';
  const email = 'tranghttl10.com'; 

  // nhập username
  await page.fill("//input[@id='username']", username);

  // nhập email
  await page.fill("//input[@id='email']", email);

  // chọn gender
  await page.check("//input[@value='female']");

  // checko checked
  await expect(page.locator("//input[@value='female']")).toBeChecked();

  // chọn hobbies
  await page.check("//input[@value='reading']");
  await page.check("//input[@value='traveling']");

  // checkkbox checked
  await expect(page.locator("//input[@value='reading']")).toBeChecked();
  await expect(page.locator("//input[@value='traveling']")).toBeChecked();

  // chọn interest
  await page.selectOption("//select[@id='interests']", "Technology");

  // chọn country
  await page.selectOption("//select[@id='country']", "United States");

  // nhập dob
  await page.fill("//input[@id='dob']", "01/01/2000");

  // click dang ki
  await page.click("//button[text()='Register']");

  // check hiển thị dưới table
  await expect(page.locator("//table//td[text()='"+username+"']")).toBeVisible();

});