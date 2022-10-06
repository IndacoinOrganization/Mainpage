import "./styles.sass";
import React from "react";
import FooterMenu from "../FooterMenu";
import { Trans } from 'react-i18next';

export default function Footer() {
    return (
        <div className="_container">
            <footer className="footer f-navigation-menu">
                <div className="footer-text">
                <Trans i18nKey="header.menu.footer1">Indacoin OU, Registry code: 14798473, </Trans><br/><Trans i18nKey="header.menu.footer2">Address: Poordi 3-63, Tallinn, Estonia, 10156, Operating license: FVT000145
                </Trans>
                </div>
                <div>
                   <FooterMenu />
                </div> 
               </footer>
        </div>
    );
}