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
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll= (event) => {
        if(document.getElementsByClassName("slickSlider")){
            var ele = document.getElementsByClassName("slickSlider")[0].clientHeight;
            let scrollTop = event.srcElement.body.scrollTop;
            if (scrollTop > ele - 60){
                document.getElementsByTagName("header")[0].classList.add("solid");
                document.getElementsByClassName("mainNavigation")[0].classList.add("fixed");
            }else{
                document.getElementsByTagName("header")[0].classList.remove("solid");
                document.getElementsByClassName("mainNavigation")[0].classList.remove("fixed");
            }
        }
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
