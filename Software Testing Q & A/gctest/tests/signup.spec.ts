import { test, expect } from '@playwright/test';

test('User can sign up successfully', async ({ page }) => {
  await page.goto('https://app.generouscircle.com/signup');

  await page.getByPlaceholder('First Name').fill('Kenneth');
  await page.getByPlaceholder('Last Name').fill('Kariuki');
  await page.getByPlaceholder('Email Address').fill('kenneth.testuser@example.com');
  await page.getByPlaceholder('Phone Number').fill('0712345678');
  await page.getByPlaceholder('ID Number').fill('12345678');
  await page.getByPlaceholder('Password').fill('TestPass123!');
  await page.getByPlaceholder('Confirm Password').fill('TestPass123!');

  await page.getByRole('button', { name: 'Sign Up' }).click();

  // Example success check - change to whatever success route or toast shows
  await expect(page).toHaveURL(/.*dashboard/);
});