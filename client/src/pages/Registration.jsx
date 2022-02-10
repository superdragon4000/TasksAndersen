import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import AppInput from '../components/UI/AppInput/AppInput';
import AppButton from '../components/UI/AppButton/AppButton';
import {Context} from '../index';


const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {store} = useContext(Context);

  return (
    <form className='__form'>
        <h1>Registration</h1>
        <AppInput 
            value={email}
            type='text' 
            placeholder='Login'
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
          store.registration(email, password);
        }}>Sign Up</AppButton>
        <Link to="/login">Login</Link>
    </form>
  );
};


export default Registration;
