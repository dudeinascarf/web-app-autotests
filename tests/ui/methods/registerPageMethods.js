const { expect } = require('@playwright/test');
const { registerPage } = require('../pages/register.page');
const { API_URL } = require('../../../utils/env.config');


exports.RegisterPageMethods = class RegisterPageMethods {

    constructor(page) {
        this.page = page;
        this.title = page.getByRole('heading', { name: registerPage.title });
        this.usernameInput = page.locator(registerPage.inputs.username);
        this.emailInput = page.locator(registerPage.inputs.email);
        this.passwordInput = page.locator(registerPage.inputs.password);
        this.signUpButton = page.locator(registerPage.buttons.signUp);
        this.haveAnAccountButton = page.getByRole('link', { name: registerPage.buttons.haveAnAccount });
    }

    async checkTitle() {
        await expect(this.title).toBeVisible();
    }

    async registerUser(username, email, password) {
        await this.usernameInput.fill(username);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);

        await expect(this.passwordInput).toHaveAttribute('type', 'password');

        const responsePromise = this.page.waitForResponse(`${API_URL}/users`);

        await this.signUpButton.click();
        await this.page.waitForLoadState();

        const response = await responsePromise;

        return await response.json();
    }

};