import React from 'react';
import './Profile.css';
import { decrement, increment } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

export default function Profile(props) {

	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-12 mt-3">
					<span className="btn btn-warning small mr-2 p-2">{counter}</span>
					<button
						className="btn btn-primary mr-2"
						onClick={() => dispatch(increment())}>+</button>
					<button
						className="btn btn-danger"
						onClick={() => dispatch(decrement())}>-</button>
				</div>
			</div>
		</div>
	);
}
