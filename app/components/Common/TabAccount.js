import React from 'react';
import Tabs from './tab.js';
import InfoAccount from '../../components/popups/account/infor';
import Transfer from '../../components/popups/account/transfer';
import Inform from '../../components/popups/account/inform';
import Pay from '../../components/popups/account/pay/index';

let tabList = [
    { 'id': 1, 'name': 'THÔNG TIN' },
    { 'id': 2, 'name': 'GIAO DỊCH' },
    { 'id': 3, 'name': 'THANH TOÁN' },
    { 'id': 4, 'name': 'THÔNG BÁO' }
];

export class Content extends React.Component {
    render(){
        return(
            <div className="content">
            	{this.props.currentTab === 1 ?
                <InfoAccount />
            	:null}

            	{this.props.currentTab === 2 ?
            	<Transfer />
            	:null}

            	{this.props.currentTab === 3 ?
	            <Pay />
            	:null}

            	{this.props.currentTab === 4 ?
            	<Inform />
            	:null}
            </div>
        );
    }
}

export class AppList extends React.Component {
    constructor() {
        super();
        this.state={
            tabList: tabList,
            currentTab: 1
        }
    }

    changeTab=(tab)=> {
        this.setState({ currentTab: tab.id });
    }

    render(){
        return(
            <div>
                <Tabs
            		currentTab={this.state.currentTab}
            		tabList={this.state.tabList}
            		changeTab={this.changeTab}
            	/>
            	<Content currentTab={this.state.currentTab} />
            </div>
        );
    }
}

export default AppList;
