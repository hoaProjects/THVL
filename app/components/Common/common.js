import React from 'react';
import '../../styles/style.scss';

export class TitleCategory extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="head">
                <h3 className="title">{this.props.name}</h3>
            </div>
        );
    }
}
export class ItemVideo extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <article className="item">
                <a href="#">
                    <img src={this.props.img} />
                    <div className="iconPlay"></div>
                    <div className="description">
                        <h6>{this.props.title}</h6>
                        <div className="play">{this.props.numberPlay} Lượt xem</div>
                        <div className="heart">{this.props.numberHeart} Yêu thích</div>
                    </div>
                </a>
            </article>
        );
    }
}

export class Paging extends React.Component {
    constructor() {
        super();
    }
    render() {
        const pageNumbers = [];
        for(let i=1;i<=5;i++){
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <a
                    key={number}
                    id={number} >
                    {number}
                </a>
            );
        });
        return (
            <section className="Paging">
                {renderPageNumbers}
            </section>
        );
    }
}

export default TitleCategory;
