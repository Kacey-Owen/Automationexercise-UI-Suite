import { Page, Locator } from '@playwright/test';

export class CartPage {
    
    readonly page: Page;
    readonly emptyCartMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emptyCartMessage = this.page.getByText('Cart is empty!');
    }

    getCartProductHeader(productName: string): Locator {
        return this.page.getByRole('heading', { name: productName });
    }
}