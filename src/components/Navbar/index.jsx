import React, { useState, useEffect } from 'react';
import styles from './styles.sass';
import { Link } from "react-router-dom";
import Indacoin from "@/assets/images/INDACOIN.svg"
import Burger from "@/assets/images/Burger.svg"
import Close from "@/assets/images/Close.svg"
// import Link from '@components/Link';
// import MenuDropdown from "@components/MenuDropdown";

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav>
            <img src={ Indacoin } className={ styles.logo } />
            <img src={ Burger } className={ styles.burger } onClick={ () => setToggleMenu(!toggleMenu) }/>
            <div className={ styles.wrapper} >
                <img src={ Close } className={ styles.close } onClick={ () => setToggleMenu(!toggleMenu)}/>
                <ul className={ styles.menu }>
                    <li>
                        <a href="https://gw.indacoin.io/" target={"_blank"}>Buy crypto</a>
                    </li>
                    <li>
                        <Link to="#">Business</Link>
                    </li>
                    <li>
                        <Link to={'#'}>Track order</Link>
                    </li>
                    <li>
                        <Link to="#">FAQ</Link>
                    </li>
                </ul>
            </div>
        </nav>




            
    )
}


// class Header extends Component {
//     constructor(props) {
//         super(props);

//         this._languages = [...settings.locales.available]; // copy array

//         this.state = {
//             showLanguages: false,
//             showMenu: false,
//         };

//         this.timeout = null;

//         this.refIgnoreSpan = React.createRef();
//         this.refIgnoreImg = React.createRef();
//     }

//     /**
//      * Change language (don't use Redirect from react-router because unsupported force update on redirect)
//      *
//      * @param {object} element
//      */
//     changeLanguage(element) {
//         this.props.i18n.changeLanguage(element.language.toLowerCase());
//         pathname(element.language.toLowerCase());

//         if (!changeUrl(this.props.i18n.language, element.language)) {
//             window.localStorage.setItem('language', element.language.toLowerCase());
//         }
//     }


//     componentWillUnmount() {
//         document.body.style.overflowY = 'auto';
//         if (this.timeout !== null) {
//             clearTimeout(this.timeout);
//         }
//     }

//     render() {

//         return (
//             <div className={styles.mainWrapper }>
//                 <div className={ styles.burger } onClick={this.toggleMenu.bind(this)}>
//                     <img src={ require('@images/burger.svg') } />
//                 </div>
                // <div className={ styles.wrapper  + ' ' + (this.state.showMenu ? styles.show : '' )} >
                //     <div className={ styles.close + ' clearfix'} >
                //         <img src={ require('@images/close.svg') } onClick={this.toggleMenu.bind(this)} />
                //     </div>
                //     <ul className={ styles.menu }>
                //          <li>
                //             <a href="https://gw.indacoin.io/" target={"_blank"}>
                //             <Trans i18nKey="header.menu.buyBtc">
                //                     Buy crypto
                //                 </Trans>
                //             </a>
                //         </li>
                //         <li>
                //             <Link to="business">
                //                 <Trans i18nKey="header.menu.partnership">
                //                     Business
                //                 </Trans>
                //             </Link>
                //         </li>
                //         <li>
                //             <Link to={'payment-status'}>
                //             <Trans i18nKey="header.menu.paymentStatus">
                //                     Track order
                //                 </Trans>
                //             </Link>
                //         </li>
                //         <li>
                //             <Link to="faq">
                //                 <Trans i18nKey="header.menu.faq">
                //                     FAQ
                //                 </Trans>
                //             </Link>
                //         </li>
                //         <li className={styles.languageContainer}
                //             onClick={() => this.setState({showLanguages: !this.state.showLanguages})}
                //         >
                //             <span ref={this.refIgnoreSpan}>
                //                 {this.props.i18n.language.toUpperCase()}
                //             </span>
                //             <img
                //                 className={styles.dropDown}
                //                 src={require('@images/dropDown.svg')}
                //                 ref={this.refIgnoreImg}
                //                 onClick={() => this.setState({showLanguages: !this.state.showLanguages})}
                //             />
                //             <MenuDropdown
                //                 className={styles.MenuDropdown}
                //                 refIgnore={[this.refIgnoreSpan, this.refIgnoreImg]}
                //                 visible={bool => bool === undefined ? this.state.showLanguages : this.setState({showLanguages: bool})}
                //                 items={this._languages}
                //                 selected={this.changeLanguage.bind(this)}
                //                 jsx={(value) => {
                //                     let img;
                //                     try {
                //                         img = require(`@images/${value.language}Language.svg`);
                //                     } catch(e) {
                //                         img = false;
                //                     }
                //                     return (
                //                         <>
                //                             <div>
                //                                 {img && <img src={img} alt=""/>}
                //                             </div>
                //                             <span>
                //                                 {value.language}
                //                             </span>
                //                         </>
                //                     );
                //                 }}
                //             />
                //         </li>
                //     </ul>
                // </div>
//             </div>
//         );
//     }
// }

export default Navbar;
