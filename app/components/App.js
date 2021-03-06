import React, { PropTypes } from 'react';
import Header from '../components/Common/Header';
import Navigation from '../components/Common/Navigation';
import Footer from '../components/Common/Footer';
import SlickSlider from '../components/Common/SlickSlider';
import PopupControl from '../components/popups/index';

import '../styles/style.scss';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        let pathname=this.props.location.pathname
        let pageclass='container home';
        if(pathname!='/')
            pageclass='container '+pathname.replace("/", "")
        return (
            <main className={pageclass}>
                <Header />
                {pathname=='/' ? <SlickSlider /> : ''}
                <Navigation />
                { this.props.children }
                <Footer />
                <PopupControl />
            </main>
        );
    }
}

export default App;
