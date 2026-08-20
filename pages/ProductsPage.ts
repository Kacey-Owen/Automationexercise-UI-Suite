import { Page, Locator } from '@playwright/test';

export class ProductsPage {

    readonly page: Page;
    readonly searchBox: Locator;
    readonly searchBtn: Locator;
    readonly addedToCartMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBox = this.page.locator('#search_product');
        this.searchBtn = this.page.locator('#submit_search');
        this.addedToCartMsg = this.page.locator('.modal-body').getByText('Your product has been added to cart.');
    }

    async goToProductsPage() {
        await this.page.goto('/products');
    }

    getHeader(headerName: string): Locator {
        return this.page.getByRole('heading', { name: headerName });
    }

    //had to be more exact when getting categories than getting headers
    getCategory(categoryName: string): Locator {
        return this.page.getByRole('link').filter({ has: this.page.getByText(categoryName, { exact: true }) });
    }

    //seperate get function because brands have number of items in name
    getBrandCategory(categoryName: string): Locator {
        return this.page.getByRole('link').filter({ has: this.page.getByText(categoryName) });
    }

    getAddToCartLink(productName: string): Locator {
        return this.page
                .locator('.overlay-content')
                .filter({ hasText: productName })
                .getByText('Add to cart');
    }

    getProductName(productName: string): Locator {
        return this.page
                .locator('.productinfo')
                .getByText(productName);
    }
}