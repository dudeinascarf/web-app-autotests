const { expect } = require('@playwright/test');
const { feedPage } = require('../pages/feed.page');


exports.FeedPageMethods = class FeedPageMethods {

    constructor(page) {
        this.page = page;
        this.mainTitle = page.locator(feedPage.fields.mainTitle);
        this.secondaryTitle = page.locator(feedPage.fields.secondaryTitle);
        this.noArticlesTitle = page.locator(feedPage.fields.noArticlesTitle);
        this.articlePreview = page.locator(feedPage.containers.articlePreview);
        this.popularTagsSidebar = page.locator(feedPage.containers.popularTagsSidebar);
        this.pagination = page.locator(feedPage.containers.pagination);
        this.yourFeedButton = page.locator(feedPage.buttons.yourFeed);
        this.globalFeedButton = page.locator(feedPage.buttons.globalFeed);
    }

};