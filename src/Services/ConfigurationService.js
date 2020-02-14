import axios from 'axios';
// import qs from 'qs';
import API_URL from '../APIs/Apis';
import TokenInterceptor from './TokenInterceptor';

export default class ConfigurationService {
	interceptor = new TokenInterceptor();
	constructor() {
		this.interceptor.validateToken();
	}

	user = API_URL.configuration + 'administrator/';
	config = API_URL.configuration + '';
	dashboard = API_URL.configuration + 'dashboard';

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
