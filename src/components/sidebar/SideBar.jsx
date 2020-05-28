import React from 'react';
import './SideBar.scss';
import { NavLink } from 'react-router-dom';
import { navRoutes} from '../../routes';
import * as $ from 'jquery';

export default function SideBar() {
	const handleDropdown = id => {
		const item = id.currentTarget.id;
		$(`ul.${item}`).slideToggle(100);
		$(`span.${item}`).toggleClass('rotate');
		

		$(`#${item}`).toggleClass('active');
	};

	return (
		<div className="col-md-12 sideBar p-0">
			<ul className="ul mt-5">
				{navRoutes.map((route, index) =>
					route.hasChildren ? (
						<div className="li-wrapper" key={index}>
							<li
								className="nav-item"
								key={index}
								id={'dropdownHandler_' + index}
								onClick={handleDropdown}
							>
								<span className="pointer nav-link position-relative">
									{route.icon}
									{route.name}
									<span className={'icon-right dropdownHandler_' + index}>
										<i className="fa fa-angle-down"></i>
									</span>
								</span>
							</li>

							<>
								{route.children.map((innerRoute, id) => (
									<span key={id}>
										<ul
											className={
												`dropdown-ul dropdown-menu-close dropdownHandler_` +
												index
											}
										>
											<li className="nav-item">
												<NavLink
													activeClassName="active"
													className="nav-link pl-5"
													to={innerRoute.path}
												>
													{innerRoute.icon}
													{innerRoute.name}
												</NavLink>
											</li>
										</ul>
									</span>
								))}
							</>
						</div>
					) : (
						<li className="nav-item" key={index}>
							<NavLink
								activeClassName="active"
								className="nav-link"
								to={route.path}
							>
								{route.icon}
								{route.name}
							</NavLink>
						</li>
					)
				)}
			</ul>
		</div>
	);
}
