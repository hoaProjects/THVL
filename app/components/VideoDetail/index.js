import React from 'react';
import VideoTab  from './component';
import VideoPlay from '../../components/Common/player';

export default class VideoDetail extends React.Component {

    constructor() {
        super();
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
