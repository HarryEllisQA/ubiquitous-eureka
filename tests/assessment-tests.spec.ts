import { test, expect } from '../fixtures/_fixtures';
import { ProductInfo } from '../fixtures/inventory';

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
  await login.loginAsUser(navbar, 'HarryEllisTestUser', 'HarryEllisTestUser');
});

/**
 * ===[ End-to-end test of product purchase. ]===
 * I have chosen this test because it covers a large amount of system functionality and is
 * the primary journey for a user. It allows me to have general assurance of functionality
 * in a single test case.
 */ 
test('I can add an item to my cart and purchase it', async ({ page, navbar, signup, login, inventory, cart }) => {
  let username: string = 'User ' + signup.generateUniqueString();
  let password: string = signup.generateUniqueString();
  
  await signup.signUpAsUser(navbar, username, password);
  await login.loginAsUser(navbar, username, password);
  let cartItem: ProductInfo = await inventory.addProductToCart('Samsung galaxy s6');
  await navbar.cartButton.click();
  await cart.checkItemIsInCart(cartItem);
  await cart.checkout('Test User', 'Example Country', 'Example City', '0123 4567 8910 1112', '02', '27');
});

/**
 * ===[ Cart logic validation. ]===
 * I have chosen this test because it covers critical functionality. Ensuring that
 * users are charged the correct price is paramount for both customer satisfaction
 * and business profit/reputation.
 */ 
test('I am charged the correct amount of money', async ({ page }) => {
  // I ran out of time to write this before 29/01/2026 21:00
  // My way of solving this would have been to...
  // 1. Add all items (including name & price) from the inventory into an array
  // 2. Randomly select two from the array and add them to cart
  // 3. Tally the two prices of the items from the array
  // 4. Navigate to the cart and assert that the total is the same as the expected value
  // 5. Checkout and assert that the charged amount is the same as the expected value  
});