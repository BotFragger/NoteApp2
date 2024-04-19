import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Register from '../components/Register';
import { register } from '../utils/network-data';

function RegisterPage(){
    const navigate = useNavigate();
    async function onRegisterHandler(user){
        const {error} = await register(user);
        if(!error) {
            navigate('/');
        }
    }

    return(
        <section className='input-register'>
            <h2>Silahkan registrasi akun</h2>
            <Register register={onRegisterHandler} />
            <p>Kembali ke <Link to='/'>Masuk</Link></p>
        </section>
    )
}

export default RegisterPage;