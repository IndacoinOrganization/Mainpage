import React from 'react';

const API_LINK = "https://indacoin.io";
import axios from "axios"


/**
 * Base request class
 */
export default class {

    constructor() {
        window.axios_POST = this.post;
        this.source = null;
    }

    /**
     * Generate source
     * @returns {*}
     */
    generateSource() {
        return axios.CancelToken.source();
    }

    /**
     * Before request
     */
    beforeRequest() {
        this.source = this.generateSource();
    }

    /**
     * Cancel request
     *
     * @param message
     * @param source
     */
    cancel(source = null, message = null) {
        if (source) {
            source.cancel(message);
        } else if (this.source) {
            this.source.cancel(message);
        }
    }

    /**
     * Send POST request
     *
     * @param url
     * @param params
     * @param headers
     * @param canCancel
     * @param source
     *
     * @returns {Promise}
     */
    post(url, params = {}, headers = {}, canCancel = false, source) {

        let cancelToken = null;

        if (canCancel) {

            if (!source) {
                this.beforeRequest();
            }

            cancelToken = source ? source.token : this.source.token;
        }

        headers['x-requested-with'] = 'XMLHttpRequest';

        if (url.indexOf('https://') === 0) {
            return axios.post(url, params, {
                headers,
                cancelToken: cancelToken,
            });
        }

        return axios.post(API_LINK + url, params, {
            headers,
            cancelToken: cancelToken,
        });
    }

    /**
     * Send GET request
     *
     * @param url
     * @param params
     * @param canCancel
     * @param source
     *
     * @returns {Promise}
     */
    get(url, params = {}, canCancel = false, source = null) {
        if (canCancel) {

            if (!source) {
                this.beforeRequest();
            }

            params['cancelToken'] = source ? source.token : this.source.token;
        }

        const httpBool = /^http(s)?/.test(url);

        return axios.get(httpBool ? url : API_LINK + url, params, {
            headers: {'x-requested-with': 'XMLHttpRequest'}
        });
    }

}
