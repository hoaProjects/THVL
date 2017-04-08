import React from 'react';
import AppList from '../../../components/Common/TabAccount';

export default class AccountDetail extends React.Component {

    constructor() {
        super();
    }
    popupHide=()=>{
        var element = document.getElementById("AccountPopup");
        element.classList.remove("m-fadeIn");
    }
    render() {

        return (
            <section className="Popup-Account" id="AccountPopup">
               <div className="bg_overlay" ></div>
               <div className="contentPopup">
                   <div className="btn_close" id="btn_close" onClick={this.popupHide.bind(this)}><img src="/app/assets/img/icon/btn_close.png"/></div>
                   <AppList />
               </div>

            </section>
        );
    }

}
