const { expect } = require('@playwright/test');

class BaseMethods {
    constructor(page) {
        this.page = page;
    }

    async expectElementActiveClass(element, exists = true) {
        if (!exists) return await expect(element).not.toHaveClass(/active/);
        await expect(element).toHaveClass(/active/);
    }

}

module.exports = BaseMethods;