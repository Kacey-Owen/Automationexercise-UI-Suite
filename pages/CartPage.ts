import { Page, Locator } from '@playwright/test';

export class CartPage {
    
    readonly page: Page;
    readonly emptyCartMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emptyCartMessage = this.page.getByText('Cart is empty!');
    }

    getProductQuantity(productName: string, productNum: string): Locator {
        return this.page
                .locator(`#product-${productNum}`)
                .filter({ hasText: productName })
                .locator('.disabled');
    }

    getProductPrice(productName: string, productNum: string): Locator {
        return this.page
                .locator(`#product-${productNum}`)
                .filter({ hasText: productName })
                .locator('.cart_price');
    }

    getCartProductHeader(productName: string): Locator {
        return this.page.getByRole('heading', { name: productName });
    }

    async goto() {
        await this.page.goto('/view_cart');
    }

    //seperate functions due to having to split the price
    async convertPriceToNumber(productName: string, productNum: string) {
        const num = (await this.getProductPrice(productName, productNum).innerText()).split(' ')[1];
        return Number(num);
    }

    //quantity does not have to be split
    async convertQtyToNumber(productName: string, productNum: string) {
        const num = (await this.getProductQuantity(productName, productNum).innerText());
        return Number(num);
    }
}