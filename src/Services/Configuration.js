import axios from 'axios';
// import qs from 'qs';
import API_URL from '../APIs/Apis';
import TokenInterceptor from './TokenInterceptor';

export default class Configuration {
	interceptor = new TokenInterceptor();
	constructor() {
		this.interceptor.validateToken();
	}

	user = API_URL.configuration + 'api/administrator/';
	config = API_URL.configuration + 'api/';
	dashboard = API_URL.configuration + 'api/';

	token = sessionStorage.getItem('token');

	async getUser(id) {
		try {
			const response = await axios.get(this.user + `find/${id}`, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${this.token}`
				}
			});

			return response;
		} catch (err) {
			return err;
		}
	}
}
