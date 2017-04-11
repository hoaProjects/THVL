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
   popupHide=()=>{
       var element = document.getElementById("infoVideoPopup");
       var element1 = document.getElementById("TrailerPopup");
       element1.className += " m-fadeIn";
       element.classList.remove("m-fadeIn");
   }
    render() {
        return (
            <section className="videoDetailPopup" id="infoVideoPopup" ref="container">
                <Info />
                <div className="iconPlay"></div>
                <div className="trailerButton" onClick={this.popupHide.bind(this)}><span>Xem Trailer</span></div>
            </section>

        );
    }

}
