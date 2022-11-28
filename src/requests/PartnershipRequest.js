import BaseRequest from './BaseRequest';

let Instance = null;

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
     *
     * constructor
     */
    constructor() {
        super();

        // login success callback
        this._sendSuccessCallback = null;

        // login fail callback
        this._sendFailCallback = null;
    }

    /**
     *
     * SET Response status == 200
     * @param callback
     */
    set sendSuccessCallback(callback) {
        if (typeof callback === 'function') {
            this._sendSuccessCallback = callback;
        }
    }

    /**
     *
     * GET Response status == 200
     * @returns {null|*}
     */
    get sendSuccessCallback() {
        return this._sendSuccessCallback;
    }

    /**
     *
     * SET Responce status != 200
     * @param callback
     */
    set sendFailCallback(callback) {
        if (typeof callback === 'function') {
            this._sendFailCallback = callback;
        }
    }

    /**
     *
     * GET Response status != 200
     * @returns {null|*}
     */
    get sendFailCallback() {
        return this._sendFailCallback;
    }

    /**
     *
     * Method POST send form
     * @param data
     * @param _function
     */
    send(data, _function = null) {
        this.post('/Partners/AddNewPotentialPartner',  {
            name: data.name,
            phone: data.phone,
            email: data.email,
            message: data.message,
            project: data.project,
            website: data.website,
        }).then(response => {
            if(typeof response['data'] !== 'undefined' && this.sendSuccessCallback != null) {
                return this.sendSuccessCallback(response);
            }

            if(this.sendFailCallback != null) {
                return this.sendFailCallback(response);
            }
        }).catch(e => {
            if(this.loginFailCallback != null) {
                return this.sendFailCallback(e);
            }
        });
    }
}
