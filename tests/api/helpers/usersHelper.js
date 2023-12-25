const { create_request } = require('../helpers/commonHelper');


const USER_ENDPOINT = 'user';
const USERS_ENDPOINT = 'users';
const USERS_LOGIN_ENDPOINT = `${USERS_ENDPOINT}/login`;

const GET_users = create_request('get', USER_ENDPOINT);
const POST_users = create_request('post', USERS_ENDPOINT);
const POST_usersLogin = create_request('post', USERS_LOGIN_ENDPOINT);
const PUT_users = create_request('put', USER_ENDPOINT);


module.exports = {
    GET_users,
    POST_users,
    POST_usersLogin,
    PUT_users
};
