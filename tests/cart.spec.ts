// import test, { expect } from '@playwright/test';
// import LoginPage from '../page/Login.page';
// import CartPage from '../page/Cart.page';

// test('@cart', async ({page})=>{

//   await page.goto('https://www.saucedemo.com/');
//   const loginPage = new LoginPage(page);
//   await loginPage.saisirUsername('standard_user');
//   await loginPage.saisirPassword('secret_sauce');
//   await loginPage.clickSurLogin();
//   await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

//   const cartPage = new CartPage(page);

// //   await cartPage.clickSurCart();
// //   await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

// })