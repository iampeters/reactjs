import React from 'react';
import AgentService from '../../Services/AgentService';
import errorHandler from '../../utils/errorHandler/ErrorHandler';
import { danger } from './alert';

const handler = new errorHandler();

export const getAgents = (state) => {
	const agentService = new AgentService();

	const api = agentService.getAgents(state);

	return dispatch => {
		api
			.then(res => {
				const result = res.data;
				if (result) {
					dispatch({ type: 'GET_AGENTS', payload: result });
				} else {
          handler.displaySuccessError(dispatch, result);
				}
			})
			.catch(err => {
				handler.displayError(dispatch, err);
			});

		dispatch({ type: 'GET_AGENTS', payload: state });
	};
};
