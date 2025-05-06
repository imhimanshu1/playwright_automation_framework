import { expect } from "@playwright/test";
import { Abstract } from "../abstract";
import { generateUniqueEmail, generateUniquePhoneNumber } from "../../utils/testDataGenerator";
import { dashboardSelector } from "./dashboard.selector";

export class Dashboard extends Abstract {
    async fillAddPuchaseForm(inputData: any): Promise<void> {
        await this.clickElement(dashboardSelector.addPurchaseButton);
        await this.selectDropdownOptionByValue(dashboardSelector.selectDropdown, inputData.shipmentMode, dashboardSelector.optiomSelector, 1);
        await this.selectDropdownOptionByValue(dashboardSelector.selectDropdown, inputData.supplier, dashboardSelector.optiomSelector, 2);
        await this.selectDropdownOptionByValue(dashboardSelector.selectDropdown, inputData.bilingEntity, dashboardSelector.optiomSelector, 3);
        await this.selectDropdownOptionByValue(dashboardSelector.selectDropdown, inputData.incoterm, dashboardSelector.optiomSelector, 4);
        await this.selectDropdownOptionByValue(dashboardSelector.selectDropdown, inputData.supplierSite, dashboardSelector.optiomSelector, 5);
        
        await this.wait(7000);
    }

    async clickNextButton(): Promise<void> {
        await this.clickElement(dashboardSelector.nextButton);
        await this.wait(7000);

    }

    async navigateToSales(): Promise<void> {
        await this.clickElement(dashboardSelector.salesButtom);
        await this.page.getByRole('link', { name: 'Sales' }).click();
        await expect(this.page.getByText('Sale & Opportunity list')).toBeVisible();
        await this.wait(3000);
        }

    async navigateToInboundsLoads(): Promise<void> {
        await this.clickElement(dashboardSelector.inboundLoadsButton);
        await this.page.getByRole('link', { name: 'Inbound loads' }).click();
        await expect(this.page.getByText('Inbound loads')).toBeVisible();
    }

    async clickLogoutButton(): Promise<void> {
        await this.clickElement(dashboardSelector.logoutHeaderMeanu);
        await this.clickElement(dashboardSelector.logoutButton);
        await expect(this.page.getByRole('paragraph').filter({ hasText: 'Log in' })).toBeVisible();
    }

    async clickWrongButton(): Promise<void> {
        await this.clickElement(dashboardSelector.wrongButton);
    }
}

