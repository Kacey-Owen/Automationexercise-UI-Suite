import { Page, Locator } from '@playwright/test';
import { validUserDetails } from '../test-data/users';

export class AuthPage {
    
    readonly page: Page;
    readonly loginEmail: Locator;
    readonly loginPassword: Locator;
    readonly loginBtn: Locator;
    readonly signupEmail: Locator;
    readonly signupName: Locator;
    readonly signupBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        //log in side
        this.loginEmail = this.page.locator('[data-qa="login-email"]');
        this.loginPassword = this.page.locator('[data-qa="login-password"]');
        this.loginBtn = this.page.locator('[data-qa="login-button"]');
        //sign up side
        this.signupEmail = this.page.locator('[data-qa="signup-email"]');
        this.signupName = this.page.locator('[data-qa="signup-name"]');
        this.signupBtn = this.page.locator('[data-qa="signup-button"]');
    }

    async goto() {
        await this.page.goto('/login');
    }

    getHeader(headerName: string): Locator {
        return this.page.getByRole('heading', { name: headerName });
    }
}

export class SignupPage {

    readonly page: Page;
    readonly signupPassword: Locator;
    readonly birthDay: Locator;
    readonly birthMonth: Locator;
    readonly birthYear: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signupPassword = this.page.locator('[data-qa="password"]');
        this.birthDay = this.page.locator('[data-qa="days"]');
        this.birthMonth = this.page.locator('[data-qa="months"]');
        this.birthYear = this.page.locator('[data-qa="years"]');
        this.firstName = this.page.locator('[data-qa="first_name"]');
        this.lastName = this.page.locator('[data-qa="last_name"]');
        this.address = this.page.locator('[data-qa="address"]');
        this.country = this.page.locator('[data-qa="country"]');
        this.state = this.page.locator('[data-qa="state"]');
        this.city = this.page.locator('[data-qa="city"]');
        this.zipcode = this.page.locator('[data-qa="zipcode"]');
        this.mobileNumber = this.page.locator('[data-qa="mobile_number"]');
        this.createAccountBtn = this.page.locator('[data-qa="create-account"]');
    }

    getHeader(headerName: string): Locator {
        return this.page.getByRole('heading', { name: headerName });
    }

    getTitleBtn(titleName: string): Locator {
        return this.page.getByRole('radio', { name: titleName });
    }

    async fillUserInfo() {
        const mrTitle = this.getTitleBtn('Mr.');
        await mrTitle.click();
        await this.signupPassword.fill(validUserDetails.password);
        await this.birthDay.selectOption('31');
        await this.birthMonth.selectOption('October');
        await this.birthYear.selectOption('1982');
        await this.firstName.fill(validUserDetails.firstName);
        await this.lastName.fill(validUserDetails.lastName);
        await this.address.fill(validUserDetails.address);
        await this.country.selectOption('United States');
        await this.state.fill(validUserDetails.state);
        await this.city.fill(validUserDetails.city);
        await this.zipcode.fill(validUserDetails.zipcode);
        await this.mobileNumber.fill(validUserDetails.mobileNumber);
    }
}