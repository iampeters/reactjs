const isAuthenticated = localStorage.getItem('isAuthenticated');

export const userReducer = (state = isAuthenticated, action) => {
	switch (action.type) {
		case 'SIGN_IN': {
			return (state = action.payload);
		}

		case 'SIGN_OUT': {
			return (state = action.payload);
		}

		default:
			return state;
	}
};

export const errorReducer = (state = '', action) => {
	switch (action.type) {
		case 'ERR': {
			return action.payload;
		}

		default:
			return state;
	}
};
