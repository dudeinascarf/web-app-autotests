class BaseMethods {
    constructor(page) {
        this.page = page;
    }

    async expectElementActiveClass(expect, element, exists = true) {
        if (!exists) return await expect(element).not.toHaveClass(/active/);
        await expect(element).toHaveClass(/active/);
    }

}

module.exports = BaseMethods;