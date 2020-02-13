import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function OpenRoute({ children, ...rest }) {
	const loggedIn = useSelector(state => state.isAuthenticated);
	// let history = useHistory();

	return (
		<Route
			{...rest}
			render={({ location }) =>
				loggedIn ? (
					<Redirect
						to={{
							pathname: '/dashboard',
							state: { from: location }
						}}
					/>
				) : (
					children
				)
			}
		/>
	);
}
