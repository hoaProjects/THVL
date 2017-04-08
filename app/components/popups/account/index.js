import React from 'react';
import AccountTab  from './component';
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
               <div className="bg_overlay" onClick={this.popupHide.bind(this)}></div>
               <div className="contentPopup">
                   <div className="btn_close" id="btn_close" onClick={this.popupHide.bind(this)}><img src="/app/assets/img/icon/btn_close.png"/></div>
                   <AccountTab />
                   { this.props.children }
               </div>
            </section>
        );
    }

}
