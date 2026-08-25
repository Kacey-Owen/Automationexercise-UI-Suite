import { Page, Locator } from '@playwright/test';

export class ProductDetailPage {

    readonly page: Page;
    readonly quantityInput: Locator;
    readonly addToCartBtn: Locator;
    readonly addedToCartMsg: Locator;
    readonly viewCartLink: Locator;
    readonly reviewName: Locator;
    readonly reviewEmail: Locator;
    readonly reviewMsg: Locator;
    readonly submitBtn: Locator;
    readonly reviewConfirm: Locator;

    constructor(page: Page) {
        this.page = page;
        this.quantityInput = this.page.locator('#quantity');
        this.addToCartBtn = this.page.getByRole('button', { name: 'Add to cart' });
        this.addedToCartMsg = this.page.locator('.modal-body').getByText('Your product has been added to cart.');
        this.viewCartLink = this.page.locator('.modal-body').getByRole('link', { name: 'View Cart'});
        this.reviewName = this.page.getByPlaceholder('Your Name');
        this.reviewEmail = this.page.getByPlaceholder('Email Address', { exact: true });
        this.reviewMsg = this.page.getByPlaceholder('Add Review Here!');
        this.submitBtn = this.page.getByRole('button', { name: 'Submit' });
        this.reviewConfirm = this.page.getByText('Thank you for your review.');

    }

    getHeader(headerName: string): Locator {
        return this.page.getByRole('heading', { name: headerName });
    }
}