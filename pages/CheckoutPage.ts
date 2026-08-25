import { Page, Locator } from '@playwright/test';

export class CheckoutPage {

    readonly page: Page;
    readonly messageBox: Locator;
    readonly placeOrderBtn: Locator;
    readonly totalPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.messageBox = this.page.locator('textarea[name="message"]');
        this.placeOrderBtn = this.page.locator('.check_out').getByText('Place Order');
        this.totalPrice = this.page.getByRole('row', { name: 'Total Amount' }).getByRole('paragraph');
    }

    async convertTotalToNum() {
        const num = (await this.totalPrice.innerText()).split(' ')[1];
        return Number(num);
    }
}