import { Page, Locator } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly homePageFeaturesHeader: Locator; 
    readonly productNavLink: Locator;
    readonly cartNavLink: Locator;
    readonly logInNavLink: Locator;
    readonly contactusNavLink: Locator;
    readonly websiteLogo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homePageFeaturesHeader = this.page.getByRole('heading', {name: 'Features Items'});
        this.productNavLink = this.page.getByRole('link', {name: ' Products'});
        this.cartNavLink = this.page.getByRole('link', {name: ' Cart'});
        this.logInNavLink = this.page.getByRole('link', {name: ' Signup / Login'});
        this.contactusNavLink = this.page.getByRole('link', {name: ' Contact us'});
        this.websiteLogo = this.page.getByAltText('Website for automation practice');
    }

    async goto() {
        await this.page.goto('/');
    }

    getAddToCartLink(productName: string): Locator {
        return this.page
                .locator('.single-products')
                .filter({ hasText: productName })
                .getByRole('link', { name: 'Add to cart' })
                .first();
    }

    getViewProductLink(productName: string): Locator {
        return this.page
                .locator('.product-image-wrapper')
                .filter({ hasText: productName })
                .getByRole('link', { name: 'View Product' });
    }

    async addProductToCart(productName: string) {
        await this.getAddToCartLink(productName).click();
    }
}