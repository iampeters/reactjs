import React, { useState, useEffect } from 'react';
import './Dashboard.scss';
// import Card from '../../components/card/Card';
import LineChart from '../../components/Charts/LineChart';
import Animations from '../../components/Skeleton/Text';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions/userActions';
import Maps from '../../components/maps/Maps';
import { getGeoJson } from '../../redux/actions/configActions';

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

				{/* portals */}
				<div className="col-md-3 mb-3 portal-card">
					<div className='mb-3 bg-white box-shadow border-radius'>
						<div className="row m-0">
							<div className="col-4 p-2 status-success text-center">
								<div className="row m-0 justify-content-center align-content-center p-2">
									<i className="material-icons orange600 fa-3x">face</i>
								</div>
							</div>
							<div className="col-8 p-2">
								<p className='text-dark text-center mb-0 p-1 text-success text-bold'>Agents</p>
								<h5 className="text-dark text-center text-bold">4,000</h5>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-3 mb-3 portal-card">
					<div className='mb-3 bg-white box-shadow border-radius'>
						<div className="row m-0">
							<div className="col-4 p-2 status-info text-center">
								<div className="row m-0 justify-content-center align-content-center p-2">
									<i className="material-icons orange600 fa-3x">face</i>
								</div>
							</div>
							<div className="col-8 p-2">
								<p className='text-dark text-center mb-0 p-1 text-info text-bold'>Customers</p>
								<h5 className="text-dark text-center text-bold">5,000</h5>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-3 mb-3 portal-card">
					<div className='mb-3 bg-white box-shadow border-radius'>
						<div className="row m-0">
							<div className="col-4 p-2 status-warn text-center">
								<div className="row m-0 justify-content-center align-content-center p-2">
									<i className="material-icons orange600 fa-3x">face</i>
								</div>
							</div>
							<div className="col-8 p-2">
								<p className='text-dark text-center mb-0 p-1 text-warn text-bold'>Aggregators</p>
								<h5 className="text-dark text-center text-bold">900</h5>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-3 mb-3 portal-card">
					<div className='mb-3 bg-white box-shadow border-radius'>
						<div className="row m-0">
							<div className="col-4 p-2 status-danger text-center">
								<div className="row m-0 justify-content-center align-content-center p-2">
									<i className="material-icons orange600 fa-3x">face</i>
								</div>
							</div>
							<div className="col-8 p-2">
								<p className='text-dark text-center mb-0 p-1 text-danger text-bold'>Merchants</p>
								<h5 className="text-dark text-center text-bold">1,200</h5>
							</div>
						</div>
					</div>
				</div>
				{/* end of portals */}

				<div className="col-md-4 mb-3 d-none d-md-block">
					<div className="row m-0">
						<div className='col-md-12 mb-3 bg-white box-shadow border-radius'>
							<LineChart data={data} labels={label} className='chart-wrapper' />
							{/* <BarChart data={data} labels={label} className='chart-wrapper' /> */}
						</div>

						<div className='col-md-12 mb-3 bg-white box-shadow border-radius'>
							<LineChart data={data} labels={label} className='chart-wrapper' />
							{/* <BarChart data={data} labels={label} className='chart-wrapper' /> */}
						</div>
					</div>
				</div>

				<div className="col-md-8 mb-3 d-none d-md-block">
					<div className='mb-3 bg-white box-shadow border-radius maps' style={{ height: '415px' }}>
						<Maps />
					</div>
				</div>

				<div className="col-md-3 mb-3 ">
					<div className='p-5 mb-3 bg-white box-shadow border-radius'></div>
				</div>

				<div className="col-md-3 mb-3 ">
					<div className='p-5 mb-3 bg-white box-shadow border-radius'></div>
				</div>

				<div className="col-md-3 mb-3 ">
					<div className='p-5 mb-3 bg-white box-shadow border-radius'></div>
				</div>

				<div className="col-md-3 mb-3 ">
					<div className='p-5 mb-3 bg-white box-shadow border-radius'></div>
				</div>

				<div className="col-md-12 mb-3">
					<div className="col-md-12 mb-3 p-5 bg-white box-shadow border-radius"></div>
				</div>

				<div className="col-md-12">
					<div className="row">
						<div className="col-md-4  mb-3">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius h-inherit p-5"></div>
						</div>

						<div className="col-md-4  mb-3">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius h-inherit p-5"></div>
						</div>

						<div className="col-md-4  mb-3">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius h-inherit p-5">

							</div>
						</div>
					</div>
				</div>

				<div className="col-md-12">
					<div className="row">
						<div className="col-md-3 mb-3">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius h-inherit p-5"></div>
						</div>
						<div className="col-md-9 mb-3">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius h-inherit p-5"></div>
						</div>
					</div>
				</div>

				<div className="col-md-12">
					<div className="row">
						<div className="col-md-12 mb-3">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius h-inherit p-5"></div>
						</div>
					</div>
				</div>

			</div >

		);
	}
}
