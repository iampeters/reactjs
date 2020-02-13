export const alertReducer = (
	state = { hasAlert: false, hasChildren: false },
	action
) => {
	switch (action.type) {
		case 'SUCCESS': {
			return action.payload;
		}

		case 'WARN': {
			return action.payload;
		}

		case 'DANGER': {
			return action.payload;
		}

		case 'INFO': {
			return action.payload;
		}

		case 'DISMISS': {
			return action.payload;
		}

		default:
			return state;
	}
};
