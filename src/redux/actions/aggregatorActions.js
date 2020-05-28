import errorHandler from '../../utils/errorHandler/ErrorHandler';
import AggregatorService from '../../Services/AggregatorService';

const handler = new errorHandler();

export const getAggregators = ( state ) => {
  const service = new AggregatorService();

  const api = service.getList( state );

  return dispatch => {
    api
      .then( res => {
        const result = res.data;
        if ( result ) {
          dispatch( { type: 'GET_AGGREGATORS', payload: result } );
        } else {
          handler.displaySuccessError( dispatch, result );
        }
      } )
      .catch( err => {
        handler.displayError( dispatch, err );
      } );

    dispatch( { type: 'GET_AGGREGATORS', payload: state } );
  };
};

export const getAggregatorsDetails = ( state ) => {
  const service = new AggregatorService();

  const api = service.getDetailsById( state );

  return dispatch => {
    api
      .then( res => {
        const result = res.data;
        if ( result ) {
          dispatch( { type: 'GET_AGGREGATOR_DETAILS', payload: result } );
        } else {
          handler.displaySuccessError( dispatch, result );
        }
      } )
      .catch( err => {
        handler.displayError( dispatch, err );
      } );

    dispatch( { type: 'GET_AGGREGATOR_DETAILS', payload: state } );
  };
};