import React from 'react';
import BlockSlider from 'react-slick';

export default class SliderListLive extends React.Component {
    constructor() {
        super();
        this.onMouseEnter  = this.handleMouseEnter.bind(this);
        this.onMouseLeave  = this.handleMouseLeave.bind(this);
        
    }
    handleMouseEnter(event) {
        event.currentTarget.parentElement.parentElement.style.overflow = 'visible';
    }
    handleMouseLeave(event) {
        document.getElementsByTagName('body')[0].removeAttribute('style');
        event.currentTarget.parentElement.parentElement.removeAttribute('style');
    }
    render() {
        function PrevButton({ onClick }) {
            return <a onClick={onClick} className="slick-arrow slick-prev"><span></span></a>;
        }

        function NextButton({ onClick }) {
            return <a onClick={onClick} className="slick-arrow slick-next"><span></span></a>;
        }
        const blocksettings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            centerMode: true,
            centerPadding: '3px',
            prevArrow: <PrevButton />,
            nextArrow: <NextButton />
        };
        return (
            <section className="block">
                <div className="head">
                    <h3 className="title">{this.props.title}</h3>
                    <a href="/listcategory" className="viewall">Tất cả</a>
                </div>
                <div className="sliderBlock">
                    <BlockSlider {...blocksettings}>
                        {this.props.data.map((category, i) => (
                            <article key={i} className="item itemLive" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >
                                <a href="#">
                                    <img src={category.src} />
                                </a>
                            </article>
                        ))}
                    </BlockSlider>
                </div>
            </section>

        );
    }
}
