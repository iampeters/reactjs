import axios from 'axios';
// import qs from 'qs';
import API_URL from '../APIs/Apis';
import TokenInterceptor from './TokenInterceptor';

export default class AgentService {
	interceptor = new TokenInterceptor();
	constructor() {
		this.interceptor.validateToken();
	}

	user = API_URL.agent + 'administrator/';
	config = API_URL.agent;
	dashboard = API_URL.agent + 'dashboard/';
	agent = API_URL.agent + 'agent/';

	token = sessionStorage.getItem('token');

	async getUser(id) {
		try {
			const response = await axios.get(this.user + `find/${id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${this.token}`
				}
			});

			return response;
		} catch (err) {
			return err;
		}
	}

	async getAgents(data) {
		try {
			const response = await axios.get(this.agent + `count/${data.page}/${data.pageSize}/${data.whereCondition}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${this.token}`
				}
			});

			return response;
		} catch (err) {
			return err;
		}
	}

	async getAgentById(id) {
		try {
			const response = await axios.get(this.agent + `getDetails/${id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${this.token}`
				}
			});

			return response;
		} catch (err) {
			return err;
		}
	}
}
