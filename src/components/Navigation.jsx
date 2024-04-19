import React from "react";
import {Link} from 'react-router-dom';
import { FiLogOut} from "react-icons/fi";
import { FaSun, FaMoon } from "react-icons/fa";
import { LocaleConsumer } from "../context/LocaleContext";


function Navigation({logout, name, themeToggle}){
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <LocaleConsumer>
                        {({theme})=>{
                            return <button className="toggle-locale" onClick={themeToggle}>{theme === 'light' ? <FaMoon/>: <FaSun/>}</button>
                        }}
                    </LocaleConsumer>
                </li>
                <li><Link to="/arsip">Arsip</Link></li>
                <li><Link to="/tambahcatatan">Tambah Catatan</Link></li>
                <li><button className="button-logout" onClick={logout}>{name}<FiLogOut/></button></li>
            </ul>
        </nav>
    )
}

export default Navigation;