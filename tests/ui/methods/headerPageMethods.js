const { expect } = require('@playwright/test');
const { headerPage } = require('../pages/header.page');


exports.HeaderPageMethods = class HeaderPageMethods {

    constructor(page) {
        this.page = page;
        this.logo = page.locator(headerPage.fields.logo);
        this.homeButton = page.locator(headerPage.buttons.home);
        this.loginButton = page.locator(headerPage.buttons.signIn);
        this.registerButton = page.locator(headerPage.buttons.signUp);
        this.newPostButton = page.locator(headerPage.buttons.newPost);
        this.settingsButton = page.locator(headerPage.buttons.settings);
        this.userNameButton = (username) => page.locator(headerPage.buttons.userName(username));
    }

    async check_active_button(active) {
        const buttons = ['registerButton', 'loginButton', 'homeButton'];

        for (const button of buttons) {
            if (button === active) continue;
            await (expect(this[button])).not.toHaveClass(/active/);
        }
        await (expect(this[active])).toHaveClass(/active/);
    }

    async checkLogo() {
        await expect(this.logo).toBeVisible();
    }

    async checkNonAuthorizedUserButtons() {
        await expect(this.homeButton).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.registerButton).toBeVisible();

        await expect(this.newPostButton).not.toBeVisible();
        await expect(this.settingsButton).not.toBeVisible();
    }

    async checkAuthorizedUserButtons(username) {
        await expect(this.homeButton).toBeVisible();
        await expect(this.newPostButton).toBeVisible();
        await expect(this.settingsButton).toBeVisible();
        await expect(this.userNameButton(username)).toBeVisible();

        await expect(this.loginButton).not.toBeVisible();
        await expect(this.registerButton).not.toBeVisible();
    }

    async clickSignUpButton() {
        await this.registerButton.click();
        await this.page.waitForLoadState();

        await expect(this.page.url()).toContain('/register');

        await this.check_active_button('registerButton');
    }

    async clickSignInButton() {
        await this.loginButton.click();
        await this.page.waitForLoadState();

        await expect(this.page.url()).toContain('/login');

        await this.check_active_button('loginButton');
    }

    async clickHomeButton() {
        await this.homeButton.click();
        await this.page.waitForLoadState();

        await expect(this.page.url()).toContain('/');

        await this.check_active_button('homeButton');
    }

};