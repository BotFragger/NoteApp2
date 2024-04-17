import React from "react";
import useInput from "../customHooks/CustomHooks";
import { register } from "../utils/network-data";
import PropTypes from "prop-types";

function Register(){
    const [name, handleNameChange] = useInput('');
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');
    const [confirmPassword, handleConfirmPasswordChange] = useInput('');

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert ('Password tidak sama')
        }
        register({name,email,password})
    };

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <input type="text" placeholder="Nama" value={name} onChange={handleNameChange}/>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                <button type="submit">Register</button>
            </form>
        </>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
}

export default Register;