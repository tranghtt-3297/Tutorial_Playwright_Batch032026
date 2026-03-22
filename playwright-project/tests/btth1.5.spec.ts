import { test, expect } from '@playwright/test';

test('Manage Todo List', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.locator('.new-todo');

  // ===== 1. Add 3 tasks =====
  for (const task of ['Task A', 'Task B', 'Task C']) {
    await input.fill(task);
    await input.press('Enter');
  }

  const items = page.locator('.todo-list li');

  // Đảm bảo đã có 3 item
  await expect(items).toHaveCount(3);

  // ===== 2. Tick task thứ 2 =====
  await items.nth(1).locator('.toggle').check();

  // Verify đã check
  await expect(items.nth(1)).toHaveClass(/completed/);

  // ===== 3. Verify task đầu tiên =====
  await expect(items.first().locator('label')).toHaveText('Task A');

  // ===== 4. Xóa Task C =====
  const taskC = items.filter({ hasText: 'Task C' });

  await expect(taskC).toHaveCount(1); // tránh chọn nhầm

  await taskC.hover();
  await taskC.locator('.destroy').click();

  // ===== 5. Verify Task C đã bị xóa =====
  await expect(items).toHaveCount(2);
  await expect(page.locator('text=Task C')).toHaveCount(0);
});