import React from 'react';
import BlockSlider from 'react-slick';

export default class SliderListLive extends React.Component {
    constructor() {
        super();
    }

    render() {
        let numberSlider=5;
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: this.props.number,
          slidesToScroll: this.props.number,
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
                <div className="itemAllLive"><img src="../app/assets/img/live/allLive.jpg" /></div>
                <BlockSlider {...settings}>
                    {this.props.data.map((slider, i) => (<div key={i}><img src={slider.src} /></div>))}
                </BlockSlider>
            </section>


        );
    }
}
