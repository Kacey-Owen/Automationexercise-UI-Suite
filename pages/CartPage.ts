import { Page, Locator } from '@playwright/test';

export class CartPage {
    
    readonly page: Page;
    readonly emptyCartMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emptyCartMessage = this.page.getByText('Cart is empty!');
    }

    getProductQuantity(productName: string): Locator {
        return this.page
                .locator('#product-1')
                .filter({ hasText: productName })
                .locator('.disabled');
    }

    getCartProductHeader(productName: string): Locator {
        return this.page.getByRole('heading', { name: productName });
    }

    async goto() {
        await this.page.goto('/view_cart');
    }
}