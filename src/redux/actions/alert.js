const alert = {
	hasAlert: true,
	count: 0,
	hasChildren: true,
	children: []
};

export const success = state => {
	alert.children.push(state);
	++alert.count;

	return {
		type: 'SUCCESS',
		payload: alert
	};
};

export const danger = state => {
	alert.children.push(state);
	++alert.count;

	return {
		type: 'DANGER',
		payload: alert
	};
};

export const warn = state => {
	alert.children.push(state);
	++alert.count;

	return {
		type: 'WARN',
		payload: alert
	};
};

export const info = state => {
	alert.children.push(state);
	++alert.count;

	return {
		type: 'INFO',
		payload: alert
	};
};

export const dismissAlert = (state = { hasAlert: false, hasChildren: false }) => {
	alert.count = 0;
	alert.children = [];
	return {
		type: 'DISMISS',
		payload: state
	};
};
