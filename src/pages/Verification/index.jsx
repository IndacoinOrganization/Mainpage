import React, { Component } from 'react';

// containers
import VerificationBlock from '../../components/Verification';
import Navbar from '../../components/Navbar';

// import Seo from '@tools/Seo';
import {withTranslation} from 'react-i18next';
import styles from "./styles.sass"

class Verification extends Component {

    constructor (props) {
        super(props);

    }

    render() {
        return (
            <div className="verificationPage">
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <div style={{width: "90%"}}>
                       <Navbar /> 
                    </div>
                    
                </div>
                
                <VerificationBlock/>
                {/* <Header transparent/>
                <VerificationBlock />
                <div>
                    <p className={styles.footerText}>
                        Indacoin Limited, Suite 4b, 43 Berkeley Square, Mayfair, London, Westminster, United Kingdom, W1J 5FJ Company Number 08924450
                    </p>
                </div> */}
                <div>
                    <p className="footerText">
                        Indacoin Limited, Suite 4b, 43 Berkeley Square, Mayfair, London, Westminster, United Kingdom, W1J 5FJ Company Number 08924450
                    </p>

                </div>
            </div>
        );
    }
}

export default withTranslation()(Verification);