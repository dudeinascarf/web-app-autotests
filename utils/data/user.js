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
    const avatar_url = generateUserAvatarUrl();

    return {
        username,
        email,
        password,
        updated_password,
        bio,
        avatar_url
    };
};

module.exports = {
    USER_DATA
};