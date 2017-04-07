import React from 'react';
import { Link } from 'react-router';
import PhotoData from '../../components/json/comment';
import '../../styles/style.scss';
const Photo=PhotoData.data;

export class VideoPlay extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section className="VideoPlay">
                <div className="Video"><img src="/app/assets/img/video_img.jpg" /></div>
            </section>
        );
    }
}
export class VideoTab extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <nav className="main-nav video">
                <Link to="/" activeClassName="active">Thông tin</Link>
                <Link to="/truyen-hinh" activeClassName="active">Clip hay</Link>
                <Link to="/tv-show" activeClassName="active">Trộn bộ</Link>
                <Link to="/tv-show" activeClassName="active">Liên quan</Link>
                <Link to="/Video/comment" activeClassName="active">Bình Luận</Link>
            </nav>
        );
    }
}
export default VideoPlay;
