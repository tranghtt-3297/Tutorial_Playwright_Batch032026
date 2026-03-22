import { test, expect } from '@playwright/test';

test('Todo App - thêm, hoàn thành và xóa task', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.locator('.new-todo');
  const items = page.locator('.todo-list li');

  // Thêm task 
  await input.fill('Học Playwright');
  await input.press('Enter');

  // Verify: Task được thêm
  await expect(items).toHaveCount(1);
  await expect(items.first().locator('label')).toHaveText('Học Playwright');

  // Hoàn thành task 
  const task = items.first();
  await task.locator('.toggle').check();

  // Verify: đã completed
  await expect(task).toHaveClass(/completed/);

  //  Xóa task 
  await task.hover(); // cần hover để hiện nút X
  await task.locator('.destroy').click();

  // Verify: Task đã bị xóa
  await expect(items).toHaveCount(0);
});