import React, {Component} from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

import Seo from '@tools/Seo';
import {withTranslation} from 'react-i18next';
import AmlPolicy from "../../components/AmlPolicy"
import Link from '@components/Link'
import {Trans} from 'react-i18next';


class AmlPolicyBlock extends Component {

    constructor (props) {
        super(props);
            
        Seo.getInstance().changeTitle(this.props.i18n.t("Business Partnership"));
        Seo.getInstance().changeDescription(this.props.i18n.t("Indacoin Affiliate Program allows you to earn up to 3% of each purchase with a credit/debit card. Remuneration will be sent to your Indacoin bitcoin wallet"));
    }

    render () {
        return (
          <div>
              <Header />
              <div className='wrapperMenu'>
                <div className='menu'>
                    <menu>
                        <li>
                            <Link to="terms" activeClassName='active' directly={true}>
                                <Trans i18nKey="terms.menu.termsOfUse">
                                    Terms of use
                                </Trans>
                            </Link>
                        </li>
                        <li className='withBefore'>
                            <Link to="terms/amlpolicy" activeClassName='active'>
                                <Trans i18nKey="terms.menu.amlPolicy">
                                    Aml policy
                                </Trans>
                            </Link>
                        </li>
                    </menu>
                </div>
              </div>
              <AmlPolicy />
              <Footer />
          </div>
        );
    };
};

export default withTranslation()(AmlPolicyBlock);
