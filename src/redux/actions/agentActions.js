import AgentService from '../../Services/AgentService';
import errorHandler from '../../utils/errorHandler/ErrorHandler';

const handler = new errorHandler();

export const getAgents = ( state ) => {
	const agentService = new AgentService();

	const api = agentService.getAgents( state );

	return dispatch => {
		api
			.then( res => {
				const result = res.data;
				if ( result ) {
					dispatch( { type: 'GET_AGENTS', payload: result } );
				} else {
					handler.displaySuccessError( dispatch, result );
				}
			} )
			.catch( err => {
				handler.displayError( dispatch, err );
			} );
	};
};

export const getAgentsDetails = ( state ) => {
	const agentService = new AgentService();
	const api = agentService.getAgentById( state );

	return dispatch => {
		api
			.then( res => {
				const result = res;
				if ( result.data.result ) {
					dispatch( { type: 'GET_AGENT_DETAILS', payload: result.data.result } );
				} else {
					handler.displaySuccessError( dispatch, result );
				}
			} )
			.catch( err => {
				handler.displayError( dispatch, err );
			} );
	};
};
