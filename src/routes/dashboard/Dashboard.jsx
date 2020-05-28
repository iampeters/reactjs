import React, { useState, useEffect } from 'react';
import './Dashboard.scss';
// import Card from '../../components/card/Card';
import LineChart from '../../components/Charts/LineChart';
import Animations from '../../components/Skeleton/Text';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions/userActions';
import Maps from '../../components/maps/Maps';
import { getGeoJson } from '../../redux/actions/configActions';
import BarChart from '../../components/Charts/BarChart';

export default function Dashboard() {

	const user = useSelector( state => state.profile );
	const dispatch = useDispatch();

	useEffect( () => {
		window.scrollTo( 0, 0 );

		dispatch( getUser() );
		dispatch( getGeoJson() )

	}, [dispatch] )

	const [data] = useState( [12, 19, 3, 5, 2, 3] )
	const [label] = useState( ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'] )

	if ( user.isLoading ) {
		return (
			<div className="row justify-content-center align-content-center animated fadeIn">

				<div className="col-md-3">
					<div className="col-md-12" style={{ overflow: 'hidden' }}>
						<Animations />
					</div>
				</div>

				<div className="col-md-3">
					<div className="col-md-12" style={{ overflow: 'hidden' }}>
						<Animations />
					</div>
				</div>

				<div className="col-md-3">
					<div className="col-md-12" style={{ overflow: 'hidden' }}>
						<Animations />
					</div>
				</div>

				<div className="col-md-3">
					<div className="col-md-12" style={{ overflow: 'hidden' }}>
						<Animations />
					</div>
				</div>

			</div>
		)
	} else {
		return (

			<div className="row animated fadeIn m-0">

				<div className="col-md-12 p-0">
					<div className="row m-0">

						{/* portals */}
						<div className="col-md-3 mb-3 portal-card">
							<div className='mb-3 bg-white box-shadow border-radius'>
								<div className="row m-0">
									<div className="col-4 p-1 status-info text-center">
										<div className="row m-0 justify-content-center align-content-center p-1">
											<i className="material-icons orange600 fa-3x">face</i>
										</div>
									</div>
									<div className="col-8 p-1">
										<p className='text-center text-secondary mb-0 p-1 text-bold'>Agents</p>
										<h6 className="text-center text-bold text-info">4,000</h6>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3 mb-3 portal-card">
							<div className='mb-3 bg-white box-shadow border-radius'>
								<div className="row m-0">
									<div className="col-4 p-1 status-info text-center">
										<div className="row m-0 justify-content-center align-content-center p-1">
											<i className="material-icons orange600 fa-3x">face</i>
										</div>
									</div>
									<div className="col-8 p-1">
										<p className='text-center text-secondary mb-0 p-1 text-bold'>Customers</p>
										<h6 className="text-center text-bold text-info">5,000</h6>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3 mb-3 portal-card">
							<div className='mb-3 bg-white box-shadow border-radius'>
								<div className="row m-0">
									<div className="col-4 p-1 status-info text-center">
										<div className="row m-0 justify-content-center align-content-center p-1">
											<i className="material-icons orange600 fa-3x">face</i>
										</div>
									</div>
									<div className="col-8 p-1">
										<p className='text-center text-secondary mb-0 p-1 text-bold'>Aggregators</p>
										<h6 className="text-center text-bold text-info">900</h6>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3 mb-3 portal-card">
							<div className='mb-3 bg-white box-shadow border-radius'>
								<div className="row m-0">
									<div className="col-4 p-1 status-info text-center">
										<div className="row m-0 justify-content-center align-content-center p-1">
											<i className="material-icons orange600 fa-3x">face</i>
										</div>
									</div>
									<div className="col-8 p-1">
										<p className='text-center text-secondary mb-0 p-1 text-bold'>Merchants</p>
										<h6 className="text-center text-bold text-info">1,200</h6>
									</div>
								</div>
							</div>
						</div>
						{/* end of portals */}
					</div>
				</div>

				<div className="col-md-12 p-0">
					<div className="row m-0">

						{/* portals */}
						<div className="col-md-3 mb-3 portal-card">
							<div className='mb-3 bg-white box-shadow border-radius'>
								<div className="row m-0">
									<div className="col-4 p-1 status-danger text-center">
										<div className="row m-0 justify-content-center align-content-center p-1">
											<i className="material-icons orange600 fa-3x">face</i>
										</div>
									</div>
									<div className="col-8 p-1">
										<p className='text-center mb-0 p-1 text-bold text-secondary'>Admins</p>
										<h6 className="text-center text-bold text-danger">4,000</h6>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3 mb-3 portal-card">
							<div className='mb-3 bg-white box-shadow border-radius'>
								<div className="row m-0">
									<div className="col-4 p-1 status-danger text-center">
										<div className="row m-0 justify-content-center align-content-center p-1">
											<i className="material-icons orange600 fa-3x">face</i>
										</div>
									</div>
									<div className="col-8 p-1">
										<p className='text-center mb-0 p-1 text-bold text-secondary'>FSES</p>
										<h6 className="text-center text-bold text-danger ">5,000</h6>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3 mb-3 portal-card">
							<div className='mb-3 bg-white box-shadow border-radius'>
								<div className="row m-0">
									<div className="col-4 p-1 status-danger text-center">
										<div className="row m-0 justify-content-center align-content-center p-1">
											<i className="material-icons orange600 fa-3x">face</i>
										</div>
									</div>
									<div className="col-8 p-1">
										<p className='text-center mb-0 p-1 text-bold text-secondary'>Tellers</p>
										<h6 className="text-center text-bold text-danger">900</h6>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3 mb-3 portal-card">
							<div className='mb-3 bg-white box-shadow border-radius'>
								<div className="row m-0">
									<div className="col-4 p-1 status-danger text-center">
										<div className="row m-0 justify-content-center align-content-center p-1">
											<i className="material-icons orange600 fa-3x">show_chart</i>
										</div>
									</div>
									<div className="col-8 p-1">
										<p className='text-center mb-0 p-1 text-bold text-secondary'>Qucoon Balance</p>
										<h6 className="text-center text-bold text-danger">&#8358;30,000,000</h6>
									</div>
								</div>
							</div>
						</div>
						{/* end of portals */}
					</div>
				</div>

				<div className="col-md-12 p-0">
					<div className="row m-0">

						<div className="col-md-3 mb-3 d-none d-md-block">
							<div className="row m-0">
								<div className='col-md-12 mb-4 bg-white box-shadow border-radius p-4'>
									{/* <LineChart data={data} labels={label} className='chart-wrapper' /> */}
									<p className='text-secondary text-center text-bold mb-0'>Qucoon Balance</p>
									<h5 className='text-center mb-0 text-success text-dark'>&#8358;30,000,340</h5>
								</div>

								<div className='col-md-12 mb-3 bg-white box-shadow border-radius p-0'>
									<div className='col-md-12 bg-white p-4'>
										<p className='text-secondary text-center mb-0 text-bold'>Active Sessions</p>
									</div>
										<hr className='m-0'/>

									{/* <h5 className='text-center text-success text-dark'>340</h5> */}

									<div className='col-md-12 mb-3 bg-white border-radius pt-4'>
										<LineChart data={data} labels={label} className='chart-wrapper' />
									</div>

								</div>

								{/* <div className='col-md-12 mb-3 bg-white box-shadow border-radius p-3'>
									<BarChart data={data} labels={label} className='chart-wrapper' />
								
								</div> */}

							</div>
						</div>

						<div className="col-md-9 mb-3 d-none d-md-block">
							<div className='mb-3 bg-white box-shadow border-radius maps' style={{ height: '419px' }}>
								<Maps />
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-12">
					<div className="row">

						<div className="col-md-3 mb-3">
							<div className='p-2 mb-3 bg-white box-shadow border-radius text-center portal-card'>
								<div className="row m-0">
									<div className="col-4 p-1 status-success text-center">
										<div className="row m-0 justify-content-center align-content-center p-2">
											<i className="material-icons orange600 fa-2x">show_chart</i>
										</div>
									</div>
									<div className="col-8 p-1">
										<p className='text-dark text-center mb-0 p-1 text-bold text-secondary'>Agent Wallet</p>
										<h5 className="text-dark text-center text-bold mb-0 text-success">&#8358;40,000,000</h5>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3 mb-3 ">
							<div className='p-2 mb-3 bg-white box-shadow border-radius text-center portal-card'>
								<div className="row m-0">
									<div className="col-4 p-1 status-success text-center">
										<div className="row m-0 justify-content-center align-content-center p-2">
											<i className="material-icons orange600 fa-2x">show_chart</i>
										</div>
									</div>
									<div className="col-8 p-1">
										<p className='text-center mb-0 p-1 text-bold text-secondary'>Customer Wallet</p>
										<h5 className="text-center text-bold mb-0 text-success">&#8358;40,000,000</h5>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3 mb-3 ">
							<div className='p-2 mb-3 bg-white box-shadow border-radius text-center portal-card'>
								<div className="row m-0">
									<div className="col-4 p-1 status-success text-center">
										<div className="row m-0 justify-content-center align-content-center p-2">
											<i className="material-icons orange600 fa-2x">show_chart</i>
										</div>
									</div>
									<div className="col-8 p-1">
										<p className='text-center mb-0 p-1 text-bold text-secondary'>Aggregators Wallet</p>
										<h5 className="text-center text-bold mb-0 text-success">&#8358;40,000,000</h5>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3 mb-3 ">
							<div className='p-2 mb-3 bg-white box-shadow border-radius text-center portal-card'>
								<div className="row m-0">
									<div className="col-4 p-1 status-success text-center">
										<div className="row m-0 justify-content-center align-content-center p-2">
											<i className="material-icons orange600 fa-2x">show_chart</i>
										</div>
									</div>
									<div className="col-8 p-1">
										<p className='text-center mb-0 p-1 text-bold text-secondary'>Merchant Payments</p>
										<h5 className="text-center text-bold mb-0 text-success">&#8358;40,000,000</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-12 mb-3">
					<div className="col-md-12 mb-3 p-5 bg-white box-shadow border-radius"></div>
				</div>

			</div >

		);
	}
}
