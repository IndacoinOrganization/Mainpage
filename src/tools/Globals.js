import React, {Component} from 'react';


let Instance  = null;

export default class extends Component {

    /**
     * For single ton
     *
     * @return this
     */
    static getInstance() {

        if (Instance == null) {
            Instance = new this;
        }

        return Instance;
    }

    constructor (props) {
        super(props);

        this._countryCode = null;
        this._countryCurrency = null;
        this._countryCurrencyCallback = null;
        this._languageUrlWasChanged = null;
        this._auth = null;
    }

    /**
     * Set country code
     *
     * @param {string} code
     */
    set countryCode (code) {
        this._countryCode = code;
    }

    /**
     * Get country code
     * @returns {null|string}
     */
    get countryCode () {
        return this._countryCode;
    }

    /**
     * Set country currency
     *
     * @param {string} code
     */
    set countryCurrency (code) {
        this._countryCurrency = code;
        if (this._countryCurrencyCallback !== null) {
            this._countryCurrencyCallback(code);
        }
    }

    /**
     * Get country currency
     * @returns {null|string}
     */
    get countryCurrency () {
        return this._countryCurrency;
    }

    /**
     * Set country currency callback
     *
     * @param {string} callback
     */
    set countryCurrencyCallback (callback) {
        if (typeof callback === 'function') {
            this._countryCurrencyCallback = callback;
        }
    }

    /**
     * Get country currency callback
     *
     * @returns {null|string}
     */
    get countryCurrencyCallback () {
        return this._countryCurrencyCallback;
    }

    /**
     * Set language url was changed
     *
     * @param {boolean} wasChanged
     */
    set languageUrlWasChanged (wasChanged) {
        this._languageUrlWasChanged = wasChanged;
    }

    /**
     * Get language url was changed
     * @returns {null|boolean}
     */
    get languageUrlWasChanged  () {
        return this._languageUrlWasChanged;
    }


    /**
     * Set auth
     * @param auth
     */
    set auth (auth) {
        this._auth = auth;
    }

    /**
     * Get auth
     * @return {Auth}
     */
    get auth () {
        return this._auth;
    }
}
