import React from "react";
import {Link} from 'react-router-dom';
import { FiLogOut, FiPlusCircle, FiArchive } from "react-icons/fi";


function Navigation({logout, name}){
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/arsip">Arsip</Link></li>
                <li><Link to="/tambahcatatan">Tambah Catatan</Link></li>
                <li><button className="button-logout" onClick={logout}>{name}<FiLogOut/></button></li>
            </ul>
        </nav>
    )
}

export default Navigation;