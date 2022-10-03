import React from 'react';
import './styles.sass';
// import { withTranslation, Trans } from 'react-i18next';

// -------------- Components ------------------ //
import Navbar from '@/components/Navbar';
// import MyForm from './components/FormSub/Formsub.js';
// import { Features } from './components/Features/Features';
// import { ReviewMy } from './components/Reviews/Review.js';
// import Footer from './components/Footer/Footer.js';

function MainVer () {
  return (
    <div className="wrapper">
      <div className="_container">
        <Navbar />
        
      
        {/* <MyForm /> */}
        {/* <h2> <Trans i18nKey="header.menu.features"> Our features </Trans> </h2> */}
        {/* <Features /> */}
        {/* <h2><Trans i18nKey="header.menu.reviews"> User reviews </Trans> </h2> */}
        {/* <ReviewMy />
        <Footer /> */}
      </div>
    </div>
  )
}

export default MainVer;