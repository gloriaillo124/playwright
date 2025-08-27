// import { Locator, Page } from '@playwright/test';

// class MenuPage {
//   page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   elements = {
//     burger: () => this.page.locator('#react-burger-menu-btn'),
//     logout: () => this.page.locator('[data-test="logout-sidebar-link"]'),
//     about: () => this.page.locator('[data-test="about-sidebar-link"]'),
//     reset: () => this.page.locator('[data-test="reset-sidebar-link"]'),
//     allItems: () => this.page.locator('[data-test="inventory-sidebar-link"]')
//   };

//   async clickOpenMenu() {
//     await this.elements.burger().click();
//   }

//   async clickLogout() {
//     await this.elements.logout().click();
//   }

//   async clickAbout() {
//     await this.elements.about().click();
//   }

//   async clickResetAppState() {
//     await this.elements.reset().click();
//   }

//   async clickAllItems() {
//     await this.elements.allItems().click();
//   }
// }

// export default MenuPage;
