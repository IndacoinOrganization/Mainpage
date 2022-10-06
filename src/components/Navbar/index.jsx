import "./styles.sass";
import React from "react";
import logo from "../../assets/images/logo.svg";
import Menu from '../HeaderMenu';

export default function Navbar() {
    return (
        <div className="_container">
            <nav className="h-navigation">
                <div className="logo">
                    <img src={logo}
                    className="logo-img"
                    />
                </div>
                <div><Menu /></div>
            </nav>
        </div>
    );
}