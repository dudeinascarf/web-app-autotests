const { test } = require('@playwright/test');
const { ApiUsersMethods } = require('../../methods/usersMethods');
const { new_user_data } = require('../../../../utils/user.config');


const new_user = new_user_data();
const updated_user = new_user_data();
let auth_token;

test.describe('Check User and Auth endpoints', () => {

    test('check user registration, login and profile', async ({ request }) => {
        const apiUsersMethods = new ApiUsersMethods(request);
        const { username, email, password } = new_user;

        const registration_response = await apiUsersMethods.createNewUser(username, email, password);
        await apiUsersMethods.expect_users_success_response(registration_response);

        const login_response = await apiUsersMethods.loginUser(email, password);
        await apiUsersMethods.expect_users_success_response(login_response);

        auth_token = login_response.user.token;
        const profile_response = await apiUsersMethods.getUserData(auth_token);
        await apiUsersMethods.expect_users_success_response(profile_response);

        const update_user_response = await apiUsersMethods.updateUserData(auth_token, updated_user);
        await apiUsersMethods.expect_users_success_response(profile_response);

        auth_token = update_user_response.user.token;
        const updated_profile_response = await apiUsersMethods.getUserData(auth_token);
        await apiUsersMethods.expect_users_success_response(updated_profile_response);

    });

});