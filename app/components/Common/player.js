import React from 'react';
import '../../styles/player.scss';

export class VideoPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            classActive: 'toolBar none'
        }

        this.click=this.click.bind(this);
        this.hideConfig=this.hideConfig.bind(this);
    }
    componentWillMount() {

    }
    componentDidMount(){
    }
    componentWillUpdate(){

    }
    showConfig=(e)=>{

    }
    click=()=> {
        if (this.state.classActive === 'toolBar none'){
            this.setState({classActive: 'toolBar active'});
        } else {
            this.setState({classActive: 'toolBar none'});
        }
    }
    hideConfig=()=> {
        this.setState({classActive: 'toolBar none'});
    }
    ///app/assets/img/avatar.png
    render() {
        return (
            <section className="VideoPlay">
                <div className="advertisement"></div>
                <figure id="videoContainer" data-fullscreen="false">
                    <video id="video" preload="metadata">
            			<source src="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" type="video/mp4" />
            			<source src="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.webm" type="video/webm" />
            			<source src="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.ogg" type="video/ogg" />
            		</video>
                    <div id="video-controls" className="controls player" data-state="visible">
                        <section className="playpause">
                            <button id="playpause" type="button" data-state="play" data-tip="Play/Pause">Play/Pause</button>
                        </section >

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
                        <section className="heart">
                            <button id="heart" type="button" data-state="heart">heart</button>
                        </section >
                        <section className="link">
                            <button id="link" type="button" data-state="link">link</button>
                        </section >
                        <section className="cc">
                            <button id="cc" type="button" data-state="cc">cc</button>
                        </section >

                        <section className="config">
                            <div className={this.state.classActive}>
                                <a  onClick={this.hideConfig}>144</a>
                                <a  onClick={this.hideConfighideConfig}>288</a>
                                <a  onClick={this.hideConfig}>432</a>
                                <a  onClick={this.hideConfig}>720</a>
                                <a  onClick={this.hideConfig}>Auto</a>
                            </div>
                            <button id="config" type="button" data-state="config" onClick={this.click}>config</button>
                        </section >
                        <section className="mute">
                            <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
                        </section >
                        <section className="fs">
                            <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
                        </section>
            		</div>
            	</figure>
                <div className="advertisement adver02"></div>
                <div className="clear"></div>
            </section>
        );
    }
}

export default VideoPlay;
