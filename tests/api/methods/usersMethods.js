const { expect } = require('@playwright/test');
const ApiUsersHelper = require('../helpers/usersHelper');
const { REGEX } = require('../../../utils/data/regex');


exports.ApiUsersMethods = class ApiUsersMethods {

    constructor(request) {
        this.request = request;
    }

    async getUserData(authToken, statusCode = 200) {
        return await ApiUsersHelper.GET_users(this.request, { authToken, statusCode });
    }

    async createNewUser(username, email, password, statusCode = 201) {
        const payload = { user: { username, email, password } };

        return await ApiUsersHelper.POST_users(this.request, { payload, statusCode });
    }

    async loginUser(email, password, statusCode = 200) {
        const payload = { user: { email, password } };

        return await ApiUsersHelper.POST_usersLogin(this.request, { payload, statusCode });
    }

    async updateUserData(authToken, username, email, password, bio, avatar, statusCode = 200) {
        const payload = { user: { username, email, password, bio, image: avatar } };

        return await ApiUsersHelper.PUT_users(this.request, { authToken, payload, statusCode });
    }

    async expect_users_success_response(response, username, email, bio, image, id) {
        const expected_id = id === true ? expect.any(Number) : id;

        const expected_response = {
            user: {
                username,
                email,
                id: expected_id,
                bio,
                image,
                token: expect.stringMatching(REGEX.JWT)
            }
        };

        if (!id) delete expected_response.user.id;

        expect(response).toEqual(expected_response);
    }

    async expect_users_error_response(response) {
        expect(response).toEqual({
            'errors': {
                'email or password': ['is invalid']
            }
        });
    }

};