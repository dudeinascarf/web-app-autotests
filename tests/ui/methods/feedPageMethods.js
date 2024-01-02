const { expect } = require('@playwright/test');
const { feedPage } = require('../pages/feed.page');


exports.FeedPageMethods = class FeedPageMethods {

    constructor(page) {
        this.mainTitle = page.locator(feedPage.titles.main);
        this.secondaryTitle = page.locator(feedPage.titles.secondary);
        this.articlePreview = page.locator(feedPage.containers.articlePreview);
        this.popularTagsSidebar = page.locator(feedPage.containers.popularTagsSidebar);
        this.pagination = page.locator(feedPage.containers.pagination);
        this.yourFeedButton = page.getByRole('link', { name: feedPage.buttons.yourFeed });
        this.globalFeedButton = page.getByRole('link', { name: feedPage.buttons.globalFeed });
    }

    async checkFeedTitle() {
        const title = 'conduit';
        const subTitle = 'A place to share your knowledge.';
        await expect(this.mainTitle).toHaveText(title);
        await expect(this.secondaryTitle).toHaveText(subTitle);
    }

    async checkUserLoggedIn(isLoggedIn = true) {
        await expect(this.globalFeedButton).toBeVisible();
        await expect(this.globalFeedButton).toHaveClass(/active/);

        if (!isLoggedIn) return await expect(this.yourFeedButton).not.toBeVisible();

        await expect(this.yourFeedButton).toBeVisible();
    }


};