exports.NavigationMethods = class NavigationMethods {
    constructor(page) {
        this.page = page;
    }

    async goToPage(url = '/', options = {}) {
        const url_with_params = `${url}`;

        await this.page.goto(url_with_params, options);
    }
};
