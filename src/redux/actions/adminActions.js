import errorHandler from '../../utils/errorHandler/ErrorHandler';
import AdminService from '../../Services/AdminService';


const handler = new errorHandler();

export const getAdmins = ( state ) => {
  const service = new AdminService();

  const api = service.getList( state );

  return dispatch => {
    api
      .then( res => {
        const result = res.data;
        if ( result ) {
          dispatch( { type: 'GET_ADMINS', payload: result } );
        } else {
          handler.displaySuccessError( dispatch, result );
        }
      } )
      .catch( err => {
        handler.displayError( dispatch, err );
      } );

    dispatch( { type: 'GET_ADMINS', payload: state } );
  };
};

export const getAdminsDetails = ( state ) => {
  const service = new AdminService();

  const api = service.getDetails( state );

  return dispatch => {
    api
      .then( res => {
        const result = res.data;
        if ( result ) {
          dispatch( { type: 'GET_ADMIN_DETAILS', payload: result } );
        } else {
          handler.displaySuccessError( dispatch, result );
        }
      } )
      .catch( err => {
        handler.displayError( dispatch, err );
      } );

    dispatch( { type: 'GET_ADMIN_DETAILS', payload: state } );
  };
};