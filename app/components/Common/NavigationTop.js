import React from 'react';

export class NavigationTop extends React.Component {
    constructor() {
        super();
        //this.popupShow=this.popupShow.bind(this);
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }
    popupShow=()=>{
        var element = document.getElementById("AccountPopup");
        element.className += " m-fadeIn";
    }
    popupShowLogin=()=>{
        var element = document.getElementById("LoginPopup");
        element.className += " m-fadeIn";
    }
    render() {
        return (
            <nav>
              <ul>
                  <li><a href="#" className="btn-search" ></a></li>
                  <li><a href="#" className="btn-notification"><span>1</span></a></li>
                  <li><a href="#" className="btn-avatar" onClick={this.popupShow.bind(this)}><img src="/app/assets/img/avatar.png"/></a></li>
                  <li className="username">
                      <a href="#" onClick={this.popupShowLogin.bind(this)}>Đăng nhập</a>
                      <ul className="submenu">
                          <li><a href="#">Trang cá nhân</a></li>
                          <li><a href="#">Thông tin</a></li>
                          <li><a href="#">Giao dịch</a></li>
                          <li className="signout"><a href="#">Đăng xuất</a></li>
                      </ul>
                  </li>
              </ul>
            </nav>
        );
    }
}

export default NavigationTop;
