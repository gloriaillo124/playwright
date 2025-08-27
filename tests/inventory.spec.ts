// import { test, expect } from '@playwright/test';
// import InventoryPage from '../page/Inventory.page';
// import LoginPage from '../page/Login.page';
// import CartPage from '../page/Cart.page'; 

// test('Ajout de produits aléatoires au panier et vérification',{tag: ['@tc-012']}, async ({ page }) => {
  
//   await page.goto('https://www.saucedemo.com/');
//   const loginPage = new LoginPage(page);
//   await loginPage.saisirUsername('standard_user');
//   await loginPage.saisirPassword('secret_sauce');
//   await loginPage.clickSurLogin();

 
//   const inventoryPage = new InventoryPage(page);
//   const nombreProduitsAAjouter = 3;
//   await inventoryPage.ajouterUnProduitAleatoire(nombreProduitsAAjouter);

  
//   const nombreDansPanier = await inventoryPage.getNombreArticlesDansPanier();
//   expect(nombreDansPanier).toBe(nombreProduitsAAjouter);

 
//   await inventoryPage.ouvrirPanier();

  
//   const cartPage = new CartPage(page);
//   const articlesDansPanier = await cartPage.elements.titleProduct().allTextContents();
//   expect(articlesDansPanier.length).toBe(nombreProduitsAAjouter);
// });
