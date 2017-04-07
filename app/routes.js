import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/Home/index';
import TVShow from './components/TVShow/view';
import VideoDetail from './components/VideoDetail/view';
import Comments from './components/VideoDetail/comments';
import Info from './components/VideoDetail/info';
import Clip from './components/VideoDetail/cliphay';
import ClipAll from './components/VideoDetail/tronbo';
import RelClip from './components/VideoDetail/lienquan';
import ViewAll from './components/Category/CategoryAll';
import ViewListSlider from './components/Category/CategorySlider';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/viewall" component={ViewAll} />
		<Route path="/listcategory" component={ViewListSlider} />
		<Route path="/TV-Show" component={TVShow} />
		<Route path="/Video" component={VideoDetail}>
	      	<IndexRoute component={Comments}/>
			<Route path="/Video/info" component={Info} />
			<Route path="/Video/clip" component={Clip} />
			<Route path="/Video/clipall" component={ClipAll} />
			<Route path="/Video/relate-clip" component={RelClip} />
	    </Route>
	</Route>
);
