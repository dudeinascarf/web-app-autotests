const ApiUsersHelper = require('../helpers/usersHelper');


exports.ApiUsersMethods = class ApiUsersMethods {

    constructor(request) {
        this.request = request;
    }

    async getUserData(statusCode) {
        return await ApiUsersHelper.GET_users(this.request, statusCode);
    }

    async createNewUser(username, email, password, statusCode) {
        const payload = { user: { username, email, password } };

        return await ApiUsersHelper.POST_users(this.request, payload, statusCode);
    }

    async loginUser(email, password) {
        const payload = { user: { email, password } };

        return await ApiUsersHelper.POST_usersLogin(this.request, payload);
    }

    async updateUserData(username, email, password, statusCode) {
        const payload = { user: { username, email, password } };

        return await ApiUsersHelper.PUT_users(this.request, payload, statusCode);
    }


};