import React from 'react';
import NavigationTop from './NavigationTop';

const Header = () =>
  <header>
        <div className="wrap">
            <a href="#" className="logo"><img src="../app/assets/img/logo.png" /></a>
            <NavigationTop />
        </div>
  </header>;
export default Header;
