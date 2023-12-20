const { test } = require('@playwright/test');
const {NavigationMethods } = require('../../methods/navigationMethods')
const { HeaderPageMethods } = require('../../methods/headerPageMethods')

test.describe('Check user registration', () => {

    test.beforeEach(async ({ page }) => {
        const navigationMethods = new NavigationMethods(page);
        await navigationMethods.goToPage()
    });

    test('should user register successfully', async ({page}) => {
        const headerPageMethods = new HeaderPageMethods(page);

        await headerPageMethods.checkLogo();
        await headerPageMethods.checkNonAuthorizedUserButtons();
        await headerPageMethods.clickSignUpButton();
    });

});

