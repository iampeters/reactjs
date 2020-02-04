import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import routes from '../../routes';

export default function SideBar() {
	return (
		<div className="col-md-12">
			<ul className="">
				{routes.map((route, index) => (
					<li className="nav-item" key={index}>
						<Link className="nav-link" to={route.path}>
							{route.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
