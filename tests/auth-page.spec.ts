import { test, expect } from '@playwright/test';
import { AuthPage, SignupPage } from '../pages/AuthPage';
import { validUserDetails, invalidUser } from '../test-data/users';

let authPage: AuthPage;
let signupPage: SignupPage;

test.beforeEach(async ({ page }) => {
    //navigate to auth page every test
    authPage = new AuthPage(page);
    await authPage.goto();
});

test.describe('Happy Paths', () => {
    
    test('check if auth page is visible', async ({ page }) => {
        //get headers
        const loginMessage = authPage.getHeader('Login to your account');
        const signupMessage = authPage.getHeader('New User Signup!');

        //check for correct url and login and signup messages
        await expect(page).toHaveURL('/login');
        await expect(loginMessage).toHaveText('Login to your account');
        await expect(signupMessage).toHaveText('New User Signup!');
    });

    test('check sign up form works', async ({ page }) => {
        //fill in signup textboxes
        await authPage.signupEmail.fill(validUserDetails.email);
        await authPage.signupName.fill(validUserDetails.fullName);
        await authPage.signupBtn.click();

        //create signup page instance after navigating to signup page
        signupPage = new SignupPage(page);

        //fill in sign up form with user info
        await signupPage.fillUserInfo();
        await signupPage.createAccountBtn.click();

        //check if url and confirmation message are correct
        const creationMsg = signupPage.getHeader('Account Created!');
        await expect(creationMsg).toHaveText('Account Created!');
        await expect(page).toHaveURL('/account_created');
        
        await page.pause();
    });
});