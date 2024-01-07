const { expect } = require('@playwright/test');
const { ApiUsersMethods } = require('../../api/methods/usersMethods');


exports.ExpectMethods = class ExpectMethods {
    constructor(page) {
        this.request = page.request;
        this.apiUsersMethods = new ApiUsersMethods(this.request);
    }

    async expectUserResponse(responseData, username, email, avatar_url, bio = null) {
        await this.apiUsersMethods.expect_users_success_response(responseData, username, email, bio, avatar_url);
    }

};