const randomizer = require('@faker-js/faker');


function generateValueWithMask(mask, prefix = '') {
    const numDigits = mask.split('').filter(c => c === '#').length;
    const value = randomizer.faker.string.numeric({ length: numDigits, allowLeadingZeros: false });

    const maskArray = mask.split('');
    let valueIndex = 0;
    for (let i = 0; i < maskArray.length; i++) {
        if (maskArray[i] === '#') {
            maskArray[i] = value[valueIndex];
            valueIndex++;
        }
    }

    return prefix + maskArray.join('');
}

function generateUsername() {
    return randomizer.faker.internet.userName();
}

function generateUserBio() {
    return randomizer.faker.person.bio();
}

function generateUserAvatarUrl() {
    return randomizer.faker.image.avatar();
}


module.exports = {
    generateValueWithMask,
    generateUsername,
    generateUserBio,
    generateUserAvatarUrl
};