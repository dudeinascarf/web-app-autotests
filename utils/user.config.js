const { USER_DATA } = require('../utils/data/user');
const existing_users = require('../utils/data/existingUsers.json');


function new_user_data() {
    const user = USER_DATA();

    return {
        ...user
    };
}

function existing_user_data(type = 'default') {
    const { default_avatar_url } = USER_DATA();

    return {
        ...existing_users[type],
        default_avatar_url
    };
}

module.exports = {
    new_user_data,
    existing_user_data
};