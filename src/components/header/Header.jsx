import React from 'react';
import './Header.css';
import { logOut } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';

function Header(props) {
	const dispatch = useDispatch();

	return (
		<div className="col-md-12 border-bottom">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<span className="navbar-brand">Hidden brand</span>
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<span className="nav-link">
								Home <span className="sr-only">(current)</span>
							</span>
						</li>
						<li className="nav-item">
							<span className="nav-link">Link</span>
						</li>
						<li className="nav-item">
							<span className="nav-link disabled">Disabled</span>
						</li>
					</ul>

					<button
						className="btn btn-danger mr-2"
						onClick={() => dispatch(logOut())}
					>
						Logout
					</button>
				</div>
			</nav>
		</div>
	);
}
export default Header;
		
