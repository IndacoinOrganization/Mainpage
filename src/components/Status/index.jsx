import React, { Component } from 'react';
import './styles.sass';
import InputMask from "react-input-mask";
import * as Loader from "react-loader-spinner";
import {Trans, withTranslation} from 'react-i18next';
import NotifyRequest from '../../tools/NotifyRequest';
import Redirect from "../../components/Redirect";

class Status extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            confirmCode: null,
            redirect: false,
            orderId: {
                value: '',
                errors: [],
            },
            phone: {
                value: '',
                errors: [],
            },
        };

        this.notifyRequest = NotifyRequest.getInstance();
        this.notifyRequest.getConfirmCodeSuccessCallback = this.successRequest.bind(this);
        this.notifyRequest.getConfirmCodeFailCallback = this.failRequest.bind(this);
    }

    /**
     * Button click
     *
     * @param event
     * @returns {null}
     */
    buttonClick (event) {
        event.preventDefault();

        if (this.state.orderId.errors.length > 0 || this.state.phone.errors.length > 0) {
            return null;
        }


        if (this.state.orderId.errors.length > 0 || this.state.phone.errors.length > 0) {
            this.setState(this.state);
            return null;
        }

        this.setState({
            isLoad: true,
        });

        this.sendRequest();
    }

    /**
     * Send request
     */
    sendRequest() {
        this.props.googleReCaptchaProps.executeRecaptcha('paymentStatus')
            .then((token) => {
                this.notifyRequest.getConfirmCode(
                    this.state.orderId.value,
                    this.state.phone.value,
                    token
                )
            }).catch((e) => {
                this.failRequest(e);
            });
    }

    /**
     * Success request handler
     *
     * @param response
     */
    successRequest(response) {
        const data = response.d;

        if (data.success) {
            this.state.isLoad = false;
            this.state.confirmCode = data.confirmCode;
            this.state.redirect = true;
            return this.setState(this.state);
        }


        this.state.isLoad = false;
        return this.setState(this.state);
    }

    /**
     * Fail request handler
     *
     * @param e
     */
    failRequest(e) {
        this.state.isLoad = false;

        this.setState(this.state);
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={'status?request_id=' + this.state.orderId.value + '&confirm_code=' + this.state.confirmCode}/>;
        }

        return (
            <div className="wrapper">
                <div className="container">
                    <div className="whiteBlock">
                        <span>
                            <Trans i18nKey="paymentStatus.title">
                                What is the status of my payment?
                            </Trans>
                        </span>
                        <hr/>
                        <form>
                            <div className="flexbox">
                                <div className={`$cont} $input}`}>
                                    <input
                                        type="text"
                                        value={this.state.orderId.value }
                                        onChange={(event) => {
                                            this.state.orderId.value = event.target.value.replace(/\D/g, '');
                                            this.state.orderId.errors = [];
                                            this.setState(this.state);
                                        }}
                                    />
                                    {
                                        this.state.orderId.errors.map((value, index) => {
                                            return <span key={index}>{value}</span>;
                                        })
                                    }
                                </div>
                                <div>
                                    <InputMask
                                        mask="9 9 9 9"
                                        onChange={(event) => {
                                            this.state.phone.value = event.target.value.replace(/\D/g, '');
                                            this.state.phone.errors = [];
                                            this.setState(this.state);
                                        }}
                                    />
                                    {
                                        this.state.phone.errors.map((value, index) => {
                                            return <span key={index}>{value}</span>;
                                        })
                                    }
                                </div>
                                <div className="cont">
                                    <button disabled={this.state.isLoad} className="blue" onClick={this.buttonClick.bind(this)}>
                                        {
                                            this.state.isLoad ?
                                                <Loader type="TailSpin" className="loader" color="#fff"/>
                                                :

                                                <Trans i18nKey="paymentStatus.button">
                                                    Find
                                                </Trans>
                                        }
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Status;
