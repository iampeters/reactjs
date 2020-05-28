import './OuterHeader.scss';
import Strings from '../../strings';
import React from 'react'

export default function OuterHeader() {
  return (
		<div className="col-md-12 ml-auto mr-auto p-0 h-inherit">
			<nav className="navbar navbar-expand-lg bg-color h-inherit">
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
					<span className="navbar-brand text-bold text-white ml-5">
						{Strings.appName}
					</span>
					{/* <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
					</ul> */}
				</div>
			</nav>
		</div>
	);
}
