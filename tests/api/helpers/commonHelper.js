const { expect } = require('@playwright/test');
const { API_URL } = require('../../../utils/env.config');


const parse_json = (data) => {
    try {
        return JSON.parse(data);
    } catch (e) {
        throw new Error(`Response is not a valid JSON: ${data}`);
    }
};

const make_request = async (method, request, endpoint, statusCode, payload, authToken) => {
    const requestOptions = { headers: {} };

    if (payload) requestOptions.data = payload;
    if (authToken) requestOptions.headers.Authorization = `Token ${authToken}`;

    return await request[method](`${API_URL}/${endpoint}`, requestOptions).then((response) => {
        expect(response.status()).toBe(statusCode);

        return response.text();
    }).then(parse_json).catch((error) => {
        throw new Error(`Error: ${error}`);
    });
};

const create_request = (method, endpoint) => {
    return async (request, options) => {
        const authToken = options.authToken || '';
        const payload = options.payload || null;
        const statusCode = options.statusCode || 200;

        return await make_request(method, request, endpoint, statusCode, payload, authToken);
    };
};


module.exports = {
    create_request
};