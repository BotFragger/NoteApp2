import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import {login} from '../utils/network-data'

function Login({loginSuccess}){
    return(
        <section className="input-login">
            <h2>Silahkan login</h2>
                <LoginInput loginSuccess={loginSuccess}/>

            <p>Belum punya akun? <Link to="/register">Register</Link></p>
        </section>
    )
}

export default Login;