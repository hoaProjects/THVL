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
          slidesToScroll: 5,
          responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 641,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              }
            ]
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
