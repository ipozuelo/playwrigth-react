import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('Pikachu...').click();
  await page.getByPlaceholder('Pikachu...').fill('snorlax');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByRole('img', { name: 'pokemon' }).click();
});