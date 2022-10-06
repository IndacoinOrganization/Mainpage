import React, { Component } from 'react';
import styles from './styles.sass';
import Link from '../Link';
import { withTranslation, Trans } from 'react-i18next';

class FooterMenu extends Component {
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
            <div className={styles.mainWrapper }>
                {/* <div className={ styles.burger } onClick={this.toggleMenu.bind(this)}>
                    <img src={ require('@images/burger.svg') } />
                </div> */}
                <div className={ styles.wrapper} >
                    {/* <div className={ styles.close + ' clearfix'} >
                        <img src={ require('@images/close.svg') } onClick={this.toggleMenu.bind(this)} />
                    </div> */}
                    <ul className={ styles.menu }>
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
                                <Trans>
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
                    </ul>
                </div>
            </div>
        );
    }

}

export default FooterMenu;
