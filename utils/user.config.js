const { USER_DATA } = require('../utils/data/user');


function new_user_data() {
    const user = USER_DATA();

    return {
        ...user
    };
}

module.exports = {
    new_user_data
};