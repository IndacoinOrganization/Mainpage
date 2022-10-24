import React, { Component } from 'react'
import VerificationBlock from '@/components/Verification'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {withTranslation} from 'react-i18next'
import './styles.sass'

class Verification extends Component {

    constructor (props) {
        super(props);

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