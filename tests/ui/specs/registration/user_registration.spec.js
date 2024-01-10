const { test } = require('@playwright/test');
const { NavigationMethods } = require('../../methods/navigationMethods');
const { HeaderPageMethods } = require('../../methods/headerPageMethods');
const { FeedPageMethods } = require('../../methods/feedPageMethods');
const { RegisterPageMethods } = require('../../methods/registerPageMethods');
const { ExpectMethods } = require('../../methods/expectMethods');
const { new_user_data } = require('../../../../utils/user.config');


test.describe('Check user registration', () => {

    test.beforeEach(async ({ page }) => {
        const navigationMethods = new NavigationMethods(page);
        await navigationMethods.goToPage();
    });

    test('should user register successfully', async ({ page }) => {
        const headerPageMethods = new HeaderPageMethods(page);
        const feedPageMethods = new FeedPageMethods(page);
        const registerPageMethods = new RegisterPageMethods(page);
        const expectMethods = new ExpectMethods(page);
        const { username, email, password, default_avatar_url } = new_user_data();

        await feedPageMethods.checkFeedTitle();
        await feedPageMethods.checkUserLoggedIn(false);

        await headerPageMethods.checkLogo();
        await headerPageMethods.checkNonAuthorizedUserButtons();
        await headerPageMethods.clickSignUpButton();

        await registerPageMethods.checkTitle();

        const reg_response = await registerPageMethods.registerUser(username, email, password);
        await expectMethods.expectUserResponse(reg_response, { username, email, avatarUrl: default_avatar_url, id: true });

        await headerPageMethods.checkAuthorizedUserButtons(username);

        await feedPageMethods.checkFeedTitle();
        await feedPageMethods.checkUserLoggedIn();
    });

});

