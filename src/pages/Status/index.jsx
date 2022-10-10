import React, { Component } from 'react';
import styles from './styles.sass';
// components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Main from '../../components/Status';

import {withTranslation} from 'react-i18next';

class Status extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <div style={{width: "90%"}}>
                       <Navbar /> 
                       <Main/>
                    </div>
                    
                </div>
                <Main />
                <Footer />
            </div>
        );
    }
}

export default withTranslation()(Status);
