import React, { useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn } from '../redux/actions/userActions';

export default function ProtectedRoute({ children, ...rest }) {
	const loggedIn = useSelector(state => state.isAuthenticated);
	let history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(isLoggedIn());
	});

	return (
		<Route
			{...rest}
			render={({ location }) =>
				loggedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: history.push('/'),
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}
