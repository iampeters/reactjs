export const isLoggedIn = () => {
	const authenticated = localStorage.getItem('isAuthenticated');
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

export const authentication = data => {
	if (data.username === 'peters' && data.password === '1234') {
		localStorage.setItem('isAuthenticated', true);
		return {
			type: 'AUTHENTICATE',
			payload: { username: data.username, password: '', authenticated: true }
		};
	} else {
		return {
			type: 'ERR',
			payload: { message: 'Invalid credentials' }
		};
	}
};

export const logOut = () => {
	localStorage.removeItem('isAuthenticated');
	return {
		type: 'SIGN_OUT',
		payload: false
	};
};
