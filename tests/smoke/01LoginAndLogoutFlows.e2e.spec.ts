import { test } from "@playwright/test";
import { module } from "../../lib/fixtures/ui/modules.pageObjects";
import { createTestData } from "../../test-data/inputData";

test.describe('login and logout flows', async() => {
    test.beforeEach(async({page, context})=>{
        const modules = module(page, context);
        await page.goto(modules.UrlEndPoints.testUrl)
    });

    const inputData = createTestData;

    inputData.forEach((inputData)=> {
        test('login and logout flows', async({page, context})=>{
            const modules = module(page, context)
        
        await test.step('Login to portal', async()=>{
            await modules.login.login(inputData, modules.UrlEndPoints.testUrl);
            console.log('Login successfully');
        });

        await test.step('Logout to portal', async()=>{
          await modules.dashboard.clickLogoutButton();
          console.log('Logout successfully');
      });
    }); 
});
});

