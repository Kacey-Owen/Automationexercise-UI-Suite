import { Page, Locator } from '@playwright/test';

export class ProductsPage {

    readonly page: Page;
    readonly productHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productHeader = this.page.getByRole('heading', { name: 'All Products' });
    }
}