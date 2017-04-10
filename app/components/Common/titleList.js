import React from 'react';

export default class TitleSlider extends React.Component {
    render() {
        return (
            <div className="head">
                <h3 className="title">{this.props.title}</h3>
                <a href="/listcategory" className="viewall">Tất cả</a>
            </div>

        );
    }
}
