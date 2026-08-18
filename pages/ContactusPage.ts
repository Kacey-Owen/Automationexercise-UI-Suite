import { Page, Locator } from '@playwright/test';

export class ContactusPage {

    readonly page: Page;
    readonly contactusHeader: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly messageInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactusHeader = this.page.getByRole('heading', { name: 'Contact Us'});
        this.nameInput = this.page.locator('[data-qa="name"]');
        this.emailInput = this.page.locator('[data-qa="email"]');
        this.subjectInput = this.page.locator('[data-qa="subject"]');
        this.messageInput = this.page.locator('[data-qa="message"]');
    }
}