import React, {Component} from 'react';
import './styles.sass';
import {Trans, withTranslation} from 'react-i18next';
import SendForm from '@requests/PartnershipRequest.js';

import { ToastContainer, toast } from 'react-toastify';
// import Loader from "react-loader-spinner";

const PROJECT_TYPES = [
    'ICO',
    'IEO',
    'Startup',
    'Corporation',
    'Personal',
    'Other',
];

class PartnershipForm extends Component {

    constructor (props) {
        super(props);

        this.state = {
            showTypes: false,
            currentType: '',
            isLoad: false
        };

        this._SendForm = SendForm.getInstance();
        this._SendForm.sendSuccessCallback = this.successCallback.bind(this);
    }

    /**
     * Toggle project type block
     *
     * @param {object} event
     */
    toggleProjectType (event) {
        event.preventDefault();

        this.setState({
            showTypes: !this.state.showTypes
        });
    }

    /**
     * Change current type
     *
     * @param {object} event
     * @param {string} type
     */
    changeProjectType(event, type) {
        event.preventDefault();

        this.setState({
            currentType: type,
            showTypes: false
        }, () => {
            let input = document.querySelector(`form input[data-key="project"]`);
            let span = document.querySelector(`form span[data-key="project"]`);
            span.classList[input.value ? 'remove' : 'add']('active');
        });
    }

    onSubmit(target) {
        let form = () => {
            let formObject = Object.assign(...[...target.querySelectorAll('input'),...target.querySelectorAll('textarea')].map(tag => new Object({[tag.dataset.key]:tag.value})));
            return {
                formObject: formObject,
                isValid: {
                    name: formObject.name.match(/[A-Z][a-z]+/g) ? true : false,
                    email: formObject.email.match(/.+@.+\..+/i),
                    phone: formObject.phone.match(/(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/),
                    project: formObject.project ? true : false
                }
            }
        }
        let
            formObject = form().formObject,
            isValid = form().isValid;

        if(!Object.values(isValid).some(bool => bool === false)) {
            this.setState({isLoad: true});
            this._SendForm.send(formObject);
        } else {
            for(let key in isValid) {
                if(!isValid[key]) {
                    let input = document.querySelector(`form input[data-key="${key}"]`);
                    let span = document.querySelector(`form span[data-key="${key}"]`);

                    input.oninput = () => {
                        span.classList[form().isValid[input.dataset.key] ? 'remove' : 'add']('active');
                    }

                    span.classList.add('active');
                }
            }
        }
    }

    /**
     * response from server
     *
     * @param res
     */
    successCallback(res) {
        setTimeout(() => {
            this.setState({isLoad: false});
        }, 1000);

        document.querySelectorAll('form input').forEach(item => item.value = null);
        document.querySelectorAll(`form .inputContainer span`).forEach(item => item.classList.remove('active'));

        if(res.d >= 0) {
            toast.success('Your message send!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        } else {
            toast.error('Your letter has not been sent. Please contact customer service.', {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
    }

    render () {
        return (
            <div className={'PartnershipForm'}>
                <ToastContainer />

                <span className={'title_form'}>
                    <Trans i18nKey="partnership.form.formTitle">
                        Please fill out the form below and our representative will get back to you within 24 hours
                    </Trans>
                </span>

                <form className={'form'} onSubmit={ e => {e.preventDefault(); this.onSubmit(e.target);} }>
                    <div className={'inputGroup' + ' clearfix'}>
                        <div className={'inputContainer'}>
                            <input data-key="name" type="text" placeholder={<Trans i18nKey="partnership.form.name" />}/>
                            <span data-key="name" className={'error'}>Your Name</span>
                        </div>

                        <div className={'inputContainer'}>
                            <input data-key="email" type="text" placeholder={<Trans i18nKey="partnership.form.email" />}/>
                            <span data-key="email" className={'error'}>your@e.mail</span>
                        </div>

                    </div>

                    <div className={'inputGroup' + ' clearfix'}>
                        <div className={'inputContainer'}>
                            <input data-key="phone" type="text" placeholder={<Trans i18nKey="partnership.form.phone" />}/>
                            <span data-key="phone" className={'error'}>+1 (202) 202-2020</span>
                        </div>

                        <div className={'inputContainer'}>
                            <input data-key="website" type="text" placeholder={<Trans i18nKey="partnership.form.website" />}/>
                        </div>

                        <div className={'inputContainer' + ' ' + 'inputDownContainer'}>
                            <div className={'inputDown'}>
                                <input
                                    data-key="project"
                                    type="text"
                                    placeholder={<Trans i18nKey="partnership.form.type" />}
                                    onClick={this.toggleProjectType.bind(this)}
                                    onKeyPress={(event) => {event.preventDefault()}}
                                    onChange={(event) => {event.preventDefault()}}
                                    value={this.state.currentType}
                                />
                                <button onClick={this.toggleProjectType.bind(this)}>
                                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 9L0.73686 0.75L10.2631 0.750001L5.5 9Z" fill="#3463F8"/>
                                    </svg>
                                </button>
                                <span data-key="project" className={'error'}>your project</span>
                            </div>

                            <div className={'types' + ' ' + (this.state.showTypes ? 'show' : '')}>
                                {
                                    PROJECT_TYPES.map((element, index) => {
                                        return (
                                            <button
                                                onClick={(event) => {
                                                    this.changeProjectType(event, element);
                                                }}
                                                key={index}
                                            >
                                                {element}
                                            </button>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className={'inputGroup'}>
                        <textarea data-key="message" rows="5" placeholder={<Trans i18nKey="partnership.form.textarea" />} />
                    </div>

                    <div className={'inputGroup' +  ' ' + 'btnContainer'}>
                        <button id="BusinessFormSubmit" type="submit">
                            <Trans i18nKey="partnership.form.btn">Send</Trans>
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}

export default withTranslation()(PartnershipForm);