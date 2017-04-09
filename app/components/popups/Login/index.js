import React from 'react';

export default class PopupAccount extends React.Component {

    constructor() {
        super();
        this.state={

        }
    }
    popupHide=()=>{
        var element = document.getElementById("LoginPopup");
        element.classList.remove("m-fadeIn");
    }
    render() {

        return (
            <section className="Popup-Account Login" id="LoginPopup">
                <div className="bg_overlay"></div>
                <div className="contentPopup">
                    <div className="btn_close" onClick={this.popupHide.bind(this)}><img src="/app/assets/img/icon/btn_close.png"/></div>
                    <nav className="main-nav video">
                        <h3>ĐĂNG NHẬP</h3>
                    </nav>
                    <section className="contentBlock">
                        <a className="btn-social facebook">Đăng nhập bằng facebook</a>
                        <a className="btn-social email">Đăng nhập bằng email</a>
                        <a className="btn-social phone">Đăng nhập bằng số điện thoại</a>
                    </section>
                </div>
            </section>
        );
    }

}
