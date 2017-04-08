import React from 'react';

export class Tab extends React.Component {
    handleClick=(e)=>{
        e.preventDefault();
    	this.props.handleClick();
    }

    render(){
        return (
            	<a activeClassName="active" className={this.props.isCurrent ? 'current' : null} onClick={this.handleClick}>
            		{this.props.name}
	            </a>
        );
    }
}
export class Tabs extends React.Component {
    handleClick=(tab)=>{
    	this.props.changeTab(tab);
    }
    render(){
        return (
            <nav className="main-nav tab">
                {this.props.tabList.map(function(tab) {
                    return (
                        <Tab
                            handleClick={this.handleClick.bind(this, tab)}
                            key={tab.id}
                            name={tab.name}
                            isCurrent={(this.props.currentTab === tab.id)}
                         />
                    );
                }.bind(this))}
            </nav>
        );
    }
}

export default Tabs;
