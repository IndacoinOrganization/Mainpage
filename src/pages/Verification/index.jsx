import React, { Component } from 'react'
import VerificationBlock from '@/components/VerificationBlocki'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {withTranslation} from 'react-i18next'
import './styles.sass'
import Seo from '@tools/Seo';

class Verification extends Component {

    constructor(props) {
        super(props);

        Seo.getInstance().changeTitle(this.props.i18n.t("Indacoin Verification"));
        Seo.getInstance().changeDescription(this.props.i18n.t("Indacoin Verification"));
    }

    render() {
        return (
            <div className="verificationPage">
                    <Header /> 
                    <VerificationBlock/>
                    <Footer /> 
            </div>
        );
    }
}

export default withTranslation()(Verification);