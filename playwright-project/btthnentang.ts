import { test, expect } from '@playwright/test';

test('Search topic', async ({ page }) => {

  // 1. Truy cập website
  await page.goto('https://kenh14.vn/');

  // 2. Nhập nội dung tìm kiếm

  await page.click('text=Star');


  // 3. Kiểm tra URL có chữ star
  await expect(page).toHaveURL(/star/);

});     