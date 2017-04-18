import React from 'react';
import Slider from 'react-slick';
import SliderBanner from '../../components/json/sliderBanner';
const dataImg=SliderBanner.data;

export default class SlickSlider extends React.Component {
    constructor() {
        super();
        this.state = {
            data:dataImg
        };
    }

    render() {
        function PrevButton({ onClick }) {
            return <a onClick={onClick} className="slick-arrow slick-prev" style={{ left: '15px' }}></a>;
        }
        function NextButton({ onClick }) {
            return <a onClick={onClick} className="slick-arrow slick-next" style={{ right: '15px' }}></a>;
        }
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            draggable: false,
            prevArrow: <PrevButton />,
            nextArrow: <NextButton />
        };
        return (
            <ul className="slickSlider">
                <Slider {...settings}>
                    {this.state.data.map((slider, i) => (<li key={i}><img src={slider.src} /></li>))}
                </Slider>
            </ul>
        );
    }
}
