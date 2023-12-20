// @ts-check
const { defineConfig } = require('@playwright/test');
const { HEADLESS, FRONT_URL, DEVICE, DEVICES_COUNT, PROJECT_CONFIG } = require('./utils/env.config');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 0 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: process.env.CI ? [['html', { open: 'never' }]] : 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        launchOptions: {
            headless: process.env.CI ? true : HEADLESS,
        },

        baseURL: FRONT_URL,

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry'
    },

    timeout: 10 * 60 * 1000,

    /* Configure projects for major browsers */
    projects: PROJECT_CONFIG.getProjectConfig(DEVICE, DEVICES_COUNT),

    /* Run your local dev server before starting the tests */
    webServer: process.env.CI ? undefined : {
        cwd: '../react-query-realworld',
        command: 'npm run start',
        url: FRONT_URL,
        reuseExistingServer: !process.env.CI,
    },
});

