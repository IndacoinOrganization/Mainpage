import React, { Component } from 'react';
import './styles.sass';
import CustomNavLink from '../NavLink';
import { Routes } from "react-router-dom";
import Route from '../Route';
import {Trans, withTranslation} from 'react-i18next';
import Link from '@components/Link'

import TermsOfUse from '../TermsOfUse';
import AmlPolicy from '../AmlPolicy';

class Terms extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='menu'>
                    <menu>
                        <li>
                            <Link to="terms" activeClassName='active' directly={true}>
                                <Trans i18nKey="terms.menu.termsOfUse">
                                    Terms of use
                                </Trans>
                            </Link>
                        </li>
                        <li>
                            <Link to="terms/amlpolicy" activeClassName='active'>
                                <Trans i18nKey="terms.menu.amlPolicy">
                                    Aml policy
                                </Trans>
                            </Link>
                        </li>
                    </menu>
                </div>
                {/* <div className='container'>
                    <Routes>
                        <Route exact={true} path='terms' component={TermsOfUse}/>
                            <Route exact={true} path='terms/amlpolicy' component={ AmlPolicy } />  
                    </Routes>
                            
                    
                </div> */}
            </div>
        );
    }
}

export default withTranslation()(Terms);