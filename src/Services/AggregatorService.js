import axios from 'axios';
// import qs from 'qs';
import API_URL from '../APIs/Apis';
import TokenInterceptor from './TokenInterceptor';

export default class AggregatorService {
  interceptor = new TokenInterceptor();
  constructor() {
    this.interceptor.validateToken();
  }

  user = API_URL.configuration + 'administrator/';
  aggregator = API_URL.aggregator + 'Aggregator/';

  token = sessionStorage.getItem( 'token' );

  async getUser( id ) {
    try {
      const response = await axios.get( this.user + `find/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      } );

      return response;
    } catch ( err ) {
      return err;
    }
  }

  async getList( data ) {
    try {
      const response = await axios.get( this.aggregator + `count/${data.page}/${data.pageSize}/${data.whereCondition}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
        }
      } );

      return response;
    } catch ( err ) {
      return err;
    }
  }

  async getDetailsById( id ) {
    try {
      const response = await axios.get( this.aggregator + `getDetails/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
        }
      } );

      return response;
    } catch ( err ) {
      return err;
    }
  }
}
