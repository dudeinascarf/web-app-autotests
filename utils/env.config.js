const result = process.env.CI === undefined ? require('dotenv').config() : { parsed: process.env };
const config = require('config');
const { DESKTOP_DEVICES, MOBILE_DEVICES, TOP_DEVICES } = require('../utils/data/devicesTypes');


if (process.env.NODE_ENV === 'undefined' || process.env.NODE_ENV === '') {
    process.env.NODE_CONFIG_ENV = process.env.npm_config_env;
    if (process.env.NODE_CONFIG_ENV === 'undefined' || process.env.NODE_CONFIG_ENV === '')
        throw new Error('The NODE_ENV environment variable is required but was not specified. Please set up .env file');
}

if (result.error) throw result.error;

const FRONT_CONFIG = config.get('front');
const BACK_CONFIG = config.get('back');
const ENV = process.env.NODE_ENV || process.env.NODE_CONFIG_ENV;
const HEADLESS = process.env.HEADLESS === 'true';
const DEVICE = process.env.DEVICE || process.env.npm_config_device || 'DESKTOP';

const FRONT_URL = FRONT_CONFIG.url
const BACK_URL = BACK_CONFIG.url;
const API_URL = `${BACK_URL}/api`

console.log(`FRONT_URL: ${FRONT_URL}`);
console.log(`BACK_URL: ${BACK_URL}`);
console.log(`ENV: ${ENV}`);
console.log(`HEADLESS: ${HEADLESS}`);

const PROJECT_CONFIG = {
    getProjectConfig: function (deviceType) {
        let platforms;

        console.log(`DEVICE: ${deviceType}`);
        switch (deviceType) {
            case 'DESKTOP':
                platforms = DESKTOP_DEVICES;
                break;
            case 'MOBILE':
                platforms = MOBILE_DEVICES
                break;
            case 'TOP':
                platforms = TOP_DEVICES
                break;
            default:
                return [];
        }

        return platforms;
    }
};


module.exports = {
    ENV,
    HEADLESS,
    DEVICE,
    FRONT_URL,
    BACK_URL,
    API_URL,
    PROJECT_CONFIG
};