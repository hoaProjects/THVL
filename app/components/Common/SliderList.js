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
        if (document.getElementsByTagName('body')[0].clientWidth <=640){
            event.currentTarget.parentElement.parentElement.style.paddingTop = "15px";
            event.currentTarget.parentElement.parentElement.style.paddingBottom = "17px";
        }else{
            event.currentTarget.parentElement.parentElement.style.overflow = 'visible';
        }
        if (!event.currentTarget.classList.contains("activeItem")){
            document.getElementById("infoVideoPopup").style.marginTop = "-36px";
        }
    }
    handleMouseLeave(event) {
        document.getElementsByTagName('body')[0].removeAttribute('style');
        event.currentTarget.parentElement.parentElement.removeAttribute('style');
        document.getElementById("infoVideoPopup").style.marginTop = "0";
    }
    componentDidMount() {
        window.addEventListener("resize", function(){
            var eleRec = document.getElementsByClassName("activeItem")[0].getBoundingClientRect();
            document.getElementById('arrVideoDetail').style.left = eleRec.left + document.getElementsByClassName("activeItem")[0].clientWidth/2 + "px";
        });
    }
    componentWillUnmount() {

    }
    handleClick (e) {

    }
    popupShow=(event)=>{
        var element = document.getElementById("infoVideoPopup");
        var parent = document.getElementsByClassName("slick-track");
        event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.appendChild(element);
        element.className += " m-fadeIn";
        var itemList = document.querySelectorAll('article.slick-slide');
        for (var i = 0; i < itemList.length; i++){
            itemList[i].classList.remove("activeItem");
        }
        event.currentTarget.parentElement.parentElement.className+=" activeItem";
        //Description
        var description = event.currentTarget.parentElement.childNodes[3];
        var title = description.getElementsByTagName('h6')[0].innerHTML;
        //Info box
        document.getElementById('infoTitle').innerHTML = title;

        // Position of arrow
        var eleRec = event.currentTarget.parentElement.getBoundingClientRect();
        document.getElementById('arrVideoDetail').style.left = eleRec.left + event.currentTarget.parentElement.parentElement.clientWidth/2 + "px";
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
                        <article key={i} className="item" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onTouchEnd={this.onMouseLeave}>
                            <a>
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
