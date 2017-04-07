import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/Home/index';
import TVShow from './components/TVShow/index';
import LiveHome from './components/live/index';
import VideoDetail from './components/VideoDetail/index';
import Comments from './components/VideoDetail/comments';
import Info from './components/VideoDetail/info';
import Clip from './components/VideoDetail/cliphay';
import ClipAll from './components/VideoDetail/tronbo';
import RelClip from './components/VideoDetail/lienquan';
import ViewAll from './components/Category/CategoryAll';
import Login from './components/Login/login';
import Account from './components/popups/account/index.js';
import AccountInfor from './components/popups/account/infor.js';
import AccountTrans from './components/popups/account/transfer.js';
import ViewListSlider from './components/Category/CategorySlider';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/Live" component={LiveHome} />
		<Route path="/viewall" component={ViewAll} />
		<Route path="/listcategory" component={ViewListSlider} />
		<Route path="/TV-Show" component={TVShow} />
		<Route path="/login" component={Login} />
		<Route path="/account" component={Account}>
			<IndexRoute component={AccountInfor}/>
			<Route path="/account/info" component={AccountInfor} />
			<Route path="/account/tran" component={AccountTrans} />
			<Route path="/account/pay" component={ClipAll} />
			<Route path="/account/inform" component={RelClip} />
		</Route>
		<Route path="/Video" component={VideoDetail}>
	      	<IndexRoute component={Comments}/>
			<Route path="/Video/info" component={Info} />
			<Route path="/Video/clip" component={Clip} />
			<Route path="/Video/clipall" component={ClipAll} />
			<Route path="/Video/relate-clip" component={RelClip} />
	    </Route>

	</Route>
);
