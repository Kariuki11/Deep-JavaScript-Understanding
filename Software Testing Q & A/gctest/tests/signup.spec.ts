import { test, expect } from '@playwright/test';

test('User can sign up successfully', async ({ page }) => {
  await page.goto('https://app.generouscircle.com/signup');

  await page.locator('#firstname').fill('Kenneth');
  await page.locator('#lastname').fill('Kariuki');
  await page.locator('#email').fill('kenneth.testuser@example.com');
  await page.locator('#phonenumber').fill('0712345678');
  await page.locator('#idnumber').fill('12345678');
  await page.locator('#password').fill('Test@1234');
  await page.locator('#confirmpassword').fill('Test@1234');

  await page.getByRole('button', { name: 'Create account' }).click();

  // Optional: Assert successful navigation or message
  await expect(page).toHaveURL(/.*dashboard|success|verify/i); // Adjust based on expected result
});
