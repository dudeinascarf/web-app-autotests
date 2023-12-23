const { test, expect } = require('@playwright/test');
const { ApiUsersMethods } = require('../../methods/usersMethods');
const { new_user_data } = require('../../../../utils/user.config');


test.describe('Check User and Auth endpoints', () => {

    test('check user registration, login and profile', async ({ request }) => {
        const apiUsersMethods = new ApiUsersMethods(request);
        const { username, email, password } = new_user_data();

        const registration_response = await apiUsersMethods.createNewUser(username, email, password);
        await apiUsersMethods.expect_users_success_response(registration_response);

    });

});