const { generateValueWithMask, generateUsername } = require('../../utils/datagen/randomizer');


const USER_DATA = () => {
    const username = `${generateUsername()}_${generateValueWithMask('####')}`;
    const email = `${username}@1secmail.com`;
    const password = 'Test321!';
    const avatar_url = 'https://api.realworld.io/images/smiley-cyrus.jpeg';

    return {
        username,
        email,
        password,
        avatar_url
    };
}

module.exports = {
    USER_DATA
}