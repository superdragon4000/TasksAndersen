import React from 'react';
import cl from './ButtonRemove.module.css'

const ButtonRemove = (props) => {
    return (
        <button {...props} className={cl.buttonRemove}></button>
    );
};


export default ButtonRemove;
