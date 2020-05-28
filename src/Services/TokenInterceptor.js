import * as jwt from 'jsonwebtoken';
import { logOut } from '../redux/actions/userActions';

export default class TokenInterceptor {
	token = sessionStorage.getItem('token');

	validateToken() {
		const decodedToken = jwt.decode(this.token);

    sessionStorage.setItem('return_url', window.location.href);

		if (decodedToken && Date.now() >= decodedToken.exp * 1000) {
			sessionStorage.clear();
			return dispatch => {
				dispatch(logOut());
			};
		}
	}
}
