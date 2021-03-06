import React from 'react';
import VideoTrailer from '../../../components/Common/player';

export default class Trailer extends React.Component {

    constructor() {
        super();
        this.state={

        }
    }
    popupHide=()=>{
        var element = document.getElementById("TrailerPopup");
        var activeborder = document.getElementsByClassName("activeBorder");
        activeborder[0].classList.remove("activeBorder");
        element.classList.remove("m-fadeIn");
        for (var i = 0; i < itemList.length; i++){
            itemList[i].classList.remove("activeItem");
        }
    }
    render() {

        return (
            <section className="Popup-Account Trailer" id="TrailerPopup">
                <div className="bg_overlay" onClick={this.popupHide.bind(this)}></div>
                <div className="contentPopup">
                    <div className="btn_close" onClick={this.popupHide.bind(this)}><img src="/app/assets/img/icon/btn_close_video.png"/></div>
                    <VideoTrailer />
                </div>
            </section>
        );
    }

}
