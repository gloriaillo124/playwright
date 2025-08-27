// import { test, expect } from '@playwright/test';
// import LoginPage from "../page/Login.page";
// import CheckoutStepTwoPage from '../page/CheckoutStepTwo.page';

// test('@checkout' ,   async ({ page })=>{
//     //  
//   await page.goto('https://www.saucedemo.com/');
//   const loginPage = new LoginPage(page);
//   await loginPage.saisirUsername('standard_user');
//   await loginPage.saisirPassword('secret_sauce');
//   await loginPage.clickSurLogin();
//   await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

//   const checkoutStepTwoPage = new CheckoutStepTwoPage(page);

//   await checkoutStepTwoPage.clickSurCancelButton();
//   await checkoutStepTwoPage.clickSurFinishButton();
// });