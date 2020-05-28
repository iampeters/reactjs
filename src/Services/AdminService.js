import axios from 'axios';
// import qs from 'qs';
import API_URL from '../APIs/Apis';
import TokenInterceptor from './TokenInterceptor';

export default class AdminService {
  interceptor = new TokenInterceptor();
  constructor() {
    this.interceptor.validateToken();
  }

  admin = API_URL.configuration + 'administrator/';
  config = API_URL.agent;
  dashboard = API_URL.agent + 'dashboard/';

  token = sessionStorage.getItem( 'token' );

  // async getUser( id ) {
  //   try {
  //     const response = await axios.get( this.user + `find/${id}`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${this.token}`
  //       }
  //     } );

  //     return response;
  //   } catch ( err ) {
  //     return err;
  //   }
  // }

  async getList( data ) {
    try {
      const response = await axios.get( this.admin + `count/${data.page}/${data.pageSize}/${data.whereCondition}`, {
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

  async getDetails( id ) {
    try {
      const response = await axios.get( this.admin + `find/${id}`, {
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
