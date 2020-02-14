import { combineReducers } from 'redux';
import {
	userReducer,
	errorReducer,
	profileReducer,
	userAuth,
	agentReducer
} from './auth';
import { alertReducer } from './alert';

const rootReducer = combineReducers({
	isAuthenticated: userReducer,
	authenticate: userAuth,
	error: errorReducer,
	profile: profileReducer,
	alert: alertReducer,
	agent: agentReducer
});

export default rootReducer;
