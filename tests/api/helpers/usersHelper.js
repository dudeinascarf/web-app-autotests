const { GET_request, POST_request, PUT_request } = require('../helpers/commonHelper');


const USER_ENDPOINT = '/user';
const USERS_ENDPOINT = '/users';
const USERS_LOGIN_ENDPOINT = `/${USER_ENDPOINT}/login`;

const GET_users = async (request, statusCode) => {
    return await GET_request(request, USER_ENDPOINT, statusCode);
};

const POST_users = async (request, payload, statusCode) => {
    return await POST_request(request, USERS_ENDPOINT, payload, statusCode);
};

const POST_usersLogin = async (request, payload, statusCode) => {
    return await POST_request(request, USERS_LOGIN_ENDPOINT, payload, statusCode);
};

const PUT_users = async (request, payload, statusCode) => {
    return await PUT_request(request, USER_ENDPOINT, payload, statusCode);
};


module.exports = {
    GET_users,
    POST_users,
    POST_usersLogin,
    PUT_users
};
