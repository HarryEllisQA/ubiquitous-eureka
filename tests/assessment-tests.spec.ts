import { test, expect } from '../fixtures/_fixtures';

// Navigate to the DemoBlaze site before each test
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
});

/**
 * ===[ Login with an existing user account. ]===
 * I have chosen this test because this functionality is critical for returning customers,
 * and it's short enough to be a good smoke test when running regression.
 */ 
test('I can login with valid credentials', async ({ navbar, login }) => {
  await navbar.loginButton.click();
  await login.usernameField.fill('HarryEllisTestUser');
  await login.passwordField.fill('HarryEllisTestUser');
  await login.LogInButton.click();
  await expect(navbar.nameOfUser).toHaveText('Welcome HarryEllisTestUser');
});

test('I can add an item to my cart and purchase it', async ({ page }) => {
  
});

test('I am charged the correct amount of money', async ({ page }) => {
  
});