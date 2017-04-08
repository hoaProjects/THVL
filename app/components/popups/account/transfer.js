import React from 'react';

export class AccountTrans extends React.Component {

    render() {

        return (
            <section className="transAcountBlock">
                <article className="block">
                    <div className="row">
                        <span className="title">Ngày:</span>
                        <span className="text">1/1/2017</span>
                    </div>
                    <div className="row">
                        <span className="title">Mã số:</span>
                        <span className="text">001123</span>
                    </div>
                    <div className="row">
                        <span className="title">Giao dịch:</span>
                        <span className="text">Nạp 30 ngày VIP: 1/1/2017- 31/1/2017</span>
                    </div>
                    <div className="row">
                        <span className="title">Giá:</span>
                        <span className="text">100.000đ</span>
                    </div>
                </article>
                <article className="block">
                    <div className="row">
                        <span className="title">Ngày:</span>
                        <span className="text">1/1/2017</span>
                    </div>
                    <div className="row">
                        <span className="title">Mã số:</span>
                        <span className="text">001123</span>
                    </div>
                    <div className="row">
                        <span className="title">Giao dịch:</span>
                        <span className="text">Nạp 30 ngày VIP: 1/1/2017- 31/1/2017</span>
                    </div>
                    <div className="row">
                        <span className="title">Giá:</span>
                        <span className="text">100.000đ</span>
                    </div>
                </article>
            </section>
        );
    }
}

export default AccountTrans;
