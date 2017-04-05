import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/Home/index';
import ViewAllCategory from './components/ViewAllCategory/View';
import ViewListCategory from './components/ViewAllCategory/List';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/viewall" component={ViewAllCategory} />
		<Route path="/listcategory" component={ViewListCategory} />
	</Route>
);
