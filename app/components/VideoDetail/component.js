import React from 'react';
import { Link } from 'react-router';

export class VideoTab extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <nav className="main-nav video">
                <Link to="/Video/info" activeClassName="active">Thông tin</Link>
                <Link to="/Video/clip" activeClassName="active">Clip hay</Link>
                <Link to="/Video/clipall" activeClassName="active">Trọn bộ</Link>
                <Link to="/Video/relate-clip" activeClassName="active">Liên quan</Link>
                <Link to="/Video" activeClassName="active">Bình Luận</Link>
            </nav>
        );
    }
}
export default VideoTab;
