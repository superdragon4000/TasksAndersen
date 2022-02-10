import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import AppButton from '../components/UI/AppButton/AppButton';
import AppInput from '../components/UI/AppInput/AppInput';
import {Context} from '../index';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);

    return (
        <form className='__form'>
            <h1>Login</h1>
            <AppInput 
                value={email}
                type='text' 
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <AppInput 
                value={password}
                type='password' 
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <AppButton type='submit' onClick={(e) => {
                e.preventDefault(); 
                store.login(email, password);
            }}>Sign In</AppButton>
            <Link to="/registration">Registration</Link>
        </form>
    );
};

export default Login;
