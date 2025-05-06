import { BrowserContext, Page } from '@playwright/test';
import { Login } from '../../../test-object/login/loginPage';
import { urlEndPoints } from '../../../test-object/url.endpoint.const'; // Updated the path to match the correct file
import { Dashboard } from '../../../test-object/dashboard/dashboardPage';


class Modules {
    constructor(
        readonly page: Page,
        readonly browserContext: BrowserContext,
        readonly login: Login,
        readonly dashboard: Dashboard,

        readonly UrlEndPoints: typeof urlEndPoints
    ) {}
}

export function module(page: Page, browserContext: BrowserContext): Modules {
    const login = new Login(page, browserContext);
    const dashboard = new Dashboard(page, browserContext);


    return new Modules(
        page,
        browserContext,
        login,
        dashboard,     
        urlEndPoints    
    );
}
