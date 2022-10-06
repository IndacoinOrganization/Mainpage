import React from 'react';
import './styles.sass';

// -------------- Components ------------------ //
import Navbar from '../../components/Navbar/index.jsx';
import MyForm from '../../components/FormSub/index.jsx';
import { Features } from '../../components/Features/index.jsx';
import { ReviewMy } from '../../components/Reviews/index.jsx';
import Footer from '../../components/Footer/index.jsx';

function Home () {
  return (
    <div className="wrapperVer2">
        <div className="_container">
          <Navbar />
          <MyForm />
          <h2> Our features</h2>
          <Features />
          <h2>User reviews</h2>
          <ReviewMy />
          <Footer />
          {/* <MyForm />
          <h2><Trans i18nKey="header.menu.features"> Our features </Trans></h2>
          <Features />
          <h2><Trans i18nKey="header.menu.reviews">User reviews </Trans></h2>
          <ReviewMy />
          <Footer /> */}
        </div>
      </div>
  )
}

export default Home;