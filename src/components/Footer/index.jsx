import "./styles.sass"
import React from "react"
import { Trans, withTranslation } from 'react-i18next'
import Link from '@components/Link'
import Languages from '@components/Languages'

function Footer() {
    return (
        <footer>
            <div className="info">
                <Trans i18nKey="header.menu.footer1">Indacoin OU, Registry code: 14798473, </Trans><br/>
                <Trans i18nKey="header.menu.footer2">Address: Poordi 3-63, Tallinn, Estonia, 10156, Operating license: FVT000145</Trans>
            </div>
            <div className="navigate">
                <a href="https://gw.indacoin.io/" target={"_blank"}><Trans i18nKey="header.menu.buyBtc">Buy crypto</Trans></a>
                <Link to="business"><Trans i18nKey="header.menu.partnership">Business</Trans></Link>
                <Link to="faq"><Trans i18nKey="header.menu.faq">FAQ</Trans></Link>
                <Link to="verification"><Trans i18nKey="header.menu.verification">Official Verification</Trans></Link>
                <Languages />
            </div>
        </footer>
    );
}

export default withTranslation()(Footer)