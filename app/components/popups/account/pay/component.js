import React from 'react';
import { Link } from 'react-router';

export class AccountPayTab extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <nav className="pay-nav">
                <Link to="/account/pay/gift" activeClassName="active">Gift code</Link>
                <Link to="/account/pay/card" activeClassName="active">Thẻ cào</Link>
                <Link to="/account/pay/sms" activeClassName="active">Tin nhắn SMS</Link>
            </nav>
        );
    }
}
export default AccountPayTab;
