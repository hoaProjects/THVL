import React from 'react';
import VideoPlay from '../../components/Common/player';
import Comments from '../../components/Common/comments';
import CategoryList from './../common/SliderList';
import TitleSlider from '../../components/Common/titleList';
import SliderListLive from '../../components/Common/sliderListLive';
import Liveschedule from '../../components/Common/Liveschedule';

export default class LiveHome extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
            [
                { 'src': '../app/assets/img/live/THVL1HD.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-2-HD.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Cai-Luong.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Ca-Nhac.png'},
                { 'src': '../app/assets/img/live/Vinh-Long-Dien-Anh.png'},
                { 'src': '../app/assets/img/live/HTV-1.png'},
                { 'src': '../app/assets/img/live/HTV-2.png'},
                { 'src': '../app/assets/img/live/HTV-3.png'},
                { 'src': '../app/assets/img/live/HTV-4.png'},
                { 'src': '../app/assets/img/live/HTV-7.png'},
                { 'src': '../app/assets/img/live/HTV-2.png'},
            ]
        }
    }
    render() {

        return (
            <section className="LiveHome">
                <div className="innerVideoLive">
                    <VideoPlay  />
                    <Liveschedule />
                </div>

                <SliderListLive data={this.state.data} />
                <Comments />
            </section>
        );
    }

}
