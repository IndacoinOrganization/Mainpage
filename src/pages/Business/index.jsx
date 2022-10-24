import React, {Component} from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

import PartnershipFirstBlock from './PartnershipFirstBlock';
import PartnershipSecondBlock from './PartnershipSecondBlock';
import PartnershipThirdBlock from './PartnershipThirdBlock';
import PartnershipOpportunities from './PartnershipOpportunities';
import PotentialPartners from './PotentialPartners';
import BestTrustOfUs from './BestTrustOfUs';
import PartnershipForm from './PartnershipForm';
import Seo from '@tools/Seo';
import {withTranslation} from 'react-i18next';

const FORM_ID = 'partnershipForm';

class Partnership extends Component {

    constructor (props) {
        super(props);
            
        Seo.getInstance().changeTitle(this.props.i18n.t("Business Partnership"));
        Seo.getInstance().changeDescription(this.props.i18n.t("Indacoin Affiliate Program allows you to earn up to 3% of each purchase with a credit/debit card. Remuneration will be sent to your Indacoin bitcoin wallet"));
    }

    render () {
        return (
          <div>
              <Header />
              <main>
                  <PartnershipFirstBlock formId={FORM_ID}/>
                  <PartnershipSecondBlock />
                  <PartnershipThirdBlock />
                  <PartnershipOpportunities formId={FORM_ID}/>
                  <PotentialPartners />
                  <BestTrustOfUs />
                  <PartnershipForm formId={FORM_ID}/>
              </main>
              <Footer />
          </div>
        );
    };
};

export default withTranslation()(Partnership);
