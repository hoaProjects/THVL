import React from 'react';
import '../../styles/player.scss';

export class VideoPlay extends React.Component {
    constructor(props) {
        super(props);
        this.getVideo=this.getVideo.bind(this);
    }
    componentWillMount() {
        this.getVideo();
    }
    componentDidMount(){
    }
    componentWillUpdate(){

    }
    getVideo=()=>{
        var x = document.getElementById("video");

    }
    ///app/assets/img/avatar.png
    render() {
        return (
            <section className="VideoPlay">
                <figure id="videoContainer" data-fullscreen="false">
                    <video id="video" preload="metadata">
            			<source src="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" type="video/mp4" />
            			<source src="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.webm" type="video/webm" />
            			<source src="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.ogg" type="video/ogg" />
            		</video>
                    <div id="video-controls" className="controls player" data-state="visible">
            			<button id="playpause" type="button" data-state="play" data-tip="Play/Pause">Play/Pause</button>
            			<div className="progress ">
            				<div id="progress">
            					<span id="progress-bar" with="8%">
                                    <div className="progress-button"></div>
                                </span>
            				</div>
            			</div>
                        <div className="time">
                            <span className="ctime">0:25</span>
                            <span className="stime"> / </span>
                            <span className="ttime">0:26</span>
                        </div>
                        <button id="heart" type="button" data-state="heart">heart</button>
                        <button id="link" type="button" data-state="link">link</button>
                        <button id="cc" type="button" data-state="cc">cc</button>
                        <button id="config" type="button" data-state="config">config</button>
            			<button id="mute" type="button" data-state="mute">Mute/Unmute</button>
            			<button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
            		</div>
            	</figure>
            </section>
        );
    }
}

export default VideoPlay;
