import React, { useState } from 'react';
import './styles.sass';
import { Link } from "react-router-dom";

import Indacoin from "@/assets/images/INDACOIN.svg"
import burger from "@/assets/images/burger.svg"
import close from "@/assets/images/Close.svg"


// import MenuDropdown from "@components/MenuDropdown";
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav>    
            <MenuDropdown />
            <img src={Indacoin} className="logo" />
            <img src={burger} className="burger" onClick={() => setToggleMenu(!toggleMenu)} />
            <img src={close} className="close" onClick={() => setToggleMenu(!toggleMenu)} />
                <ul className="menu">
                    <li>
                        <a href="https://gw.indacoin.io/" target={"_blank"}>Buy crypto</a>
                    </li>
                    <li>
                        <Link to="/business">Business</Link>
                    </li>
                    <li>
                        <Link to='/payment-status'>Track order</Link>
                    </li>
                    <li>
                        <Link to="/verification">
                            Official Verification
                        </Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                </ul>
        </nav>
    )
}
export default Navbar;
