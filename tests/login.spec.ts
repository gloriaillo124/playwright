import { test, expect } from '@playwright/test';
import LoginPage from '../page/Login.page.ts';

test.describe('@login',()=>{

test('username correct and password correct',{tag: '@tc-001'}, async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage:LoginPage= new LoginPage(page);
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clickSurLogin();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 
  
});

test('username incorrect and password correct',{tag: '@tc-002'}, async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage:LoginPage= new LoginPage(page);
  await loginPage.saisirUsername('incorrect_username');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clickSurLogin();
  await expect(loginPage.getErrorMessage()).toBeVisible();
});
});


