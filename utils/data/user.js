const {
    generateValueWithMask,
    generateUsername,
    generateUserBio,
    generateUserAvatarUrl
} = require('../../utils/datagen/randomizer');


const USER_DATA = () => {
    const username = `${generateUsername()}_${generateValueWithMask('####')}`;
    const email = `${username}@1secmail.com`;
    const password = 'Test321!';
    const updated_password = generateValueWithMask('########');
    const bio = generateUserBio();
    const default_avatar_url = 'https://api.realworld.io/images/smiley-cyrus.jpeg';
    const new_avatar_url = generateUserAvatarUrl();

    return {
        username,
        email,
        password,
        updated_password,
        bio,
        new_avatar_url,
        default_avatar_url
    };
};

module.exports = {
    USER_DATA
};