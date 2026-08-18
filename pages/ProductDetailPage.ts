import { Page, Locator } from '@playwright/test';

export class ProductDetailPage {

    readonly page: Page;
    readonly productNameHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productNameHeader = this.page.getByRole('heading', { name: 'Blue Top' });
    }
}