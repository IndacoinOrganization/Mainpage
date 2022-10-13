import React from 'react';
import './styles.sass';

// -------------- Components ------------------ //
import { Trans } from 'react-i18next';
import Header from '@/components/Header';
//import Navbar from '../../components/Navbar/index.jsx';
import { Features } from '@/components/Features/index.jsx';
import { ReviewMy } from '@/components/Reviews/index.jsx';
import Footer from '@/components/Footer/index.jsx';

function Home () {
  return (
    <div className="home">
      <Header />
      <div className="home_main">
        <h1><Trans i18nKey="header.menu.titleMain">Buy your first crypto — it’s easy</Trans></h1>
        <span><Trans i18nKey="header.menu.titleMainUndo">Verified by 10M+ purchases per month</Trans></span>
        <a href="https://gw.indacoin.io/" target="_blank"><Trans i18nKey="header.menu.button">Buy crypto</Trans></a>
      </div>
      <h2>Our features</h2>
      <Features />
      <h2>User reviews</h2>
      <ReviewMy />
      <Footer />
    </div>
  )
}

export default Home;