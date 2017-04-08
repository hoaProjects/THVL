import React from 'react';
import LiveSchedule from '../../components/Common/liveschedule';

export class VideoPlay extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section className="VideoPlay">
                <div className="Video"><img src="/app/assets/img/video-img.jpg" /></div>
                <div className="controlVideo">
                    <div className="background-control-video">
                        <section className="Play"><img src="/app/assets/img/icon/fa-play.png"/></section>
                        <div className="progress-active"></div>
                        <section className="Node"><img src="/app/assets/img/icon/node.png"/></section>
                        <div className="progress-nonactive"></div>
                        <div className="cls-minute">0:50/20:10</div>
                        <section className="Heart"><img src="/app/assets/img/icon/fa-heart.png"/></section>
                        <section className="Share"><img src="/app/assets/img/icon/fa-share-alt.png"/></section>
                        <section className="Cc"><img src="/app/assets/img/icon/fa-cc.png"/></section>
                        <section className="Cog"><img src="/app/assets/img/icon/fa-cog.png"/></section>
                        <section className="Volume"><img src="/app/assets/img/icon/fa-volume-up.png"/></section>
                        <section className="Zoom"><img src="/app/assets/img/icon/zoom.png"/></section>
                    </div>
                </div>
                <LiveSchedule />
            </section>
        );
    }
}

export default VideoPlay;
