import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function OpenRoute( { children, ...rest } ) {
	const loggedIn = useSelector( state => state.isAuthenticated );
	const path = sessionStorage.getItem( 'path' )

	return (
		<Route
			{...rest}

			exact
			render={( { location } ) =>
				loggedIn ? (
					<Redirect
						to={{
							pathname: path ? path : '/dashboard',
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
