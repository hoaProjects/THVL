import React from 'react';
import { Link } from 'react-router';

export class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showHideMobileButton: "hidden"
        }
    }
    getInitialState=() => {
        return {"showHideMobileButton":"hidden"};
    }
    handleClick=(nav)=> {
        var css = (this.state.showHideMobileButton === "hidden") ? "show" : "hidden";
        this.setState({"showHideMobileButton":css});
    }
    render(){
        return (
            <nav className="main-nav">
                <a className={this.state.showHideMobileButton + ' mobileButton'} href="#" onClick={this.handleClick.bind(this)}></a>
                <div className="clear"></div>
                <div className={this.state.showHideMobileButton + ' mainNavigation'}>
                    <Link to="/" activeClassName="active">Trang chủ</Link>
                    <Link to="/truyen-hinh" activeClassName="active">Truyền hình</Link>
                    <Link to="/tv-show" activeClassName="active">TV SHOW</Link>
                    <Link to="/cai-luong" activeClassName="active">Cải lương</Link>
                    <Link to="/phim-viet-nam" activeClassName="active">Phim việt nam</Link>
                    <Link to="/phim-nuoc-ngoai" activeClassName="active">Phim nước ngoài</Link>
                    <Link to="/thieu-nhi" activeClassName="active">thiếu nhi</Link>
                    <Link to="/ca-nhac" activeClassName="active">ca nhạc</Link>
                </div>
            </nav>
        );
    }
}
export default Navigation;
