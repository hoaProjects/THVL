import React from 'react';
import { Link } from 'react-router';

export class AccountTab extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <nav className="main-nav video">
                <Link to="/account/info" activeClassName="active">THÔNG TIN</Link>
                <Link to="/account/tran" activeClassName="active">GIAO DỊCH</Link>
                <Link to="/account/pay" activeClassName="active">THANH TOÁN</Link>
                <Link to="/account/inform" activeClassName="active">THÔNG BÁO</Link>
            </nav>
        );
    }
}
export default AccountTab;
