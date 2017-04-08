import React from 'react';
import VideoPlay from '../../components/Common/player';
import Comments from '../../components/Common/comments';
import LiveSchedule from '../../components/Common/liveschedule';
import CategoryList from './../common/SliderList';

export default class LiveHome extends React.Component {
    constructor() {
        super();
    }
    render() {

        return (
            <section className="LiveHome">
                <VideoPlay />
               
                <CategoryList categoryType = {'viewing'}/>
                <Comments />
            </section>
        );
    }

}
