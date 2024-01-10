const { ApiUsersMethods } = require('../../api/methods/usersMethods');


exports.ExpectMethods = class ExpectMethods {
    constructor(page) {
        this.request = page.request;
        this.apiUsersMethods = new ApiUsersMethods(this.request);
    }

    async expectUserResponse(responseData, options) {
        const username = options?.username;
        const email = options?.email;
        const avatar_url = options?.avatarUrl;
        const bio = options?.bio || null;
        const id = options?.id || null;

        if (!options) return await this.apiUsersMethods.expect_users_error_response(responseData);

        await this.apiUsersMethods.expect_users_success_response(responseData, username, email, bio, avatar_url, id);
    }

};