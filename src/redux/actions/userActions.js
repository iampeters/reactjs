import IdentityServer from '../../Services/Identity';
import configurationService from '../../Services/Configuration';
import errorHandler from '../../utils/errorHandler/ErrorHandler';

const handler = new errorHandler();

export const isLoggedIn = () => {
	const authenticated = sessionStorage.getItem('isAuthenticated');
	if (authenticated) {
		return {
			type: 'SIGN_IN',
			payload: true
		};
	}

	return {
		type: 'SIGN_IN',
		payload: false
	};
};

export function authenticateUser(state) {
	const endpoints = new IdentityServer();

	const data = {
		client_id: process.env.REACT_APP_CLIENT_ID,
		client_secret: process.env.REACT_APP_CLIENT_SECRET,
		grant_type: 'password',
		username: state.username,
		password: state.password
	};

	return function(dispatch) {
		const token = endpoints.login(data);

		token
			.then(res => {
				sessionStorage.setItem('token', res.data.access_token);
				sessionStorage.setItem('isAuthenticated', true);

				dispatch({
					type: 'AUTHENTICATE',
					payload: res.data.access_token
				});

				dispatch(isLoggedIn());
			})
			.catch(err => {
				return function(dispatch) {
					dispatch({
						type: 'ERR',
						payload: { message: err.message || 'Invalid credentials' }
					});
				};
			});
	};
}

export const getUser = (state = { isLoading: true }, action) => {
	const configService = new configurationService();
	const user = JSON.parse(sessionStorage.getItem('user'));
	const id = sessionStorage.getItem('username');
	const api = configService.getUser(id);

	if (user) {
		return dispatch => {
			api
				.then(res => {
					const result = res.data;
					if (result.successful) {
						sessionStorage.setItem('user', JSON.stringify(result));
							dispatch({ type: 'GET_USER', payload: result });			
					} else {
						handler.displaySuccessError(result);
					}
				})
				.catch(err => {
					handler.displayError(err);
				});

			dispatch({ type: 'GET_USER', payload: user });
		};
	} else {
		return dispatch => {
			api
				.then(res => {
					const result = res.data;
					if (result.successful) {
						sessionStorage.setItem('user', JSON.stringify(res.data.result));

						dispatch({
							type: 'GET_USER',
							payload: res.data
						});
					} else {
						handler.displaySuccessError(result);
					}
				})
				.catch(err => {
					handler.displayError(err);
				});
		};
	}
};

export const getToken = (state = {}) => {
	const endpoints = new IdentityServer();

	const data = {
		client_id: process.env.REACT_APP_CLIENT_ID,
		client_secret: process.env.REACT_APP_CLIENT_SECRET,
		grant_type: process.env.REACT_APP_GRANT_TYPE
	};

	const token = endpoints.getToken(data);
	token
		.then(res => {
			sessionStorage.setItem('token', res.data.access_token);

			return {
				type: 'GET_TOKEN',
				payload: res.data.access_token
			};
		})
		.catch(err => {
			return {
				type: 'ERR',
				payload: { message: err.message }
			};
		});

	return {
		type: 'GET_TOKEN',
		payload: state
	};
};

export const logOut = () => {
	sessionStorage.clear();
	return {
		type: 'SIGN_OUT',
		payload: false
	};
};
