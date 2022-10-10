import React from 'react';
import BaseRequest from './BaseRequest';

let Instance = null;

/**
 * Class for auth requests
 */
export default class extends BaseRequest {

    /**
     * For single ton
     */
    static getInstance() {

        if (Instance == null) {
            Instance = new this;
        }

        return Instance;
    }

    /**
     * Constructor
     */
    constructor() {
        super();

        // getData success callback
        this._getDataSuccessCallback = [];

        // getData fail callback
        this._getDataFailCallback = [];

        // changePhone success callback
        this._changePhoneSuccessCallback = null;

        // changePhone fail callback
        this._changePhoneFailCallback = null;

        // checkPhone success callback
        this._checkPhoneSuccessCallback = null;

        // changePhone fail callback
        this._checkPhoneFailCallback = null;

        // uploadVideo success callback
        this._uploadVideoSuccessCallback = null;

        // uploadVideo fail callback
        this._uploadVideoFailCallback = null;

        // getConfirmCode success callback
        this._getConfirmCodeSuccessCallback = null;

        // getConfirmCode fail callback
        this._getConfirmCodeFailCallback = null;
    }

    /**
     * Set getData success callback
     *
     * @param {Function} callback
     */
    set getDataSuccessCallback(callback) {
        if (typeof callback === 'function') {
            this._getDataSuccessCallback.push(callback);
        }
    }

    /**
     * Get getData success callback
     *
     * @returns {null|Function}
     */
    get getDataSuccessCallback() {
        return this._getDataSuccessCallback;
    }

    /**
     * Set getData fail callback
     *
     * @param {Function} callback
     */
    set getDataFailCallback(callback) {
        if (typeof callback === 'function') {
            this._getDataFailCallback.push(callback);
        }
    }

    /**
     * Get getData fail callback
     *
     * @returns {null|Function}
     */
    get getDataFailCallback() {
        return this._getDataFailCallback;
    }

    /**
     * Get data
     *
     * @param confirmCode
     * @param requestId
     */
    getData (confirmCode, requestId) {
        this.post('/Notify/getData', {
            confirmCode: confirmCode,
            requestId: requestId,
        }).then((response) => {

            const addInfo = {
                confirmCode: confirmCode,
                requestId: requestId,
            };

            if (typeof response['data'] !== 'undefined' && this.getDataSuccessCallback != null) {
                if (Array.isArray(this.getDataSuccessCallback)) {
                    for (let i = 0; i < this.getDataSuccessCallback.length; i++) {
                        this.getDataSuccessCallback[i]({...JSON.parse(response['data']['d']), ...addInfo});
                    }

                    return;
                } else {
                    return this.getDataSuccessCallback({...JSON.parse(response['data']['d']), ...addInfo});
                }
            }

            if (this.getDataFailCallback != null) {
                if (Array.isArray(this.getDataFailCallback)) {
                    for (let i = 0; i < this.getDataFailCallback.length; i++) {
                        this.getDataFailCallback[i](response);
                    }
                } else {
                    return this.getDataFailCallback(response);
                }
            }

        }).catch((e) => {

            if (this.getDataFailCallback != null) {
                if (Array.isArray(this.getDataFailCallback)) {
                    for (let i = 0; i < this.getDataFailCallback.length; i++) {
                        this.getDataFailCallback[i](e);
                    }
                } else {
                    return this.getDataFailCallback(e);
                }
            }

        });
    }

    /**
     * Set changePhone success callback
     *
     * @param {Function} callback
     */
    set changePhoneSuccessCallback(callback) {
        if (typeof callback === 'function') {
            this._changePhoneSuccessCallback = callback;
        }
    }

    /**
     * Get changePhone success callback
     *
     * @returns {null|Function}
     */
    get changePhoneSuccessCallback() {
        return this._changePhoneSuccessCallback;
    }

    /**
     * Set changePhone fail callback
     *
     * @param {Function} callback
     */
    set changePhoneFailCallback(callback) {
        if (typeof callback === 'function') {
            this._changePhoneFailCallback = callback;
        }
    }

    /**
     * Get changePhone fail callback
     *
     * @returns {null|Function}
     */
    get changePhoneFailCallback() {
        return this._changePhoneFailCallback;
    }

    /**
     * Change phone number for request
     *
     * @param requestId
     * @param confirmationHash
     * @param newPhone
     */
    changePhone (requestId, confirmationHash, newPhone) {
        this.post('/notify/ChangePhoneNumberForRequest', {
            request_id: requestId,
            confirmation_hash: confirmationHash,
            new_phone: newPhone,
        }).then((response) => {

            if (typeof response['data'] !== 'undefined' && this.changePhoneSuccessCallback != null) {
                return this.changePhoneSuccessCallback(response['data']);
            }

            if (this.changePhoneFailCallback != null) {
                return this.changePhoneFailCallback(response);
            }

        }).catch((e) => {

            if (this.changePhoneFailCallback != null) {
                return this.changePhoneFailCallback(e);
            }

        });
    }

