import React, { useState, useEffect } from 'react';
import './Login.css';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { authentication, isLoggedIn } from '../../redux/actions/userActions';

// import { useInput } from '../../hooks/input-hook';

export default function Auth(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const disabled = username.length > 0 && password.length >= 4;

	const dispatch = useDispatch();
	const error = useSelector(state => state.error);

	useEffect(() => {
		dispatch(isLoggedIn());
	});

	const handleSubmit = e => {
		e.preventDefault();

		const btn = document.getElementById('submitBtn');
		btn.disabled = true;
		btn.innerHTML = 'Please wait...';
		if (username !== '' && password !== '') {
			dispatch(authentication({ username, password }));
			dispatch(isLoggedIn());
		} else {
			// message = 'Field is required';
		}
	};

	return (
		<div className="col-md-4 ml-auto mr-auto" style={{ marginTop: 100 }}>
			<form onSubmit={handleSubmit}>
				<legend className="mb-3">SIGN IN</legend>

				<div className="form-group">
					<TextField
						id="username"
						label="Username"
						variant="outlined"
						className="form-control"
						placeholder="username"
						required={true}
						value={username}
						onChange={e => setUsername(e.target.value)}
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
						onChange={e => setPassword(e.target.value)}
					/>
				</div>

				<div className="form-group mt-5">
					<button
						type="submit"
						id="submitBtn"
						disabled={!disabled}
						className="btn btn-primary w-100"
					>
						Login
					</button>

					{error ? (
						<span className="text-danger mt-2">{error.message}</span>
					) : (
						''
					)}
				</div>
			</form>
		</div>
	);
}
