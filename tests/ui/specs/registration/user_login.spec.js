const { test } = require('@playwright/test');
const { NavigationMethods } = require('../../methods/navigationMethods');
const { HeaderPageMethods } = require('../../methods/headerPageMethods');
const { FeedPageMethods } = require('../../methods/feedPageMethods');
const { LoginPageMethods } = require('../../methods/loginPageMethods');
const { ExpectMethods } = require('../../methods/expectMethods');
const { ApiUsersMethods } = require('../../../api/methods/usersMethods');
const { new_user_data, existing_user_data } = require('../../../../utils/user.config');


test.describe('Check user login', () => {

    test.beforeEach(async ({ page }) => {
        const navigationMethods = new NavigationMethods(page);
        const headerPageMethods = new HeaderPageMethods(page);
        const loginPageMethods = new LoginPageMethods(page);

        await navigationMethods.goToPage();

        await headerPageMethods.checkLogo();
        await headerPageMethods.checkNonAuthorizedUserButtons();
        await headerPageMethods.clickSignInButton();

        await loginPageMethods.checkTitle();
    });

    test('should newly registered user logs in', async ({ page, request }) => {
        const feedPageMethods = new FeedPageMethods(page);
        const loginPageMethods = new LoginPageMethods(page);
        const expectMethods = new ExpectMethods(page);
        const apiUsersMethods = new ApiUsersMethods(request);
        const { username, email, password, default_avatar_url } = new_user_data();

        await apiUsersMethods.createNewUser(username, email, password);

        const login_response = await loginPageMethods.loginUser(email, password);
        await expectMethods.expectUserResponse(login_response, username, email, default_avatar_url);

        await feedPageMethods.checkFeedTitle();
        await feedPageMethods.checkUserLoggedIn();
    });

    test('should existing user logs in', async ({ page }) => {

    });

    test('should user not logs in with invalid credentials', async ({ page }) => {

    });


});

