import React from 'react';

export default class PopupAccount extends React.Component {

    constructor() {
        super();
        this.state={
            
        }
    }
    render() {

        return (
            <section className="Popup-Login">
                <div className="bg_overlay"></div>
                <div className="contentPopup">
                    <div className="btn_close"><img src="/app/assets/img/icon/btn_close.png"/></div>
                    <nav className="main-nav video">
                        <h3>ĐĂNG NHẬP</h3>
                    </nav>
                    <section className="contentBlock">
                        <section className="loginFacebook">
							<a className="btn btn-block btn-social btn-facebook">
            					<span className="fa fa-facebook"></span> Đăng nhập bằng facebook
          					</a>
                        </section>
                        <section className="loginEmail">
							<a className="btn btn-block btn-social btn-google">
							    <span className="fa fa-inbox"></span> Đăng nhập bằng email
							</a>
                        </section>
                        <section className="loginPhoneNumber">
							<a className="btn btn-block btn-social btn-phone" >
							    <span className="fa fa-mobile-phone"></span> Đăng nhập bằng số điện thoại
							</a>
                        </section>
                    </section>
                </div>
            </section>
        );
    }

}
