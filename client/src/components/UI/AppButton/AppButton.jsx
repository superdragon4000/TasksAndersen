import React from 'react';
import cl from './AppButton.module.css'

const AppButton = (props) => {
    return (
        <button {...props} className={cl.appButton}></button>
    );
};


export default AppButton;
