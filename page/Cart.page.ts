// import { Page } from "@playwright/test";
 

// class CartPage{
//     page: Page;
    
//     constructor(page: Page){
//         this.page= page;
//     }
//     elements = {
//         cart: ()=>this.page.locator('.cart_list'),
//         titleProduct: ()=>this.page.locator('[data-test="inventory-item-name"]'),
//         priceProduct: ()=> this.page.locator('.inventory_item_price'),
//         continueShoppingButton: ()=>this.page.locator('[data-test="continue-shopping"]'),
//         checkoutButton: ()=>this.page.locator('[data-test="checkout"]')
//     }
//     tools = {
//     getAllCards: ()=> this.page.locator('.inventory_item'),
//     extractCardName: (card: any)=> card.locator('.inventory_item_name').textContent(),
//     cardTojson: async (card: any)=> {
//         const name = await card.locator('.inventory_item_name').textContent();
//         const price = await card.locator('.inventory_item_price').textContent();
//         return { name : name , price: price }
//     }
//     }
    
//     async clickSurContinue(){
//         await this.elements.checkoutButton().click();
//     }

// }
// export default CartPage;