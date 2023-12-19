const { devices } = require('@playwright/test');


const DESKTOP_DEVICES = [
    {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
    },
    {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
    },
    {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
    }
];
const MOBILE_DEVICES = [
    {
        name: 'Mobile Chrome',
        use: { ...devices['Pixel 5'] },
    },
    {
        name: 'Mobile Safari',
        use: { ...devices['iPhone 12'] },
    }
];
const TOP_DEVICES = [
    {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
    },
    {
        name: 'Mobile Chrome',
        use: { ...devices['Pixel 7'] },
    },
    {
        name: 'Mobile Safari',
        use: { ...devices['iPhone 14'] },
    }
];

module.exports = {
    DESKTOP_DEVICES,
    MOBILE_DEVICES,
    TOP_DEVICES
}