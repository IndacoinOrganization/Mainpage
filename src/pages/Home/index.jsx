import React, { Component } from 'react';
import './styles.sass';
import { withTranslation, Trans } from 'react-i18next';

// Components 
import Header from '@/components/Header';
import { Features } from '@/components/Features/index.jsx';
import { ReviewMy } from '@/components/Reviews/index.jsx';
import Footer from '@/components/Footer/index.jsx';
import Seo from '@tools/Seo';

class Home extends Component {

  constructor(props) {
    super(props);

    Seo.getInstance().changeTitle(this.props.i18n.t("Indacoin: Exchange & Buy Cryptocurrency With Card"));
    Seo.getInstance().changeDescription(this.props.i18n.t("Buy and exchange any cryptocurrency instantly: Bitcoin, Ethereum, Litecoin, Ripple and 30 other digital currencies for EUR or USD"));
  }

  render() {
    return (
      <div className='wrapper_home'>
        <div className="home">
          <Header />
          <div className="home_main">
            <h1><Trans i18nKey="home.maintitle">Buy your first crypto — it’s easy</Trans></h1>
            <span><Trans i18nKey="home.subtitle">Verified by 10M+ purchases per month</Trans></span>
            <a href="https://gw.indacoin.io/" target="_blank"><Trans i18nKey="home.buyButton">Buy crypto</Trans></a>
          </div>
          <h2><Trans i18nKey="home.features.title">Our features</Trans></h2>
          <Features />
          <h2><Trans i18nKey="home.reviews.title">User reviews</Trans></h2>
          <ReviewMy />
          <Footer />
        </div>
      </div>
    );
  };
};

export default withTranslation()(Home);