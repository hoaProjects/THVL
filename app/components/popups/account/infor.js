import React from 'react';

export class AccountInfo extends React.Component {

    render() {

        return (
            <section className="inforAccountBlock">
                <article className="col">
                    <section className="itemUser">
                        <img src="/app/assets/img/photo/imgComment.jpg"/>
                    </section>
                </article>
                <article className="col right">
                    <div className="row">
                        <span className="title">Tên tài khoản:</span>
                        <span className="text">Nghĩa Nguyễn</span>
                    </div>
                    <div className="row">
                        <span className="title">Email:</span>
                        <span className="text">nghianguyen.studio@gmail.com</span>
                    </div>
                    <div className="row">
                        <span className="title">Số điện thoại:</span>
                        <span className="text">0984530435</span>
                    </div>
                    <div className="row">
                        <span className="title">Ngày đăng kí:</span>
                        <span className="text">12/12/2016</span>
                    </div>
                    <div className="row">
                        <span className="title">Hoạt động gần đây:</span>
                        <span className="text">1/3/2017</span>
                    </div>
                    <div className="row">
                        <span className="title">Loại tài khoản:</span>
                        <span className="text">Free</span>
                    </div>
                    <div className="row">
                        <span className="title">Ngày hết hạn:</span>
                        <span className="text"></span>
                    </div>
                </article>
            </section>
        );
    }
}

export default AccountInfo;
