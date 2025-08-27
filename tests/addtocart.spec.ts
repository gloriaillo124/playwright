// import { test, expect } from '@playwright/test';
// import LoginPage from '../page/Login.page.ts';
// import AddToCartPage from '../page/AddToCart.page.ts';


// test('@addtocart', async ({ page }) => {
 
//   await page.goto('https://www.saucedemo.com/');
//   const loginPage = new LoginPage(page);
//   await loginPage.saisirUsername('standard_user');
//   await loginPage.saisirPassword('secret_sauce');
//   await loginPage.clickSurLogin();
//   await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

//   const addcartPage = new AddToCartPage(page);
//   await addcartPage.addToCart();
//   await expect(addcartPage.elements.removeButton()).toBeVisible();
//   await addcartPage.removeFromCart();
//   await expect(addcartPage.elements.addButton()).toBeVisible();
//   await addcartPage.addToCart();
// });
