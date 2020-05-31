import React, { useEffect } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn } from '../redux/actions/userActions';

export default function ProtectedRoute( { children, ...rest } ) {
	const loggedIn = useSelector( state => state.isAuthenticated );
	const dispatch = useDispatch();
	const location = useLocation();

	useEffect( () => {
		// save route path
		sessionStorage.setItem( 'path', location.pathname )

		dispatch( isLoggedIn() );
	}, [dispatch, location] );

	return (
		<Route
			{...rest}
			render={( { location } ) =>
				loggedIn ? (
					children
				) : (
						<Redirect
							to={{
								pathname: '/',
								state: { from: location }
							}}
						/>
					)
			}
		/>
	);
}
