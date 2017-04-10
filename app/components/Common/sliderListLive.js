import React from 'react';
import BlockSlider from 'react-slick';

export default class SliderListLive extends React.Component {
    constructor() {
        super();
    }

    render() {
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 5
        };
        return (
            <section className="listSlider">
                <BlockSlider {...settings}>
                    {this.props.data.map((slider, i) => (<div key={i}><img src={slider.src} /></div>))}
                </BlockSlider>
            </section>


        );
    }
}
