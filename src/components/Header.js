import React, { useState } from "react";

import styles from "./Header.module.scss";
import logo from "../assets/index.png"

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div>
                    <img src={logo} className={styles.logo}></img>
                </div>
                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                            <a className={styles.nav__item} href={"/"}>
                                Product<span className={styles.nav__item__arrow}><IoIosArrowDown/></span>
                            </a>
                            <a className={styles.nav__item} href={"/"}>
                                Our Story
                            </a>
                            <a className={styles.nav__item} href={"/"}>
                                Resources<span className={styles.nav__item__arrow}><IoIosArrowDown/></span>
                            </a>
                        <div>
                        </div>
                        <div className={styles.nav__button__container}>
                            <Button />
                        </div>
                    </nav>
                </div>
                <div>
                    <div className={styles.header__button__container}>
                        <Button />
                    </div>
                    <button className={styles.header__toggler} onClick={menuToggler}>
                        {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                    </button>
                </div>
            </div>
        </div>
    );
};

const Button = () => {
    return <button className={styles.button}>Click me</button>;
};

export default Header;
