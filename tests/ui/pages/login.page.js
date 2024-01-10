const loginPage = {

    title: 'Sign in',

    fields: {
        errorMessage: 'ul.error-messages li'
    },

    inputs: {
        email: 'input[name="email"]',
        password: 'input[name="password"]'
    },

    buttons: {
        signIp: 'button[type="submit"]',
        notRegistered: 'Not registered?'
    }
};

module.exports = {
    loginPage
};

