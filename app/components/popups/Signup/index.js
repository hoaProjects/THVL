import React from 'react';

export default class PopupSignup extends React.Component {

    constructor() {
        super();
        this.state={

        }
    }
    popupHide=()=>{
        var element = document.getElementById("SignupPopup");
        element.classList.remove("m-fadeIn");
    }
    render() {

        return (
            <section className="Popup-Account Login" id="SignupPopup">
                <div className="bg_overlay" onClick={this.popupHide.bind(this)}></div>
                <div className="contentPopup">
                    <div className="btn_close" onClick={this.popupHide.bind(this)}><img src="/app/assets/img/icon/btn_close.png"/></div>
                    <nav className="main-nav video">
                        <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
                    </nav>
                    <section className="contentBlock">
                        <input type="text" className="input-style" placeholder="Họ tên" />
                        <input type="text" className="input-style"  placeholder="Email" />
                        <input type="text" className="input-style"  placeholder="Mật khẩu" />
                        <input type="text" className="input-style"  placeholder="Nhập lại mật khẩu" />
                        <a className="btn-social">ĐĂNG KÝ</a>
                    </section>
                </div>
            </section>
        );
    }

}
