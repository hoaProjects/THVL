import React from 'react';
import Info from '../../../components/VideoDetail/info';
import ReactDOM from 'react-dom';

export default class PopupVideo extends React.Component {

    constructor() {
        super();
        this.state={

        }
    }
    componentDidMount() {
        // var comment = document.getElementsByClassName("trailerButton");
        // var element = document.getElementById("TrailerPopup");
        // element.classList.remove("m-fadeIn");
        // comment[0].addEventListener('click', this.popupHide, false);
   }
   componentWillUnmount() {

   }
   closePopup=()=>{
       var element = document.getElementById("infoVideoPopup");
       element.classList.remove("m-fadeIn");
       var itemList = document.querySelectorAll('article.slick-slide');
       var activeborder = document.getElementsByClassName("activeBorder");
       activeborder[0].classList.remove("activeBorder");
       for (var i = 0; i < itemList.length; i++){
           itemList[i].classList.remove("activeItem");
       }
   }
   popupHide=()=>{
       var element = document.getElementById("infoVideoPopup");
       var element1 = document.getElementById("TrailerPopup");
       element1.className += " m-fadeIn";
       element.classList.remove("m-fadeIn");
   }
    render() {
        return (
            <section className="videoDetailPopup" id="infoVideoPopup" ref="container">
                <span id="arrVideoDetail" className="arrowDown"></span>
                <a href="#" className="close" onClick={this.closePopup.bind(this)}>X</a>
                <Info />
                <div className="iconPlay"></div>
                <div className="trailerButton" onClick={this.popupHide.bind(this)}><span>Xem Trailer</span></div>
            </section>

        );
    }

}
