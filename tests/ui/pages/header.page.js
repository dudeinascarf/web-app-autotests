const headerPage = {

    fields: {
        logo: 'a.navbar-brand'
    },

    buttons: {
        home: 'nav.navbar a.nav-link[href="/"]',
        signIn: 'a.nav-link[href="/login"]',
        signUp: 'a.nav-link[href="/register"]',
        newPost: 'a.nav-link[href="/editor"]',
        settings: 'a.nav-link[href="/settings"]',
        userName: (username) => `a.nav-link[href*="/profile/${username}"]`
    }

};

module.exports = {
    headerPage
};

