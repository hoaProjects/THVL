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
            category: dataItem,
			disablePrev: "",
			disableNext: "",
			currentSlide:0
        };
    }
    handleMouseEnter(event) {
        if (document.getElementsByTagName('body')[0].clientWidth <=640){
            event.currentTarget.parentElement.parentElement.style.paddingTop = "15px";
            event.currentTarget.parentElement.parentElement.style.paddingBottom = "17px";
        }else{
            event.currentTarget.parentElement.parentElement.style.overflow = 'visible';
        }
    }

    handleMouseLeave(event) {
        document.getElementsByTagName('body')[0].removeAttribute('style');
        event.currentTarget.parentElement.parentElement.removeAttribute('style');
    }
    componentDidMount() {
        window.addEventListener("resize", function(){
            if(document.getElementsByClassName("activeItem")[0]){
                var eleRec = document.getElementsByClassName("activeItem")[0].getBoundingClientRect();
                document.getElementById('arrVideoDetail').style.left = eleRec.left + document.getElementsByClassName("activeItem")[0].clientWidth/2 + "px";
            }
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
        event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.className+=" activeBorder";
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
            return <a onClick={onClick} id="slick-prev" className="slick-arrow slick-prev"><span></span></a>;
        }
        function NextButton({ onClick }) {
            return <a onClick={onClick} id="slick-next" className="slick-arrow slick-next"><span></span></a>;
        }

		const settings = {
		      dots: false,
		      infinite: false,
		      speed: 500,
		      slidesToScroll: 5,
		      slidesToShow: 5,
			  prevArrow: <PrevButton />,
              nextArrow: <NextButton />,
			  initialSlide: this.state.currentSlide,
		      afterChange: function(key,index) {

					this.setState({ currentSlide: index });
					let pre = document.getElementById("slick-prev");
					let next = document.getElementById("slick-next");
					// if(this.state.currentSlide==0) {
					// 	pre.className+=" disable";
					// 	next.classList.remove("disable");
					// }
					// else if(this.state.currentSlide==dataItem.length-1){
					// 	next.className+=" disable";
					// 	pre.classList.remove("disable");
					// }
					// else {
					// 	pre.classList.remove("disable");
					// 	next.classList.remove("disable");
					// }
					console.log(key)
					console.log(dataItem.length);
			  }.bind(this),
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
		        <BlockSlider {...settings}>
				{this.state.category.map((category, i) => (

					<article key={i} className="item" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onTouchEnd={this.onMouseLeave}>
		                <a>
		                    <img src={category.src} />
		                    <div className="line"></div>
		                    <div className="iconPlay" onClick={this.popupShow.bind(this)}></div>
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
