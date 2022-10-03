import React, { useState, useEffect } from 'react';
import styles from './styles.sass';
import { Link } from "react-router-dom";
import Indacoin from "@/assets/images/INDACOIN.svg"
import burger from "@/assets/images/burger.svg"
import close from "@/assets/images/Close.svg"
import MenuDropdown from "@/components/DropDownMenu"
// import Link from '@components/Link';
// import MenuDropdown from "@components/MenuDropdown";
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    //const [selectedOption, setSelectedOption] = useState(null);
    //const [showLanguages, setShowLanguages] = useState(false)

    return (
        <nav>    
            <MenuDropdown />
            <img src={Indacoin} className={styles.logo} />
            <img src={burger} className={styles.burger} onClick={() => setToggleMenu(!toggleMenu)} />
            <div className={styles.wrapper} >
                <img src={close} className={styles.close} onClick={() => setToggleMenu(!toggleMenu)} />
                <ul className={styles.menu}>
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
                        <Link to="verification">
                            Official Verification
                        </Link>
                    </li>
                    <li>
                        <Link to="#">FAQ</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;
