import React from 'react';
import PopupAccount from '../../components/popups/account/index';
import PopupLogin from '../../components/popups/Login/index';
import DetailVideo from '../../components/popups/VideoDetail/index';
import TrailerVideo from '../../components/popups/trailer/index';

const PopupControl = () =>
    <div>
        <PopupAccount />
        <PopupLogin />
        <DetailVideo />
        <TrailerVideo />
    </div>
export default PopupControl;
