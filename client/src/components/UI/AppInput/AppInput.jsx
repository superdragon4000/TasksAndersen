import React from 'react';
import cl from './AppInput.module.css'
// import PropTypes from 'prop-types';

const AppInput = (props) => {
    return (
        <input {...props} className={cl.appInput} />
    ); 
};

// AppInput.propTypes = {};

export default AppInput;
