import { Page, Locator } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly homePageFeaturesHeader: Locator; 
    readonly productNavLink: Locator;
    readonly cartNavLink: Locator;
    readonly logInNavLink: Locator;
    readonly logOutNavLink: Locator; //used for auth page login test
    readonly contactusNavLink: Locator;
    readonly websiteLogo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homePageFeaturesHeader = this.page.getByRole('heading', {name: 'Features Items'});
        this.productNavLink = this.page.getByRole('link', {name: ' Products'});
        this.cartNavLink = this.page.getByRole('link', {name: ' Cart'});
        this.logInNavLink = this.page.getByRole('link', {name: ' Signup / Login'});
        this.logOutNavLink = this.page.getByRole('link', {name: ' Logout'});//used for after user is logged in
        this.contactusNavLink = this.page.getByRole('link', {name: ' Contact us'});
        this.websiteLogo = this.page.getByAltText('Website for automation practice');
    }

    async goto() {
        await this.page.goto('/');
    }

    getViewProductLink(productName: string): Locator {
        return this.page
                .locator('.product-image-wrapper')
                .filter({ hasText: productName })
                .getByRole('link', { name: 'View Product' });
    }
}