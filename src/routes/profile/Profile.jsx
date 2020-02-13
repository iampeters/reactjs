import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { danger, success, warn, info } from '../../redux/actions/alert';
import './Profile.scss';

export default function Profile(props) {
	const user = useSelector(state => state.profile);
	const dispatch = useDispatch();

	const handleAlert = () => {
		const state = {
			hasAlert: true,
			header: 'Some Alert',
			body: 'Request failed please try again.',
			props: 'status-success'
		};

		dispatch(success(state));
	};

	return (
		<div className="border-radius bg-white p-5 box-shadow-mild">
			<button onClick={handleAlert} className="btn status-success">
				Alert success
			</button>

			<button
				onClick={() =>
					dispatch(
						warn({
							hasAlert: true,
							header: 'Some Alert',
							body: 'Request failed please try again.',
							props: 'status-warn'
						})
					)
				}
				className="btn status-warn ml-3"
			>
				Alert Warn
			</button>

			<button
				onClick={() =>
					dispatch(
						info({
							hasAlert: true,
							header: 'Some Alert',
							body: 'Request failed please try again.',
							props: 'status-info'
						})
					)
				}
				className="btn status-info ml-3"
			>
				Alert Info
			</button>

			<button
				onClick={() =>
					dispatch(
						danger({
							hasAlert: true,
							header: 'Some Alert',
							body: 'Request failed please try again.',
							props: 'status-danger'
						})
					)
				}
				className="btn status-danger ml-3"
			>
				Alert Danger
			</button>
		</div>
	);
}
