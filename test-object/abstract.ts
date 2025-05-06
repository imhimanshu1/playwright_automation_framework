import {Page, BrowserContext, expect} from '@playwright/test'

export class Abstract{
    constructor(public page: Page, public browserContext: BrowserContext){
        this.page = page;
        this.browserContext = browserContext;
    }

    async wait(time: number){
        await this.page.waitForTimeout(time);
    }

    async navigateTo(url: string): Promise<void>{
        await this.page.goto(url);
    }

    async clickElement(selector: string): Promise<void>{
        await this.page.locator(selector).click();
    }

    async fillElementText(selector: string, text: any): Promise<void>{
        await this.page.locator(selector).fill(String(text));
    }

    async fillNthElementText(selector: string, position: number, input: string): Promise<void>{
        await this.page.locator(selector).nth(position).fill(input);
    }

    async clickNthElement(selector: string, position: number): Promise<void>{
        await this.page.locator(selector).nth(position).click();
    }

    async selectDropdownOptionByValue(selector: string, value: string, optionSelector, position): Promise<void> {
        await this.page.locator(selector).nth(position).fill(value);
        await this.page.waitForSelector(optionSelector, { state: 'visible' });
        await this.page.locator(`${optionSelector}[value="${value}"]`).click();
        await this.page.waitForTimeout(4000);

    }
}

