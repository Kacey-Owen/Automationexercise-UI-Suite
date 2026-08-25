import { Page, Locator } from '@playwright/test';

export class PaymentPage {

    readonly page: Page;
    readonly nameInput: Locator;
    readonly cardNumber: Locator;
    readonly cvcNum: Locator;
    readonly expirationMonth: Locator;
    readonly expirationYear: Locator;
    readonly confirmOrderBtn: Locator;
    readonly orderConfirmedMsg: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = this.page.locator('[data-qa="name-on-card"]');
        this.cardNumber = this.page.locator('[data-qa="card-number"]');
        this.cvcNum = this.page.locator('[data-qa="cvc"]');
        this.expirationMonth = this.page.locator('[data-qa="expiry-month"]');
        this.expirationYear = this.page.locator('[data-qa="expiry-year"]');
        this.confirmOrderBtn = this.page.locator('[data-qa="pay-button"]');
        this.orderConfirmedMsg = this.page.locator('[data-qa="order-placed"]');
        this.continueBtn = this.page.locator('[data-qa="continue-button"]');
    }
}