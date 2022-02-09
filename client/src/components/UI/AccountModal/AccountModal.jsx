import React, {useContext, useState} from 'react';
import AppInput from '../AppInput/AppInput';
import AppButton from '../AppButton/AppButton';
import cl from './AccountModal.module.css'
import PropTypes from 'prop-types';
import ButtonRemove from '../ButtonRemove/ButtonRemove';
import { Context } from '../../..';


const AccountModal = (props) => {
    const {store} = useContext(Context);
    const [password, setPassword] = useState('');
    const rootClasses = [cl.accountModal];
    if (props.visible) rootClasses.push(cl.active)

    const updatePassword = async (e) => {
        e.preventDefault();
        await store.changePassword(password);
        setPassword('');
    };

    return (
        <div className={rootClasses.join(' ')} onClick={() => props.setModal(false)}>
            <div className={cl.accountModalContent} onClick={(e) => e.stopPropagation()}>
                <form className={cl.changePasswordForm}>
                    <p>Change password</p>
                    {/* <AppInput type="password" placeholder='Old password'></AppInput> */}
                    <AppInput type="password" placeholder='New password' onChange={(e) => setPassword(e.target.value)}></AppInput>
                    <AppButton onClick={updatePassword}>Change Password</AppButton>
                </form>

                <ButtonRemove onClick={store.deleteUser}>Delete Account</ButtonRemove>

                <AppButton onClick={store.logout}>Sign Out</AppButton>
            </div>
        </div>
    );
};

AccountModal.propTypes = {
    setModal: PropTypes.func,
    visible: PropTypes.bool
};

export default AccountModal;
