import React from 'react'
import {
	success,
	warn,
	danger,
	info,
	dismissAlert
} from '../../redux/actions/alert';

class ErrorHandler {

	displaySuccessError(data) {
		const state = {
			hasAlert: true,
			header: <span> <i className='material-icons orange600 '>error</i> Error</span>,
			body: data.message || data.validationMessages,
			props: 'status-danger'
		};

		return (dispatch) => {
      dispatch(danger(state));
    };
	}

	displayError(data) {
		const state = {
			hasAlert: true,
			header: <span> <i className='material-icons orange600 '>error</i> Error</span>,
			body: 'Request failed please try again.',
			props: 'status-danger'
		};

    return dispatch => {
			dispatch(danger(state));
		};
	}

	displaySuccess(data) {
		const state = {
			hasAlert: true,
			header: <span> <i className='material-icons orange600 '>done_all</i> Great</span>,
			body: data,
			props: 'status-success'
		};

    return dispatch => {
			dispatch(success(state));
		};
  }
  
  displayWarning(data) {
		const state = {
			hasAlert: true,
			header: <span> <i className='material-icons orange600 '>warning</i> Warning</span>,
			body: data,
			props: 'status-warn'
		};

    return dispatch => {
      dispatch(warn(state));
    };
  }
  
  displayInfo(data) {
		const state = {
			hasAlert: true,
			header: <span> <i className='material-icons orange600 '>info</i> Info</span>,
			body: data,
			props: 'status-warn'
		};

    return dispatch => {
      dispatch(info(state));
    };
  }
  
  dismiss() {
    return dispatch => {
			dispatch(dismissAlert());
		};
  }
}
export default ErrorHandler;
