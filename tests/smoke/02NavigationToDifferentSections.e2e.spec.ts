import { test } from "@playwright/test";
import { module } from "../../lib/fixtures/ui/modules.pageObjects";
import { createTestData } from "../../test-data/inputData";

test.describe('Navigation to different sections', async() => {
    test.beforeEach(async({page, context})=>{
        const modules = module(page, context);
        await page.goto(modules.UrlEndPoints.testUrl)
    });

    const inputData = createTestData;

    inputData.forEach((inputData)=> {
        test('Navigation to different sections', async({page, context})=>{
            const modules = module(page, context)
        
        await test.step('Login to portal', async()=>{
            await modules.login.login(inputData, modules.UrlEndPoints.testUrl);
            console.log('Login successfully');
        });

        await test.step('Navigate to Purchase Order', async()=>{
            await modules.dashboard.navigateToSales();
            console.log('Navigated to Sale & Opportunity list');
            await modules.dashboard.navigateToInboundsLoads();
            console.log('Navigated to Inbound loads');
        });


        await test.step('Logout to portal', async()=>{
          await modules.dashboard.clickLogoutButton();
          console.log('Logout successfully');
      });
    }); 
});
});

