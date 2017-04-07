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


export class Comments extends React.Component {
    constructor() {
        super();
        this.state={
            data: Photo
        }
    }
    render() {
        return (
            <section className="commentBlock">
                <div className="box-input">
                    <textarea rows="4" cols="50" placeholder="Nhập nội dung bình luận..."></textarea>
                    <div className="control">
                        <p className="text">Tối thiểu 20 ký tự</p>
                        <a href="#" className="btn"><span>GỬI</span></a>
                    </div>
                </div>
                <div className="comment">
                    {this.state.data.map((item, i) => (<ItemComment key={i} photo={item.photo} Name= {item.Name} text={item.text} time={item.time}  />))}
                </div>
            </section>
        );
    }
}

export class Info extends React.Component {

    render() {

        return (
            <article className="infoBlock">

            </article>
        );
    }
}

export default VideoPlay;
