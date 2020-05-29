import './Alert.scss';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dismissAlert } from '../../redux/actions/alert';

export default function Alert( { header, body, props } ) {
	const alert = useSelector( state => state.alert );
	const dispatch = useDispatch();
	// const audio = new Audio('../../sounds/alert.mp3');

	const dismiss = () => {
		dispatch( dismissAlert() );
	};

	useEffect( () => {
		if ( alert.hasAlert ) {
			setTimeout( () => {
				dismiss();
			}, 10000 );
		}

		return () => {
			dispatch( dismissAlert() )
		}
	} );


	if ( alert.hasAlert ) {
		return (
			<div
				className="notification-right notification-holder animated slideInRight faster pointer mb-3"
				id="dismiss"
			>
				<div className={'pt-2 pb-2 p-2 border-radius-10 ' + props}>
					<div className="row w-100 m-0 pt-2 pb-2">
						<div className="col-2 p-0">
							<div
								className="row m-0 justify-content-center align-content-center"
								style={{ height: '100%' }}
							>
								<i className='material-icons orange600'>notifications_active</i>
								{/* <i className="fas fa-bell" style={{ fontSize: '24px' }}></i> */}
							</div>
						</div>
						<div className="col">
							<h5 className="text-center">{header}</h5>
							<p className="small text-center mb-1 text-bold">{body}</p>
						</div>

						<div className="col-2 p-0 pointer" onClick={dismiss}>
							<div
								className="row m-0 justify-content-center align-content-center"
								style={{ height: '100%' }}
							>
								<i className='material-icons orange600'>close</i>
								{/* <i className="fas fa-times" style={{ fontSize: '16px' }}></i> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
