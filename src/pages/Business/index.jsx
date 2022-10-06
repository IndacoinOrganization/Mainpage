import React, {Component} from 'react';

// import Header from '@containers/Header';
// import Footer from '@containers/Footer';

import PartnershipFirstBlock from './PartnershipFirstBlock';
import PartnershipSecondBlock from './PartnershipSecondBlock';
import PartnershipThirdBlock from './PartnershipThirdBlock';
import PartnershipOpportunities from './PartnershipOpportunities';
// import PotentialPartners from '@containers/PotentialPartners';
import BestTrustOfUs from './BestTrustOfUs';
//import PartnershipForm from './PartnershipForm';
// import Seo from '@/tools/Seo';
import {withTranslation} from 'react-i18next';


// const FORM_ID = 'partnershipForm';




class Business extends Component {

    // constructor (props) {
    //     super(props);
            
    //     Seo.getInstance().changeTitle(Trans('seo.partnership.title'));
    //     Seo.getInstance().changeDescription(Trans('seo.partnership.description'));
    // }

    render () {
        return (
          <div>
            
              <main>
                  <PartnershipFirstBlock/>
                  <PartnershipSecondBlock />
                  <PartnershipThirdBlock />
                  <PartnershipOpportunities/>
                  {/* <PotentialPartners /> */}
                  <BestTrustOfUs />
                  {/* <PartnershipForm formId={FORM_ID}/> */}
              </main>
            
          </div>
        );
    }
}

export default withTranslation()(Business);
