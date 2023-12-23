const { expect } = require('@playwright/test');
const ApiUsersHelper = require('../helpers/usersHelper');


exports.ApiUsersMethods = class ApiUsersMethods {

    constructor(request) {
        this.request = request;
    }

    async getUserData(statusCode) {
        return await ApiUsersHelper.GET_users(this.request, statusCode);
    }

    async createNewUser(username, email, password, statusCode = 201) {
        const payload = { user: { username, email, password } };

        return await ApiUsersHelper.POST_users(this.request, payload, statusCode);
    }

    async loginUser(email, password, statusCode = 200) {
        const payload = { user: { email, password } };

        return await ApiUsersHelper.POST_usersLogin(this.request, payload);
    }

    async updateUserData(username, email, password, statusCode = 200) {
        const payload = { user: { username, email, password } };

        return await ApiUsersHelper.PUT_users(this.request, payload, statusCode);
    }

    async expect_users_success_response(response) {
        expect(response.user).toBeDefined();
        expect(response.user.email).toBeDefined();
        expect(response.user.token).toBeDefined();
        expect(response.user.username).toBeDefined();
        expect(response.user.bio).toBeDefined();
        expect(response.user.image).toBeDefined();
    }

    async expect_users_error_response(response) {
        expect(response.errors).toBeDefined();
        expect(response.errors.body).toBeDefined();
    }

};