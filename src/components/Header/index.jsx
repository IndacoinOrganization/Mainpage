import React, { useState } from 'react'
import './styles.sass'
import Link from '@components/Link'
import Languages from '@components/Languages'
import { withTranslation, Trans } from 'react-i18next';

// // import settings from '@config/settings.json';
// import ContentLoader from "react-content-loader";
// // import {changeUrl, pathname} from '@root/i18n';
// import MenuDropdown from "../MenuDropdown/index.jsx";

import burger from "@images/burger.svg"
// import close from "@images/close.svg"
// import dropDown from "@images/dropDown.svg"
import Indacoin from "@images/INDACOIN.svg"


function Header(props) {
    const [mobile, setMobile] = useState(false)

    return (
        <header>
            <a style={{textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center"}} href='./'>
                <img src={Indacoin} className="logo" alt='INDACOIN' width={160}/>
                <p style={{color: "#545454", padding: "5px 0px"}}>believe in crypto since <span style={{color: "#3463F8"}}>2014</span></p>
            </a>
            <div className='burger-Box' onClick={() => setMobile(!mobile)}>
                <div className='burger'>
                    <img src={burger} className="burger" alt='INDACOIN' />
                </div>
            </div>
            <div className={`navigateBox ${mobile ? 'mobile' : ''}`}>
                {mobile ?
                    <svg className='close' onClick={() => setMobile(!mobile)} xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M11.1803 9.50081L18.6519 2.02929C19.116 1.56549 19.116 0.812956 18.6519 0.349155C18.1877 -0.115042 17.4359 -0.115042 16.9717 0.349155L9.5002 7.82067L2.02829 0.349155C1.56409 -0.115042 0.812345 -0.115042 0.348148 0.349155C-0.116049 0.812956 -0.116049 1.56549 0.348148 2.02929L7.82006 9.50081L0.348148 16.9723C-0.116049 17.4361 -0.116049 18.1887 0.348148 18.6525C0.580246 18.8842 0.88443 19.0002 1.18822 19.0002C1.49201 19.0002 1.79619 18.8842 2.02829 18.6521L9.5002 11.1806L16.9717 18.6521C17.2038 18.8842 17.508 19.0002 17.8118 19.0002C18.1156 19.0002 18.4198 18.8842 18.6519 18.6521C19.116 18.1883 19.116 17.4357 18.6519 16.9719L11.1803 9.50081Z" fill="black" />
                    </svg> : ''}
                <nav>
                    <Link to=""><Trans i18nKey="header.menu.buyBtc">Buy crypto</Trans></Link>
                    <Link to="business"><Trans i18nKey="header.menu.partnership">Business</Trans></Link>
                    <Link to="faq"><Trans i18nKey="header.menu.faq">FAQ</Trans></Link>
                    <Link to="verification"><Trans i18nKey="header.menu.verification">Official Verification</Trans></Link>
                    <Languages />
                </nav>
                <a href="https://partnerpanel.indacoin.io/Account/Login?ReturnUrl=%2F" className="linkPanel" target={"_blank"}>
                    <Trans i18nkey="header.menu.partnerPanel">Partner Panel</Trans>
                </a>
            </div>
        </header>
    )
}

export default withTranslation()(Header)
