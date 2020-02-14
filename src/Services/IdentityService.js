import axios from 'axios';
import qs from 'qs';
import API_URL from '../APIs/Apis';
import TokenInterceptor from './TokenInterceptor';

export default class IdentityServer {
	interceptor = new TokenInterceptor();
	constructor() {
		this.interceptor.validateToken();
	}

	token = API_URL.identity + 'connect/token';
	password = API_URL.identity + 'api/account/password/change/';
	recovery = API_URL.identity + 'api/';

	tokn = sessionStorage.getItem('token');

	async login(data) {
		try {
			const response = await axios.post(this.token, qs.stringify(data), {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			});

			return response;
		} catch (err) {
			return err;
		}
	}

	async getToken(data) {
		try {
			const response = await axios.post(this.token, qs.stringify(data), {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			});

			return response;
		} catch (err) {
			return err;
		}
	}
}
