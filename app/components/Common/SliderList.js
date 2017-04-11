import React from 'react';
import BlockSlider from 'react-slick';
import ItemVideo from '../../components/json/videoList';
const dataItem=ItemVideo.data;

export default class categoryList extends React.Component {
    constructor() {
        super();
        this.onMouseEnter  = this.handleMouseEnter.bind(this);
        this.onMouseLeave  = this.handleMouseLeave.bind(this);
        this.state = {
            category: dataItem
        };
    }
    handleMouseEnter(event) {
        event.currentTarget.parentElement.parentElement.style.overflow = 'visible';
    }
    handleMouseLeave(event) {
        document.getElementsByTagName('body')[0].removeAttribute('style');
        event.currentTarget.parentElement.parentElement.removeAttribute('style');
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    handleClick (e) {

    }
    popupShow=()=>{
        var element = document.getElementById("infoVideoPopup");
        element.className += " m-fadeIn";
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
            nextArrow: <NextButton />,
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
            <div className="sliderBlock">
                <BlockSlider {...blocksettings}>

                    {this.state.category.map((category, i) => (
                        <article key={i} className="item" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >
                            <a href="#">
                                <img src={category.src} />
                                <div className="line"></div>
                                <div className="iconPlay"></div>
                                <div className="description">
                                    <h6>{category.name}</h6>
                                    <p className="text">Cuộc thi tìm kiếm tài năng hài kịch...</p>
                                    <div className="play">{category.view} Lượt xem</div>
                                    <div className="heart">{category.like} Yêu thích</div>
                                </div>
                                <div className="arrowShow" onClick={this.popupShow.bind(this)}></div>
                            </a>
                        </article>
                    ))}
                </BlockSlider>
            </div>
        );
    }
}
