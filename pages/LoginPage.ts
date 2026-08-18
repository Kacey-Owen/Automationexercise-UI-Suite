import { Page, Locator } from '@playwright/test';

export class LoginPage {
    
    readonly page: Page;
    readonly loginMessage: Locator;
    readonly signupMessage: Locator;
    readonly loginEmail: Locator;
    readonly loginPassword: Locator;
    readonly signupEmail: Locator;
    readonly signupPassword: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginMessage = this.page.getByRole('heading', { name: 'Login to your account'});
        this.signupMessage = this.page.getByRole('heading', { name: 'New User Signup!'});
        this.loginEmail = this.page.locator('[data-qa="login-email"]');
        this.loginPassword = this.page.locator('[data-qa="login-password"]');
        this.signupEmail = this.page.locator('[data-qa="signup-email"]');
        this.signupPassword = this.page.locator('[data-qa="signup-password"]');
    }
}