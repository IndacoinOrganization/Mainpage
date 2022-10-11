import React from 'react';
import './styles.sass';

// -------------- Components ------------------ //
import Header from '@/components/HeaderMenu';
//import Navbar from '../../components/Navbar/index.jsx';
import MyForm from '@/components/FormSub/index.jsx';
import { Features } from '@/components/Features/index.jsx';
import { ReviewMy } from '@/components/Reviews/index.jsx';
import Footer from '@/components/Footer/index.jsx';

function Home () {
  return (
    <div className="main_wrapper">
        <div className="_container">
          <Header />
          {/* <MyForm />
          <h2> Our features</h2>
          <Features />
          <h2>User reviews</h2>
          <ReviewMy />
          <Footer /> */}
        </div>
      </div>
  )
}

export default Home;