    /**
     * Set checkPhone success callback
     *
     * @param {Function} callback
     */
    set checkPhoneSuccessCallback(callback) {
        if (typeof callback === 'function') {
            this._checkPhoneSuccessCallback = callback;
        }
    }

    /**
     * Get checkPhone success callback
     *
     * @returns {null|Function}
     */
    get checkPhoneSuccessCallback() {
        return this._checkPhoneSuccessCallback;
    }

    /**
     * Set checkPhone fail callback
     *
     * @param {Function} callback
     */
    set checkPhoneFailCallback(callback) {
        if (typeof callback === 'function') {
            this._checkPhoneFailCallback = callback;
        }
    }

    /**
     * Get checkPhone fail callback
     *
     * @returns {null|Function}
     */
    get checkPhoneFailCallback() {
        return this._checkPhoneFailCallback;
    }


    /**
     * Check phone
     * @param requestId
     * @param confirmationHash
     * @param phoneId
     * @param authCode
     */
    checkPhone (requestId, confirmationHash, phoneId, authCode) {
        this.post('/notify/CheckPhoneAuthCode', {
            request_id: requestId,
            confirmation_hash: confirmationHash,
            phoneId: phoneId,
            authCode: authCode,
        }).then((response) => {

            if (typeof response['data'] !== 'undefined' && this.checkPhoneSuccessCallback != null) {
                return this.checkPhoneSuccessCallback(response['data']);
            }

            if (this.checkPhoneFailCallback != null) {
                return this.checkPhoneFailCallback(response);
            }

        }).catch((e) => {

            if (this.checkPhoneFailCallback != null) {
                return this.checkPhoneFailCallback(e);
            }

        });
    }

    /**
     * Set uploadVideo success callback
     *
     * @param {Function} callback
     */
    set uploadVideoSuccessCallback(callback) {
        if (typeof callback === 'function') {
            this._uploadVideoSuccessCallback = callback;
        }
    }

    /**
     * Get uploadVideo success callback
     *
     * @returns {null|Function}
     */
    get uploadVideoSuccessCallback() {
        return this._uploadVideoSuccessCallback;
    }

    /**
     * Set uploadVideo fail callback
     *
     * @param {Function} callback
     */
    set uploadVideoFailCallback(callback) {
        if (typeof callback === 'function') {
            this._uploadVideoFailCallback = callback;
        }
    }

    /**
     * Get uploadVideo fail callback
     *
     * @returns {null|Function}
     */
    get uploadVideoFailCallback() {
        return this._uploadVideoFailCallback;
    }

    /**
     * Upload video
     *
     * @param data
     */
    uploadVideo(data) {
        this.post('/AddVerificationVideo.ashx', data, {'Content-Type': 'multipart/form-data'}).then((response) => {

            if (typeof response['data'] !== 'undefined' && this.uploadVideoSuccessCallback != null) {
                return this.uploadVideoSuccessCallback(response['data']);
            }

            if (this.uploadVideoFailCallback != null) {
                return this.uploadVideoFailCallback(response);
            }

        }).catch((e) => {

            if (this.uploadVideoFailCallback != null) {
                return this.uploadVideoFailCallback(e);
            }

        });
    }

    /**
     * Set getConfirmCode success callback
     *
     * @param {Function} callback
     */
    set getConfirmCodeSuccessCallback(callback) {
        if (typeof callback === 'function') {
            this._getConfirmCodeSuccessCallback = callback;
        }
    }

    /**
     * Get getConfirmCode success callback
     *
     * @returns {null|Function}
     */
    get getConfirmCodeSuccessCallback() {
        return this._getConfirmCodeSuccessCallback;
    }

    /**
     * Set getConfirmCode fail callback
     *
     * @param {Function} callback
     */
    set getConfirmCodeFailCallback(callback) {
        if (typeof callback === 'function') {
            this._getConfirmCodeFailCallback = callback;
        }
    }

    /**
     * Get getConfirmCode fail callback
     *
     * @returns {null|Function}
     */
    get getConfirmCodeFailCallback() {
        return this._getConfirmCodeFailCallback;
    }

    getConfirmCode (requestId, phone, captcha) {
        this.post('/notify/GetConfirmCode', {
            requestId: requestId,
            phone: phone,
            captcha: captcha,
        }).then((response) => {

            if (typeof response['data'] !== 'undefined' && this.getConfirmCodeSuccessCallback != null) {
                return this.getConfirmCodeSuccessCallback(response['data']);
            }

            if (this.getConfirmCodeFailCallback != null) {
                return this.getConfirmCodeFailCallback(response);
            }

        }).catch((e) => {

            if (this.getConfirmCodeFailCallback != null) {
                return this.getConfirmCodeFailCallback(e);
            }

        });
    }


}
