import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';
import loggerMiddleware from '../utils/middleware/logger';
import monitorReducersEnhancer from '../utils/enhancers/monitorReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(preloadedState) {
	let middlewares = [];
	let composedEnhancers = [];
	if (process.env.NODE_ENV === 'development') {
		middlewares = [loggerMiddleware, thunkMiddleware];
	} else {
		middlewares = [thunkMiddleware];
	}

	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer, monitorReducersEnhancer];

	if (process.env.NODE_ENV === 'development') {
    composedEnhancers = composeWithDevTools(...enhancers);
	} else {
    composedEnhancers = compose(...enhancers);
  }

	const store = createStore(
		rootReducer,
		preloadedState,
		composedEnhancers
		// + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
}
