import React from 'react';
import VideoPlay from '../../components/Common/player';
import Comments from '../../components/Common/comments';
import CategoryList from './../common/SliderList';

export default class LiveHome extends React.Component {
    constructor() {
        super();
    }
    render() {

        return (
            <section className="LiveHome">
                <VideoPlay />
                <div className="head">
                    <h3 className="title">LỊCH PHÁT SÓNG</h3>
                    <a href="/listcategory" className="viewall">Hôm nay</a>
                </div>
                <CategoryList categoryType = {'viewing'}/>
                <Comments />
            </section>
        );
    }

}
