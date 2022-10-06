import React, { Component } from 'react';
import './styles.sass';
import Link from '../Link';
import { withTranslation, Trans } from 'react-i18next';
// import settings from '@config/settings.json';
import ContentLoader from "react-content-loader";
// import {changeUrl, pathname} from '@root/i18n';
import MenuDropdown from "../MenuDropdown";
import burger from "../../assets/images/burger.svg"
import close from "../../assets/images/close.svg"
import dropDown from "../../assets/images/dropDown.svg"

class Header extends Component {
    constructor(props) {
        super(props);

        // this._languages = [...settings.locales.available]; // copy array

        this.state = {
            showLanguages: false,
            showMenu: false,
            showLoader: this.props.getUser === null,
        };

        this.timeout = null;

        this.refIgnoreSpan = React.createRef();
        this.refIgnoreImg = React.createRef();
    }

    /**
     * Change language (don't use Redirect from react-router because unsupported force update on redirect)
     *
     * @param {object} element
     */
    changeLanguage(element) {
        this.props.i18n.changeLanguage(element.language.toLowerCase());
        // pathname(element.language.toLowerCase());

        // if (!changeUrl(this.props.i18n.language, element.language)) {
        //     window.localStorage.setItem('language', element.language.toLowerCase());
        // }
    }

    /**
     * Show or hide menu
     */
    toggleMenu () {
        this.setState({
            showMenu: !this.state.showMenu,
        }, () => document.body.style.overflowY = this.state.showMenu ? 'hidden' : 'auto');
    }

    componentWillUnmount() {
        document.body.style.overflowY = 'auto';

        if (this.timeout !== null) {
            clearTimeout(this.timeout);
        }
    }

    render() {
        let fiat = 'usd';

        if (this.props.setCurrentCurrenciesPair) {
            fiat = this.props.setCurrentCurrenciesPair.fiat.toLowerCase();
        }
        return (
            <div className="mainWrapper">
                <div className="burger" onClick={this.toggleMenu.bind(this)}>
                    <img src={burger} />
                </div>
                <div className="wrapper" >
                    <div className="close" >
                        <img src={close} onClick={this.toggleMenu.bind(this)} />
                    </div>
                    <ul className="menu">
                         <li>
                            <a href="https://gw.indacoin.io/" target={"_blank"}>
                            <Trans i18nKey="header.menu.buyBtc">
                                    Buy crypto
                                </Trans>
                            </a>
                        </li> 
                        <li>
                            <Link to="business">
                                <Trans i18nKey="header.menu.partnership">
                                    Business
                                </Trans>
                            </Link>
                        </li>
                        <li>
                            <Link to={'payment-status'}>
                            <Trans i18nKey="header.menu.paymentStatus">
                                    Track order
                                </Trans>
                            </Link>
                        </li>
                        <li>
                            <Link to="faq">
                                <Trans i18nKey="header.menu.faq">
                                    FAQ
                                </Trans>
                            </Link>
                        </li>
                        <li>
                            <Link to="verification">
                                <Trans i18nKey="header.menu.verification">
                                    Official Verification
                                </Trans>
                            </Link>
                        </li>
                        <li className="languageContainer"
                            onClick={() => this.setState({showLanguages: !this.state.showLanguages})}
                        >
                            {/* <span ref={this.refIgnoreSpan}>
                                {this.props.i18n.language.toUpperCase()}
                            </span> */}
                            <img
                                className="dropDown"
                                src={dropDown}
                                ref={this.refIgnoreImg}
                                onClick={() => this.setState({showLanguages: !this.state.showLanguages})}
                            />
                            <MenuDropdown
                                className="MenuDropdown"
                                refIgnore={[this.refIgnoreSpan, this.refIgnoreImg]}
                                visible={bool => bool === undefined ? this.state.showLanguages : this.setState({showLanguages: bool})}
                                items={this._languages}
                                selected={this.changeLanguage.bind(this)}
                                jsx={(value) => {
                                    let img;
                                    // try {
                                    //     img = require(`@images/${value.language}Language.svg`);
                                    // } catch(e) {
                                    //     img = false;
                                    // }
                                    return (
                                        <>
                                            <div>
                                                {img && <img src={img} alt=""/>}
                                            </div>
                                            <span>
                                                {value.language}
                                            </span>
                                        </>
                                    );
                                }}
                            />
                        </li>
                        { this.account() }
                    </ul>
                </div>
            </div>
        );
    }

    account() {
        if (this.state.showLoader && this.props.getUser !== null) {
            this.timeout = setTimeout(() => {
                this.setState({
                    showLoader: false,
                })
            }, 1000); // for animation
        }

        if (this.state.showLoader) {
            return (
                <li className="loaderContainer">
                    <ContentLoader
                        className="loader"
                    >
                        <rect x="0" y="0" rx="5" ry="5" width="70" />
                    </ContentLoader>
                </li>
            );
        } else {
            return (
                <li>
                    {
                        !this.props.getUser || this.props.getUser.nick.length === 0
                            ? <a
                                href="https://partnerpanel.indacoin.io/Account/Login?ReturnUrl=%2F"
                                className="button"
                                target={"_blank"}
                            >
                               <Trans i18nkey="header.menu.partnerPanel">
                                Partner Panel
                               </Trans>
                            </a>
                            : <Link to="cpanel" className="button">
                                {this.props.getUser.nick}
                            </Link>
                    }
                </li>
            );
        }
    }

}

export default Header;
