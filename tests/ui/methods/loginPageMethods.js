const { expect } = require('@playwright/test');
const { loginPage } = require('../pages/login.page');
const { API_URL } = require('../../../utils/env.config');


exports.LoginPageMethods = class LoginPageMethods {

    constructor(page) {
        this.page = page;
        this.title = page.getByRole('heading', { name: loginPage.title });
        this.emailInput = page.locator(loginPage.inputs.email);
        this.passwordInput = page.locator(loginPage.inputs.password);
        this.signInButton = page.locator(loginPage.buttons.signIp);
        this.notRegistered = page.getByRole('link', { name: loginPage.buttons.notRegistered });
    }

    async checkTitle() {
        await expect(this.title).toBeVisible();
    }

    async loginUser(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);

        await expect(this.passwordInput).toHaveAttribute('type', 'password');

        const responsePromise = this.page.waitForResponse(`${API_URL}/users/login`);

        await this.signInButton.click();
        await this.page.waitForLoadState();

        const response = await responsePromise;

        return await response.json();
    }

};