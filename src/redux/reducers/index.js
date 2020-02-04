import { combineReducers } from 'redux';
import { userReducer, errorReducer } from './auth';

const rootReducer = combineReducers({
	isAuthenticated: userReducer,
	error: errorReducer
});

export default rootReducer;
