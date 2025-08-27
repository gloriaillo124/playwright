import {Locator, Page} from '@playwright/test';

class LoginPage {
    
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

   elements = {
        username: ()=>this.page.locator('input[name="user-name"]'),
        password:()=> this.page.locator('input[name="password"]'),
        submit: ()=>this.page.getByRole('button', {name: 'Login'}),
        errorMessage: ()=>this.page.locator('h3[data-test="error"]')
    
    }
    async saisirUsername(username: string){
        await this.elements.username().fill(username);
    }
    async saisirPassword(password: string){
        await this.elements.password().fill(password);
    }
    async clickSurLogin(){
        await this.elements.submit().click();
    }
    getErrorMessage(): Locator {
        return this.elements.errorMessage();
    }

}
export default  LoginPage;