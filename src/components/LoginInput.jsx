import React from "react";
import useInput from "../customHooks/CustomHooks";
import { login } from "../utils/network-data";
import PropTypes from "prop-types"
import { putAccessToken } from "../utils/network-data";

function LoginInput({loginSuccess}){
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { error, data } = await login({ email, password });
            putAccessToken(data.accessToken);
            if (!error) {
                loginSuccess(data?.accessToken);
            } 
        } catch (error) {
            console.error("An unexpected error occurred during login:", error);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

LoginInput.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginInput;