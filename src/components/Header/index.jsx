import React, { useState } from 'react'
import './styles.sass'
import Link from '@components/Link'
import Languages from '@components/Languages'
import { withTranslation, Trans } from 'react-i18next';

// // import settings from '@config/settings.json';
// import ContentLoader from "react-content-loader";
// // import {changeUrl, pathname} from '@root/i18n';
// import MenuDropdown from "../MenuDropdown/index.jsx";

// import burger from "@images/burger.svg"
// import close from "@images/close.svg"
// import dropDown from "@images/dropDown.svg"
import Indacoin from "@images/INDACOIN.svg"


function Header (props) {
    const [mobile, setMobile] = useState(true)

    return (
        <header>
            <img src={Indacoin} className="logo" alt='INDACOIN' />
            <div className='burger-Box'>
                <p>Menu</p>
                <div className='burger'>
                    <span /><span /><span />
                </div>
            </div>
            <div className={`navigateBox ${mobile ? 'mobile' : ''}`}>
                <nav>
                    <a href="https://gw.indacoin.io/" target={"_blank"}><Trans i18nKey="header.menu.buyBtc">Buy crypto</Trans></a>
                    <Link to="business"><Trans i18nKey="header.menu.partnership">Business</Trans></Link>
                    <Link to={'payment-status'}><Trans i18nKey="header.menu.paymentStatus">Track order</Trans></Link>
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
