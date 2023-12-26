const { expect } = require('@playwright/test');
const { registerPage } = require('../pages/register.page');
const { API_URL } = require('../../../utils/env.config');
const { JWT_REGEX } = require('../../../utils/data/regex');


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

    async expect_response(responseData, status, userData) {
        const { username, email, avatar_url } = userData;

        await expect(status).toBe(201);
        await expect(responseData.user.email).toBe(email);
        await expect(responseData.user.username).toBe(username);
        await expect(responseData.user.bio).toBeNull();
        await expect(responseData.user.image).toBe(avatar_url);
        await expect(responseData.user.token).toMatch(JWT_REGEX);
    }

    async checkTitle() {
        await expect(this.title).toBeVisible();
    }

    async registerUser(username, email, password, avatar_url) {
        await this.usernameInput.fill(username);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);

        await expect(this.passwordInput).toHaveAttribute('type', 'password');

        const responsePromise = this.page.waitForResponse(`${API_URL}/users`);

        await this.signUpButton.click();
        await this.page.waitForLoadState();

        const response = await responsePromise;
        const status = response.status();
        const data = await response.json();

        await this.expect_response(data, status, { username, email, avatar_url });
    }

};