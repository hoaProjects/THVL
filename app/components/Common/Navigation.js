import React from 'react';
import { Link } from 'react-router';

const Navigation = () =>
  <nav className="main-nav">
      <Link to="/" activeClassName="active">Trang chủ</Link>
      <Link to="/truyen-hinh" activeClassName="active">Truyền hình</Link>
      <Link to="/tv-show" activeClassName="active">TV SHOW</Link>
      <Link to="/cai-luong" activeClassName="active">Cải lương</Link>
      <Link to="/phim-viet-nam" activeClassName="active">Phim việt nam</Link>
      <Link to="/phim-nuoc-ngoai" activeClassName="active">Phim nước ngoài</Link>
      <Link to="/thieu-nhi" activeClassName="active">thiếu nhi</Link>
      <Link to="/ca-nhac" activeClassName="active">ca nhạc</Link>
  </nav>;
export default Navigation;
