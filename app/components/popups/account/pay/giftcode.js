import React from 'react';

export class AccountPayGift extends React.Component {

    render() {

        return (
            <section className="giftPayAcountBlock">
                <article className="content">
                    <section className="content-gift">
                        <span>Nhập mã Gift code:</span>
                        <input type="text" className="cls-input-gift-code"/>
                        <button>KÍCH HOẠT</button>
                    </section>
                </article>

            </section>
        );
    }
}

export default AccountPayGift;
