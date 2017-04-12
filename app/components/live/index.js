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
                { 'src': '../app/assets/img/live/live-tv01.jpg'},
                { 'src': '../app/assets/img/live/live-tv02.jpg'},
                { 'src': '../app/assets/img/live/live-tv03.jpg'},
                { 'src': '../app/assets/img/live/live-tv04.jpg'},
                { 'src': '../app/assets/img/live/allLive.jpg'},
                { 'src': '../app/assets/img/live/live-tv01.jpg'},
                { 'src': '../app/assets/img/live/live-tv02.jpg'},
                { 'src': '../app/assets/img/live/live-tv03.jpg'},
                { 'src': '../app/assets/img/live/live-tv04.jpg'},
                { 'src': '../app/assets/img/live/allLive.jpg'}
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
