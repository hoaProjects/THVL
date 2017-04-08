import React from 'react';
import AccountPayTab  from './component';
export default class AccountDetail extends React.Component {

    constructor() {
        super();
    }
    render() {

        return (
            <section className="Popup-Pay-Account">
                   <AccountPayTab />
                    { this.props.children }
            </section>
        );
    }

}


