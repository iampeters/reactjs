import { combineReducers } from 'redux';
import {
	userReducer,
	errorReducer,
	profileReducer,
	userAuth,
	agentReducer,
	aggregatorReducer,
	listReducer,
	detailsReducer,
	adminReducer
} from './auth';
import { alertReducer } from './alert';
import { viewReducer, geoJsonReducer } from './configuration';

const rootReducer = combineReducers({
	isAuthenticated: userReducer,
	authenticate: userAuth,
	error: errorReducer,
	profile: profileReducer,
	alert: alertReducer,
	agent: agentReducer,
	aggregator: aggregatorReducer,
	list: listReducer,
	details: detailsReducer,
	admin: adminReducer,
	wideView: viewReducer,
	geoJSON: geoJsonReducer
});

export default rootReducer;
