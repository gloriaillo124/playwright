// import { Page, Locator } from '@playwright/test';

// class InventoryPage {
//   page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   elements = {
//     allProducts: () => this.page.locator('.inventory_item'),
//     addToCartButtons: () => this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'),
//     cartBadge: () => this.page.locator('.shopping_cart_badge'),
//     cartLink: () => this.page.locator('[data-test="shopping-cart-link"]'),
//     productTitles: () => this.page.locator('.inventory_item_name')
//   };
//   tools = {
//     getAllCards: ()=> this.page.locator('.inventory_item'),
//     extractCardName: (card: any)=> card.locator('.inventory_item_name').textContent(),
//     cardTojson: async (card: any)=> {
//         const name = await card.locator('.inventory_item_name').textContent();
//         const price = await card.locator('.inventory_item_price').textContent();
//         return { name : name , price: price }
//     }
//   }


//   async ajouterUnProduitAleatoire(nombreProduitsAAjouter: number) {
//     const total = await this.elements.addToCartButtons().count();
//     const randomIndex = Math.floor(Math.random() * total);
//     await this.elements.addToCartButtons().nth(randomIndex).click();
//   }

 
// //   async ajouterProduitsAleatoires(nombre: number) {
// //     const total = await this.elements.addToCartButtons().count();
// //     const indexSet = new Set<number>();

// //     while (indexSet.size < nombre && indexSet.size < total) {
// //       indexSet.add(Math.floor(Math.random() * total));
// //     }

// //     for (const i of indexSet) {
// //       await this.elements.addToCartButtons().nth(i).click();
// //     }
// //   }

  
//   async getNombreArticlesDansPanier(): Promise<number> {
//     if (await this.elements.cartBadge().isVisible()) {
//       const text = await this.elements.cartBadge().innerText();
//       return parseInt(text);
//     }
//     return 0;
//    }

//   async ouvrirPanier() {
//     await this.elements.cartLink().click();
//   }

// }

// export default InventoryPage;
