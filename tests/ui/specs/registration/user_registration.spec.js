const { test } = require('@playwright/test');
const { NavigationMethods } = require('../../methods/navigationMethods');
const { HeaderPageMethods } = require('../../methods/headerPageMethods');
const { RegisterPageMethods } = require('../../methods/registerPageMethods');


test.describe('Check user registration', () => {

    test.beforeEach(async ({ page }) => {
        const navigationMethods = new NavigationMethods(page);
        await navigationMethods.goToPage();
    });

    test('should user register successfully', async ({ page }) => {
        const headerPageMethods = new HeaderPageMethods(page);
        const registerPageMethods = new RegisterPageMethods(page);

        await headerPageMethods.checkLogo();
        await headerPageMethods.checkNonAuthorizedUserButtons();
        await headerPageMethods.clickSignUpButton();

        await registerPageMethods.checkTitle();
        await registerPageMethods.registerUser('testuser69696', 'testuser69696@1secmail.com', 'test321!');
    });

});

