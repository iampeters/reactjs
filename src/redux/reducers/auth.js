const isAuthenticated = localStorage.getItem('isAuthenticated');

export const userReducer = (state = isAuthenticated, action) => {
	switch (action.type) {
		case 'SIGN_IN': {
			return action.payload;
		}

		case 'SIGN_OUT': {
			return action.payload;
		}

		default:
			return state;
	}
};

export const userAuth = (state = {isLoading: true}, action) => {
	switch (action.type) {
		
		case 'AUTHENTICATE': {
			return action.payload;
		}

		default:
			return state;
	}
};

export const profileReducer = (state = { isLoading: true }, action) => {
	switch (action.type) {
		case 'GET_USER': {
			return action.payload;
		}

		case 'GET_TOKEN': {
			return action.payload;
		}

		default:
			return state;
	}
};

export const agentReducer = (state = { isLoading: true }, action) => {
	switch (action.type) {
		case 'GET_AGENTS': {
			return action.payload;
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
