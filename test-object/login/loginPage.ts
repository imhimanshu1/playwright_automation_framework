import { expect } from "@playwright/test";
import { loginPageSelector } from "./loginPage.selector";
import { Abstract } from "../abstract";

export class Login extends Abstract {

    async login(data:any, url: string){
        await this.clickElement(loginPageSelector.email);
        await this.fillElementText(loginPageSelector.email, data.userName);
        await this.fillElementText(loginPageSelector.password, data.password);
        await this.clickElement(loginPageSelector.loginButton);
        await this.wait(5000);
        await expect(this.page).toHaveURL('https://demo.haroldwaste.com/purchases');
        await expect(this.page.getByText('Purchase & Opportunity list')).toBeVisible();

}
}