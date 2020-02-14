import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './fonts/Avenir/Avenir-Medium.ttf';
import './fonts/Avenir/AvenirLTStd-Book.otf';
import './fonts/Avenir/AvenirLTStd-Light.otf';
import './fonts/Avenir/AvenirLTStd-LightOblique.otf';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

require('dotenv').config();

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
