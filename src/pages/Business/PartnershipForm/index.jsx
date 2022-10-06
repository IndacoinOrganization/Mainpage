import React, {Component} from 'react';
import './styles.sass';
import PartnershipForm from '@components/PartnershipForm';
import {Trans} from "react-i18next";

export default class extends Component {
    render() {
        return (
            <section className="wrapper" id={this.props.formId || ''}>
                <span className="title">
                    <Trans i18nKey="partnership.form.title">
                        Allow your customers to buy crypto with bank card
                    </Trans>
                </span>

                <div className="formContainer">
                    <PartnershipForm />
                </div>
            </section>
        );
    }
}
