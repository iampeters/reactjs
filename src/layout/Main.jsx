import React from 'react';
import './layout.css';
import routes from '../routes';
import { Switch, Route } from 'react-router-dom';

function Main() {
	return (
		<Switch>
			{routes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					exact={route.exact}
					children={<route.component />}
				/>
			))}
		</Switch>
	);
}

export default Main;
