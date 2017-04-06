import React from 'react';
import VideoPlay,{VideoTab,Comments} from './component';

export default class TVShow extends React.Component {

    constructor() {
        super();
        this.state={
            data: 'Video'
        }
    }
    render() {

        return (
            <section className="VideoDetail">
                <VideoPlay />
                <VideoTab />
                <Comments />
            </section>
        );
    }

}
