import React from 'react';
import PopupAccount from '../../components/popups/account/index';
import PopupSignup from '../../components/popups/Signup/index';
import PopupLogin from '../../components/popups/Login/index';
import DetailVideo from '../../components/popups/VideoDetail/index';
import TrailerVideo from '../../components/popups/trailer/index';
import PopupDatePicker from '../../components/popups/datepicker/index';

const PopupControl = () =>
    <div>
        <PopupAccount />
        <PopupLogin />
        <DetailVideo />
        <TrailerVideo />
        <PopupDatePicker />
        <PopupSignup />
    </div>
export default PopupControl;
