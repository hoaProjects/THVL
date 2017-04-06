import React from 'react';
import { Link } from 'react-router';
import '../../styles/style.scss';

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
                <Link to="/tv-show" activeClassName="active">Bình Luận</Link>
            </nav>
        );
    }
}
export class Comment extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section className="commentBlock">
                <div className="box-input">
                    <textarea rows="4" cols="50">At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.</textarea>
                    <div className="box-input">
                        <p className="text">Tối thiểu 20 ký tự</p>
                        <a href="#">GỬI</a>
                    </div>
                </div>
                <div className="comment">
                    <article className="item">
                        <div className="imgBox">img</div>
                        <div className="time">9:19 sáng Thứ Năm</div>
                        <div className="content">
                            <p className="name">Mai Nguyễn</p>
                            <p className="text">Mình đang muộn hóng những tập sau của one piece nên làm ơn ra nhanh hơn nhé mình rất thích chất lượng và luôn thích xen trên đây.</p>
                        </div>
                    </article>
                </div>
            </section>
        );
    }
}
export default VideoPlay;
