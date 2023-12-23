const { expect } = require('@playwright/test');
const { API_URL } = require('../../../utils/env.config');


const parse_json = (data) => {
    try {
        return JSON.parse(data);
    } catch (e) {
        throw new Error(`Response is not a valid JSON: ${data}`);
    }
};

const make_request = async (method, request, endpoint, statusCode, payload) => {
    return await request[method](`${API_URL}/${endpoint}`, {
        data: payload
    }).then((response) => {
        expect(response.status()).toBe(statusCode);

        return response.text();
    }).then(parse_json).catch((error) => {
        throw new Error(`Error: ${error}`);
    });
};

const GET_request = (request, endpoint, statusCode) => {
    return make_request('get', request, endpoint, statusCode);
};
const POST_request = (request, endpoint, payload, statusCode) => {
    return make_request('post', request, endpoint, statusCode, payload);
};
const PUT_request = (request, endpoint, payload, statusCode) => {
    return make_request('put', request, endpoint, statusCode, payload);
};


module.exports = {
    GET_request,
    POST_request,
    PUT_request
};