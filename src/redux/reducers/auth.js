const isAuthenticated = localStorage.getItem( 'isAuthenticated' );

export const userReducer = ( state = isAuthenticated, action ) => {
	switch ( action.type ) {
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

export const userAuth = ( state = { isLoading: true }, action ) => {
	switch ( action.type ) {
		case 'AUTHENTICATE': {
			return action.payload;
		}

		default:
			return state;
	}
};

export const profileReducer = ( state = { isLoading: true }, action ) => {
	switch ( action.type ) {
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

export const agentReducer = ( state = { isLoading: true }, action ) => {
	switch ( action.type ) {
		case 'GET_AGENTS': {
			return action.payload;
		}

		case 'GET_AGENT_DETAILS': {
			return action.payload;
		}

		default:
			return state;
	}
};

export const aggregatorReducer = ( state = { isLoading: true }, action ) => {
	switch ( action.type ) {
		case 'GET_AGGREGATORS': {
			return action.payload;
		}

		case 'GET_AGGREGATORS_DETAILS': {
			return action.payload;
		}

		default:
			return state;
	}
};

export const adminReducer = ( state = { isLoading: true }, action ) => {
	switch ( action.type ) {
		case 'GET_ADMINS': {
			return action.payload;
		}

		default:
			return state;
	}
};

export const tellerReducer = ( state = { isLoading: true }, action ) => {
	switch ( action.type ) {
		case 'GET_TELLERS': {
			return action.payload;
		}

		default:
			return state;
	}
};

export const merchantReducer = ( state = { isLoading: true }, action ) => {
	switch ( action.type ) {
		case 'GET_MERCHANTS': {
			return action.payload;
		}

		default:
			return state;
	}
};

export const listReducer = ( state = { isLoading: true }, action ) => {
	switch ( action.type ) {
		case 'GET_LIST': {
			return action.payload;
		}

		default:
			return state;
	}
};

export const detailsReducer = ( state = { isLoading: true }, action ) => {
	switch ( action.type ) {
		case 'GET_DETAILS': {
			return action.payload;
		}

		default:
			return state;
	}
};



export const errorReducer = ( state = { message: '' }, action ) => {
	switch ( action.type ) {
		case 'ERR': {
			return action.payload;
		}

		default:
			return state;
	}
};
