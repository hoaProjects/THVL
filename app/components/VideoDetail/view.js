import React from 'react';
import VideoPlay,{VideoTab} from './component';

export default class VideoDetail extends React.Component {

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
                { this.props.children }
            </section>
        );
    }

}
