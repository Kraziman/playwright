import { test, expect } from '@playwright/test';

test('record demo test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Приемане на всички' }).click();
  await page.getByRole('button', { name: 'Чувствам се късметлия' }).click();
  await page.getByRole('link', { name: 'Culture' }).click();
});