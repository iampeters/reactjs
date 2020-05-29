import React, { useEffect, useState } from 'react';
import './Header.scss';
import { logOut } from '../../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Strings from '../../strings';
import { NavLink } from 'react-router-dom';
import * as $ from 'jquery';
// import Search from '../Search/Search';
import Avatar from '@material-ui/core/Avatar';
import userPic from '../../images/jt.jpeg';
import * as jwt from 'jsonwebtoken';
import { setWideView } from '../../redux/actions/configActions';

function Header( props ) {
	const dispatch = useDispatch();

	const token = sessionStorage.getItem( 'token' );
	const [username, setUsername] = useState( '' );
	const [notification, setNotification] = useState( false );
	const wideView = useSelector( state => state.wideView )

	useEffect( () => {
		if ( token ) {
			const decodedToken = jwt.decode( token );
			sessionStorage.setItem( 'username', decodedToken.username );

			setUsername( decodedToken.last_name )
			dispatch( setWideView() )
		}
		// dispatch(getUser());
	}, [token, dispatch] );

	const close = () => {
		dispatch( logOut() );
	};

	// toggle dropdown
	const closeDropdown = () => {
		$( '#dropdown-menu' ).addClass( 'd-none' );
	};

	const showNav = () => {
		if ( wideView ) {
			localStorage.setItem( 'wideView', 'false' );
			dispatch( setWideView() )
		} else {
			localStorage.setItem( 'wideView', 'true' );
			dispatch( setWideView() )
		}
	}

	const showNavMobile = () => {
		localStorage.setItem( 'wideView', 'true' );
		dispatch( setWideView() )

		$( '#sideNav' ).toggleClass( 'show' )

	}

	const openDropdown = () => {
		$( '#dropdown-menu' ).removeClass( 'd-none' );
	};

	const toggleNotification = () => {
		// $( '#notification-dropdown-menu' ).removeClass( 'd-none' );
		if ( notification ) {
			setNotification( false )
			$( '#notification-dropdown-menu' ).css( 'right', '-392px' )
		} else {
			$( '#notification-dropdown-menu' ).css( 'right', 0 )
			setNotification( true )
		}
	};

	const closeNotification = () => {
		setNotification( false )
		$( '#notification-dropdown-menu' ).css( 'right', '-392px' )
	};

	return (
		<div className="col-md-12 pl-0 pr-0 pt-2 pb-2">
			<nav className="header position-relative">
				<div className="row m-0 h-inherit">
					<button
						onClick={showNav}
						className="navbar-toggler border-0 box-shadow-none d-none d-md-inline-block"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="fas fa-align-left text-color menu-icon"></span>
					</button>

					<button
						onClick={showNavMobile}
						className="navbar-toggler border-0 box-shadow-none d-md-none"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="fas fa-align-left text-color menu-icon"></span>
					</button>

					<div className="col-3 d-md-inline-block h-inherit p-0">
						<div className="mb-0 h-inherit text-bold">
							<div className="row m-0 justify-content-start align-content-center h-inherit">
								<h4 className="mb-0 text-color">{Strings.appName}</h4>
							</div>
						</div>
					</div>
					<div className="col d-md-inline-block h-inherit">
						<div className="row m-0 h-inherit justify-content-end">
							<div className="col-4 d-none d-md-inline-block h-inherit">
								<div className="row m-0 justify-content-end align-content-center h-inherit">
									{/* search */}
									{/* <Search
										className="w-100 p-2 pl-4 pr-4 border-radius bg-light header-search-input"
										placeholder="Search..."
									/> */}
								</div>
							</div>
							<div className="col icon-holder h-inherit">
								<div className="row row justify-content-end align-content-center h-inherit">
									{/* <span className="pointer p-3">
										<ion-icon name="search-outline"></ion-icon>
									</span> */}

									<span className="pointer p-3  " onClick={toggleNotification}>
										<ion-icon name="notifications-outline"></ion-icon>
									</span>
								</div>
							</div>

							<div
								className="col-4 p-0 user-picture-container position-relative h-inherit"
								onMouseEnter={openDropdown}
								onMouseLeave={closeDropdown}
							>
								<div className="row m-0 justify-content-end align-content-center h-inherit">
									<Avatar
										alt="Remy Sharp"
										src={userPic}
										className="text-color"
									/>
									<div className="pointer text-dark text-bold p-2 d-none d-md-inline-block">
										{username}
									</div>
								</div>

								<div
									className="header-dropdown-menu bg-white position-absolute animated flipInX faster d-none box-shadow-l-r-b"
									id="dropdown-menu"
								>
									<span className="dropdown-item pointer">
										<NavLink className="nav-item" to="/profile">
											Profile
										</NavLink>
									</span>
									<div className="dropdown-divider p-0 m-0"></div>
									<span
										className="dropdown-item pointer text-danger"
										onClick={() => close()}
									>
										Logout
									</span>
								</div>
							</div>

							{/* notifications */}
							<div
								className="notification-dropdown-menu bg-light position-absolute animated fadeIn faster box-shadow-l-r-b"
								id="notification-dropdown-menu"
							>
								<div className="p-2 bg-color">
									<div className="row justify-content-between align-items-center m-0">
										<h5 className='mb-0 text-white pl-3'>Notifications</h5>
										<span className='mb-0 text-white pointer' onClick={closeNotification}>
											<i className="material-icons orange600">close</i>
										</span>
									</div>
								</div>
								<div className="col-md-12 mt-4 p-3">
									<div className="row m-0">
										<div className="col-md-12 bg-white border-radius p-2 box-shadow-mild pointer">
											<div className="col-md-12">
												<div className="row justify-content-between align-items-center ">
													<h6 className='mb-0'>Notification Header</h6>
													<span className='mb-0 text-dark pointer'>
														<i className="material-icons orange600">close</i>
													</span>
												</div>
											</div>
											<p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque...</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
export default Header;
