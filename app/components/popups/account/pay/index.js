import React from 'react';
import Tabs from '../../../../components/Common/tab.js';
import Pay from './giftcode';

let tabListgitcode = [
    { 'id': 1, 'name': 'Gift code' },
    { 'id': 2, 'name': 'Thẻ cào' },
    { 'id': 3, 'name': 'Tin nhắn SMS' }
];
export class ContentGitcode extends React.Component {
    render(){
        return(
            <div className="content">
            	{this.props.currentTab === 1 ?
                <Pay />
            	:null}

            	{this.props.currentTab === 2 ?
            	<Pay />
            	:null}

            	{this.props.currentTab === 3 ?
	            <Pay />
            	:null}

            </div>
        );
    }
}
export class AppListGicode extends React.Component {
    constructor() {
        super();
        this.state={
            tabList: tabListgitcode,
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
            	<ContentGitcode currentTab={this.state.currentTab} />
            </div>
        );
    }
}
export default class PayAccount extends React.Component {

    constructor() {
        super();
    }
    render() {

        return (
            <section className="Popup-Pay-Account">
                   <AppListGicode />
            </section>
        );
    }

}
