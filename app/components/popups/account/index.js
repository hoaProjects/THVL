import React from 'react';
import AccountTab  from './component';
export default class AccountDetail extends React.Component {

    constructor() {
        super();
    }
    render() {

        return (
            <section className="Popup-Account">
               <div className="bg_overlay"></div>
               <div className="contentPopup">
                   <div className="btn_close"><img src="/app/assets/img/icon/btn_close.png"/></div>
                   <VideoTab />
                    { this.props.children }
               </div>
            </section>
        );
    }

}


