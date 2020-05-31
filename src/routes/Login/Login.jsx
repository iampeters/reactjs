import React, { useState, useEffect } from 'react';
import './Login.scss';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser, isLoggedIn } from '../../redux/actions/userActions';

export default function Auth( props ) {
	const err = useSelector( state => state.error );
	const [username, setUsername] = useState( '' );
	const [password, setPassword] = useState( '' );
	const [error, setError] = useState( err.message );
	const disabled = username.length > 0 && password.length >= 4;

	const dispatch = useDispatch();

	useEffect( () => {
		dispatch( isLoggedIn() );

		if ( err.message !== '' ) {
			setError( err.message );
			enableButton()
		}
	}, [setError, dispatch, err] );

	const handleSubmit = e => {
		e.preventDefault();
		setError('');

		const btn = document.getElementById( 'submitBtn' );
		btn.disabled = true;
		btn.innerHTML = '<i className="fas fa-spinner fa-spin text-white"></i> Please wait...';

		if ( username !== '' && password !== '' ) {
			dispatch( authenticateUser( { username, password } ) );

		} else {
			btn.innerHTML = 'Login';
			btn.disabled = false;
		}
	};

	const enableButton = () => {
		const btn = document.getElementById( 'submitBtn' );
		btn.innerHTML = 'Login';
		btn.disabled = false;
	}

	return (
		<div className="col-md-4 ml-auto mr-auto" style={{ marginTop: 100 }}>
			<form onSubmit={handleSubmit}>
				<legend className="mb-3 text-bold text-color">Sign In</legend>

				<div className="form-group">
					<TextField
						id="username"
						label="Username"
						variant="outlined"
						className="form-control"
						placeholder="username"
						required={true}
						value={username}
						autoComplete='on'
						onChange={e => setUsername( e.target.value )}
					/>
				</div>

				<div className="form-group mt-5">
					<TextField
						id="password"
						label="Password"
						variant="outlined"
						className="form-control"
						placeholder="Password"
						type="password"
						required={true}
						value={password}
						onChange={e => setPassword( e.target.value )}
						autoComplete='off'
					/>
				</div>

				<div className="form-group mt-5">
					<button
						type="submit"
						id="submitBtn"
						disabled={!disabled}
						className="btn btn-primary bg-color border-blue w-100"
					>
						Login
					</button>

					{err ? (
						<span className="text-danger mt-2">{error}</span>
					) : (
							''
						)}
				</div>
			</form>
		</div>
	);
}
