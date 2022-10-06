import React, { Component } from 'react';
//import Header from '@containers/Header';
// containers
import VerificationBlock from './Verification';

// import Seo from '@/tools/Seo';
import {withTranslation} from 'react-i18next';
import styles from "./styles.sass"

class Verification extends Component {

    // constructor (props) {
    //     super(props);

    //     Seo.getInstance().changeTitle(this.props.i18n.t('seo.tokens.title'));
    //     Seo.getInstance().changeDescription(this.props.i18n.t('seo.tokens.description'));
    // }


    render() {
        return (
            <div className={styles.verificationPage}>
                {/* <Header transparent/> */}
                <VerificationBlock />
                <div>
                    <p className={styles.footerText}>
                        Indacoin Limited, Suite 4b, 43 Berkeley Square, Mayfair, London, Westminster, United Kingdom, W1J 5FJ Company Number 08924450
                    </p>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Verification);