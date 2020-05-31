import React, { useState, useEffect } from 'react';
import './Dashboard.scss';
import LineChart from '../../components/Charts/LineChart';
import Animations from '../../components/Skeleton/Text';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions/userActions';
import Maps from '../../components/maps/Maps';
import { getGeoJson } from '../../redux/actions/configActions';
import { NavLink } from 'react-router-dom';
import IconCard from '../../components/IconCard/IconCard';
import MetricsCard from '../../components/MetricsCard/MetricsCard';
// import BarChart from '../../components/Charts/BarChart';

export default function Dashboard() {

	const user = useSelector( state => state.profile );
	const dispatch = useDispatch();

	useEffect( () => {
		window.scrollTo( 0, 0 );

		dispatch( getUser() );
		dispatch( getGeoJson() )

	}, [dispatch] )

	const setActive = ( id ) => {

	}

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
						<IconCard
							bgColor='status-info'
							icon={'face'}
							value={4000}
							name={'Agents'}
							route={'agents'}
							textColor={'text-info'}
							key={'agents'}
						/>

						<IconCard
							bgColor='status-info'
							icon={'face'}
							value={5000}
							name={'Customers'}
							route={'customers'}
							textColor={'text-info'}
							key={'customers'}
						/>

						<IconCard
							bgColor='status-info'
							icon={'face'}
							value={900}
							name={'Aggregators'}
							route={'aggregators'}
							textColor={'text-info'}
							key={'aggregators'}
						/>

						<IconCard
							bgColor='status-info'
							icon={'face'}
							value={1200}
							name={'Merchants'}
							route={'merchants'}
							textColor={'text-info'}
							key={'merchants'}
						/>
					
					</div>
				</div>

				<div className="col-md-12 p-0">
					<div className="row m-0">

						{/* portals */}
						<IconCard
							bgColor='status-danger'
							icon={'face'}
							value={10}
							name={'Admins'}
							route={'administrators'}
							textColor={'text-danger'}
							key={'admins'}
						/>

						<IconCard
							bgColor='status-danger'
							icon={'face'}
							value={5000}
							name={'FSE'}
							route={'fse'}
							textColor={'text-danger'}
							key={'fse'}
						/>

						<IconCard
							bgColor='status-danger'
							icon={'face'}
							value={5000}
							name={'Tellers'}
							route={'tellers'}
							textColor={'text-danger'}
							key={'tellers'}
						/>

						<IconCard
							bgColor='status-danger'
							icon={'show_chart'}
							value={30000000}
							name={'Qucoon Balance'}
							route={'/dashboard'}
							textColor={'text-danger'}
							showSign={true}
							key={'qucoon'}
						/>

						{/* end of portals */}
					</div>
				</div>

				{/* end of portals */}

				{/* map */}
				<div className="col-md-12 p-0 map-container-holder mb-3">
					<div className="row m-0">

						<div className="col-md-3 mb-3 d-none d-md-block left-section">
							<div className="row m-0 h-inherit">
								<div className='col-md-12 mb-4 bg-white box-shadow border-radius p-4'>
									{/* <LineChart data={data} labels={label} className='chart-wrapper' /> */}
									<p className='text-secondary text-center text-bold mb-0'>Qucoon Balance</p>
									<h5 className='text-center mb-0 text-success text-dark'>&#8358;30,000,340</h5>
								</div>

								<div className='col-md-12 bg-white box-shadow border-radius p-0 chart-container'>
									<div className='col-md-12 bg-white p-4'>
										<p className='text-secondary text-center mb-0 text-bold'>Active Sessions</p>
									</div>
									<hr className='m-0' />

									<div className='col-md-12 mb-3 bg-white border-radius pt-4'>
										<LineChart data={data} labels={label} className='chart-wrapper' />
									</div>

								</div>

							</div>
						</div>

						<div className="col-md-9 mb-3 d-none d-md-block map-container">
							<div className='mb-3 bg-white box-shadow border-radius maps'>
								<Maps />
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-12">
					<div className="row">

						<MetricsCard
							name={'Agent Wallet'}
							bgColor='status-success'
							textColor='text-success'
							value={40000000}
							showSign={true}
							icon='show_chart'
							key='agentWallet'
							width='col-md-3'
						/>

						<MetricsCard
							name={'Customer Wallet'}
							bgColor='status-success'
							textColor='text-success'
							value={4000000}
							showSign={true}
							icon='show_chart'
							key='customerWallet'
							width='col-md-3'
						/>

						<MetricsCard
							name={'Aggregators Wallet'}
							bgColor='status-success'
							textColor='text-success'
							value={50000000}
							showSign={true}
							icon='show_chart'
							key='aggregatorsWallet'
							width='col-md-3'
						/>

						<MetricsCard
							name='Merchant Payments'
							bgColor='status-success'
							textColor='text-success'
							value={500000000}
							showSign={true}
							icon='show_chart'
							key='merchantPayments'
							width='col-md-3'
						/>

					</div>
				</div>

				<div className="col-md-12 mb-3">
					<div className="row">

						<div className="col-md-5">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius">
								<div className="col-md-12 p-2">
									<div className="row m-0">
										<div className="col-md-4 p-0">
											<p className='text-secondary mb-0 pt-2'>POS Transaction</p>
										</div>
										<div className="col-md-8 p-0 time-filter">

											<div className="btn-group btn-group-toggle" data-toggle="buttons">
												<label className="btn btn-light active small">
													<input type="radio" name="options" id="option1" checked onChange={() => setActive( 'option1' )} className='small' /> Day</label>

												<label className="btn btn-light small">
													<input type="radio" name="options" id="option2" onChange={() => setActive( 'option1' )} /> Week</label>

												<label className="btn btn-light small">
													<input type="radio" name="options" id="option3" onChange={() => setActive( 'option1' )} /> Month
												</label>
											</div>
										</div>
									</div>
								</div>
								<hr className="m-0" />
								<div className="col-md-12 p-0">
									<div className="row m-0">
										{/* all */}
										<div className="col-md-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>All</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* Approved */}
										<div className="col-md-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Approved</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* Pending */}
										<div className="col-md-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Pending</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* Failed */}
										<div className="col-md-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Failed</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>

						<div className="col-md-7">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius">
								<div className="col-md-12 p-2">
									<div className="row m-0">
										<div className="col-md-4 p-0">
											<p className='text-secondary mb-0 pt-2'>Transaction Types</p>
										</div>
										<div className="col-md-8 p-0 time-filter">

											<div className="btn-group btn-group-toggle" data-toggle="buttons">
												<label className="btn btn-light active small">
													<input type="radio" name="options" id="option1" checked onChange={() => setActive( 'option1' )} /> Day</label>

												<label className="btn btn-light small">
													<input type="radio" name="options" id="option2" onChange={() => setActive( 'option1' )} /> Week</label>

												<label className="btn btn-light small">
													<input type="radio" name="options" id="option3" onChange={() => setActive( 'option1' )} /> Month
												</label>
											</div>
										</div>
									</div>
								</div>
								<hr className="m-0" />
								<div className="col-md-12 p-0">
									<div className="row m-0">
										{/* Transfers */}
										<div className="col-md-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Transfers</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* Savings Deposits */}
										<div className="col-md-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Savings Deposits</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* Savings Withdrawal */}
										<div className="col-md-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Savings Withdrawal</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* Bills */}
										<div className="col-md-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Bills</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

									</div>
								</div>
							</div>

						</div>

					</div>
				</div>

				<div className="col-md-12 mb-3">
					<div className="row">

						<div className="col-md-6">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius">
								{/* header */}
								<div className="col-md-12 p-2">
									<div className="row m-0">
										<div className="col-md-4 p-0">
											<p className='text-secondary mb-0 pt-2'>Terminals</p>
										</div>
										<div className="col-md-8 p-0 time-filter">

											<div className="btn-group btn-group-toggle" data-toggle="buttons">
												<label className="btn btn-light active small">
													<input type="radio" name="options" id="option1" checked onChange={() => setActive( 'option1' )} /> Day</label>

												<label className="btn btn-light small">
													<input type="radio" name="options" id="option2" onChange={() => setActive( 'option1' )} /> Week</label>

												<label className="btn btn-light small">
													<input type="radio" name="options" id="option3" onChange={() => setActive( 'option1' )} /> Month
												</label>
											</div>
										</div>
									</div>
								</div>
								<hr className="m-0" />

								{/* content */}
								<div className="col-md-12 p-0">
									<div className="row m-0">
										{/* all */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>All</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* active */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Active</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* transacting */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Transacting</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* Not transacting */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Not Transacting</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

									</div>
								</div>

							</div>
						</div>

						<div className="col-md-6">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius">
								<div className="col-md-12 p-2">
									<div className="row m-0">
										<div className="col-md-4 p-0">
											<p className='text-secondary mb-0 pt-2'>Agents</p>
										</div>
										<div className="col-md-8 p-0 time-filter">

											<div className="btn-group btn-group-toggle" data-toggle="buttons">
												<label className="btn btn-light active small">
													<input type="radio" name="options" id="option1" checked onChange={() => setActive( 'option1' )} /> Day</label>

												<label className="btn btn-light small">
													<input type="radio" name="options" id="option2" onChange={() => setActive( 'option1' )} /> Week</label>

												<label className="btn btn-light small">
													<input type="radio" name="options" id="option3" onChange={() => setActive( 'option1' )} /> Month
												</label>
											</div>
										</div>
									</div>
								</div>
								<hr className="m-0" />
								<div className="col-md-12 p-0">
									<div className="row m-0">
										{/* all */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>All</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* active */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Active</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* transacting */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Transacting</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* Not transacting */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Not Transacting</p>
											<div className="col-md-12 p-0 mb-3">
												<p className='text-center text-secondary'>&#8358;400,000</p>
											</div>
											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div className="col-md-12 mb-3">
					<div className="row">

						<div className="col-md-4">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius">
								{/* header */}
								<div className="col-md-12 p-2">
									<div className="row m-0">
										<div className="col-10 p-0">
											<p className='text-secondary mb-0 pt-2'>Planned Savings</p>
										</div>

										<div className="col-2 p-0 text-right text-info">
											<span className="material-icons">bubble_chart</span>
										</div>

									</div>
								</div>
								{/* content */}
								<hr className="m-0" />
								<div className="col-md-12 p-0">
									<div className="row m-0">
										{/* all */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>All</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* active */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Active</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* On track */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Ontrack</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* Behind */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Behind</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

									</div>
								</div>

							</div>
						</div>

						<div className="col-md-4">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius">
								{/* header */}
								<div className="col-md-12 p-2">
									<div className="row m-0">
										<div className="col-10 p-0">
											<p className='text-secondary mb-0 pt-2'>Withdrawals</p>
										</div>

										<div className="col-2 p-0 text-right text-info">
											<span className="material-icons">bubble_chart</span>
										</div>

									</div>
								</div>
								{/* content */}
								<hr className="m-0" />
								<div className="col-md-12 p-0">
									<div className="row m-0">
										{/* all */}
										<div className="col-4 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>All</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* Approved */}
										<div className="col-4 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Approved</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

										{/* Pending */}
										<div className="col-4 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Pending</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>0</p>
											</div>
										</div>

									</div>
								</div>

							</div>
						</div>

						<div className="col-md-4">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius">
								{/* header */}
								<div className="col-md-12 p-2">
									<div className="row m-0">
										<div className="col-10 p-0">
											<p className='text-secondary mb-0 pt-2'>Deposits</p>
										</div>

										<div className="col-2 p-0">
											<p className='text-right mb-0 text-bold text-info pt-2'>&#8358;</p>
										</div>

									</div>
								</div>
								{/* content */}
								<hr className="m-0" />
								<div className="col-md-12 p-0">
									<div className="row m-0">
										{/* Flexi */}
										<div className="col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Flexi</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>&#8358;40,000</p>
											</div>
										</div>

										{/* Planned */}
										<div className="col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Planned</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>&#8358;40,000</p>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-12 mb-3">
					<div className="row">

						<div className="col-md-4">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius">
								{/* header */}
								<div className="col-md-12 p-2">
									<div className="row m-0">
										<div className="col-10 p-0">
											<p className='text-secondary mb-0 pt-2'>Payments</p>
										</div>

										<div className="col-2 p-0">
											<p className='text-right mb-0 text-bold text-info pt-2'>&#8358;</p>
										</div>

									</div>
								</div>
								{/* content */}
								<hr className="m-0" />
								<div className="col-md-12 p-0">
									<div className="row m-0">
										{/* Merchants */}
										<div className="col-lg-4 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Merchants</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>&#8358;1,500</p>
											</div>
										</div>

										{/* Token */}
										<div className="col-lg-4 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Token</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>&#8358;400</p>
											</div>
										</div>

										{/* Booking */}
										<div className="col-lg-4 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Booking</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>&#8358;4,000</p>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius">
								{/* header */}
								<div className="col-md-12 p-2">
									<div className="row m-0">
										<div className="col-10 p-0">
											<p className='text-secondary mb-0 pt-2'>Transfers</p>
										</div>

										<div className="col-2 p-0">
											<p className='text-right mb-0 text-bold text-info pt-2'>&#8358;</p>
										</div>

									</div>
								</div>
								{/* content */}
								<hr className="m-0" />
								<div className="col-md-12 p-0">
									<div className="row m-0">
										{/* All */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>All</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>&#8358;1,500</p>
											</div>
										</div>

										{/* Inter */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Inter</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>&#8358;400</p>
											</div>
										</div>

										{/* Intra */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Intra</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>&#8358;4,000</p>
											</div>
										</div>

										{/* Own */}
										<div className="col-lg-3 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Own</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>&#8358;4,000</p>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="col-md-12 mb-3 bg-white box-shadow border-radius">
								{/* header */}
								<div className="col-md-12 p-2">
									<div className="row m-0">
										<div className="col-10 p-0">
											<p className='text-secondary mb-0 pt-2'>Transactions</p>
										</div>

										<div className="col-2 p-0">
											<p className='text-right mb-0 text-bold text-info pt-2'>&#8358;</p>
										</div>

									</div>
								</div>
								{/* content */}
								<hr className="m-0" />
								<div className="col-md-12 p-0">
									<div className="row m-0">
										{/* All */}
										<div className="col-lg-4 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>All</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>&#8358;1,500</p>
											</div>
										</div>

										{/* Credits */}
										<div className="col-lg-4 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Credits</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>&#8358;400</p>
											</div>
										</div>

										{/* Debits */}
										<div className="col-lg-4 col-6 text-center p-0 pt-2 pb-2">
											<p className='text-center text-light mb-3'>Debits</p>

											<div className="col-md-12 p-0">
												<p className='text-center text-secondary'>&#8358;4,000</p>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div >

		);
	}
}
