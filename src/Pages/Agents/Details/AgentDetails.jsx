import React, { useEffect } from 'react'
import './AgentDetails.scss';
import { useParams, useLocation } from 'react-router-dom'
import IconCard from '../../../components/IconCard/IconCard';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getAgentsDetails } from '../../../redux/actions/agentActions';
import Animations from '../../../components/Skeleton/Text';
import MetricsCard from '../../../components/MetricsCard/MetricsCard';

export default function AgentDetails() {

  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const agent = useSelector( state => state.agent );
  const location = useLocation();

  useEffect( () => {
    window.scrollTo( 0, 0 );
    dispatch( getAgentsDetails( id ) )

    return () => {
      dispatch( { type: 'GET_AGENT_DETAILS', payload: { isLoading: true } } )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch] )

  const changeDate = ( da ) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = new Date( da ).getDay();
    let month = months[new Date( da ).getMonth()];
    let year = new Date( da ).getFullYear();
    return `${day}, ${month} ${year}`;
  }

  return (

    <div className="row">
      <div className="col-md-9">
        {agent.isLoading ? <>
          <div className="row m-0">
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
        </> : <>
            <div className="col-md-12 p-0">
              <div className="row">
                <IconCard
                  bgColor='status-success'
                  icon={'show_chart'}
                  value={1200000}
                  name={'Wallet'}
                  route={location.pathname}
                  textColor={'text-success'}
                  showSign={true}
                  key={'wallet'}
                />

                <IconCard
                  bgColor='status-success'
                  icon={'show_chart'}
                  value={12000}
                  name={'Commission'}
                  route={location.pathname}
                  textColor={'text-success'}
                  showSign={true}
                  key={'commission'}
                />

                <IconCard
                  bgColor='status-success'
                  icon={'trending_up'}
                  value={120000}
                  name={'Inflows'}
                  route={location.pathname}
                  textColor={'text-success'}
                  showSign={true}
                  key={'inflow'}
                />

                <IconCard
                  bgColor='status-danger'
                  icon={'trending_down'}
                  value={12000}
                  name={'Outflows'}
                  route={location.pathname}
                  textColor={'text-danger'}
                  showSign={true}
                  key={'outflow'}
                />
              </div>
            </div>

            <div className="col-md-12 p-0">
              <div className="row">

                <div className="col-md-4 mb-3">
                  <div className="col-md-12 mb-3 bg-white box-shadow border-radius">
                    {/* header */}
                    <div className="col-md-12 p-2">
                      <div className="row m-0">
                        <div className="col-10 p-0">
                          <p className='text-secondary mb-0 pt-2'>Transactions</p>
                        </div>

                        <div className="col-2 p-0 text-right text-orange">
                          <span className="material-icons">bar_chart</span>
                        </div>

                      </div>
                    </div>
                    {/* content */}
                    <hr className="m-0" />
                    <div className="col-md-12 p-0">
                      <div className="row">
                        {/* all */}
                        <div className="col-lg-6 col-6 text-center p-0 pt-2 pb-2">
                          <p className='text-center text-light mb-3'>Value</p>

                          <div className="col-md-12 p-0">
                            <p className='text-center text-secondary'>&#8358;40,000</p>
                          </div>
                        </div>

                        {/* active */}
                        <div className="col-lg-6 col-6 text-center p-0 pt-2 pb-2">
                          <p className='text-center text-light mb-3'>Volume</p>

                          <div className="col-md-12 p-0">
                            <p className='text-center text-secondary'>1,165</p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="col-md-12 mb-3 bg-white box-shadow border-radius">
                    {/* header */}
                    <div className="col-md-12 p-2">
                      <div className="row m-0">
                        <div className="col-10 p-0">
                          <p className='text-secondary mb-0 pt-2'>Transfers</p>
                        </div>

                        <div className="col-2 p-0 text-right text-warn">
                          <span className="material-icons">bar_chart</span>
                        </div>

                      </div>
                    </div>
                    {/* content */}
                    <hr className="m-0" />
                    <div className="col-md-12 p-0">
                      <div className="row">
                        {/* all */}
                        <div className="col-lg-6 col-6 text-center p-0 pt-2 pb-2">
                          <p className='text-center text-light mb-3'>Value</p>

                          <div className="col-md-12 p-0">
                            <p className='text-center text-secondary'>&#8358;40,000</p>
                          </div>
                        </div>

                        {/* active */}
                        <div className="col-lg-6 col-6 text-center p-0 pt-2 pb-2">
                          <p className='text-center text-light mb-3'>Volume</p>

                          <div className="col-md-12 p-0">
                            <p className='text-center text-secondary'>165</p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="col-md-12 mb-3 bg-white box-shadow border-radius">
                    {/* header */}
                    <div className="col-md-12 p-2">
                      <div className="row m-0">
                        <div className="col-10 p-0">
                          <p className='text-secondary mb-0 pt-2'>Bill Payments</p>
                        </div>

                        <div className="col-2 p-0 text-right text-info">
                          <span className="material-icons">bar_chart</span>
                        </div>

                      </div>
                    </div>
                    {/* content */}
                    <hr className="m-0" />
                    <div className="col-md-12 p-0">
                      <div className="row">
                        {/* all */}
                        <div className="col-lg-6 col-6 text-center p-0 pt-2 pb-2">
                          <p className='text-center text-light mb-3'>Value</p>

                          <div className="col-md-12 p-0">
                            <p className='text-center text-secondary'>&#8358;40,000</p>
                          </div>
                        </div>

                        {/* active */}
                        <div className="col-lg-6 col-6 text-center p-0 pt-2 pb-2">
                          <p className='text-center text-light mb-3'>Volume</p>

                          <div className="col-md-12 p-0">
                            <p className='text-center text-secondary'>1165</p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 p-0">
              <div className="row">

                <div className="col-md-4 mb-3">
                  <div className="col-md-12 mb-3 bg-white box-shadow border-radius">
                    {/* header */}
                    <div className="col-md-12 p-2">
                      <div className="row m-0">
                        <div className="col-10 p-0">
                          <p className='text-secondary mb-0 pt-2'>Savings Withdrawals</p>
                        </div>

                        <div className="col-2 p-0 text-right text-purple">
                          <span className="material-icons">bar_chart</span>
                        </div>

                      </div>
                    </div>
                    {/* content */}
                    <hr className="m-0" />
                    <div className="col-md-12 p-0">
                      <div className="row">
                        {/* all */}
                        <div className="col-lg-6 col-6 text-center p-0 pt-2 pb-2">
                          <p className='text-center text-light mb-3'>Value</p>

                          <div className="col-md-12 p-0">
                            <p className='text-center text-secondary'>&#8358;40,000</p>
                          </div>
                        </div>

                        {/* active */}
                        <div className="col-lg-6 col-6 text-center p-0 pt-2 pb-2">
                          <p className='text-center text-light mb-3'>Volume</p>

                          <div className="col-md-12 p-0">
                            <p className='text-center text-secondary'>1,165</p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="col-md-12 mb-3 bg-white box-shadow border-radius">
                    {/* header */}
                    <div className="col-md-12 p-2">
                      <div className="row m-0">
                        <div className="col-10 p-0">
                          <p className='text-secondary mb-0 pt-2'>Savings Deposits</p>
                        </div>

                        <div className="col-2 p-0 text-right text-danger">
                          <span className="material-icons">bar_chart</span>
                        </div>

                      </div>
                    </div>
                    {/* content */}
                    <hr className="m-0" />
                    <div className="col-md-12 p-0">
                      <div className="row">
                        {/* all */}
                        <div className="col-lg-6 col-6 text-center p-0 pt-2 pb-2">
                          <p className='text-center text-light mb-3'>Value</p>

                          <div className="col-md-12 p-0">
                            <p className='text-center text-secondary'>&#8358;40,000</p>
                          </div>
                        </div>

                        {/* active */}
                        <div className="col-lg-6 col-6 text-center p-0 pt-2 pb-2">
                          <p className='text-center text-light mb-3'>Volume</p>

                          <div className="col-md-12 p-0">
                            <p className='text-center text-secondary'>165</p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="col-md-12 mb-3 bg-white box-shadow border-radius">
                    {/* header */}
                    <div className="col-md-12 p-2">
                      <div className="row m-0">
                        <div className="col-10 p-0">
                          <p className='text-secondary mb-0 pt-2'>Customers</p>
                        </div>

                        <div className="col-2 p-0 text-right text-purple">
                          <span className="material-icons">bar_chart</span>
                        </div>

                      </div>
                    </div>
                    {/* content */}
                    <hr className="m-0" />
                    <div className="col-md-12 p-0">
                      <div className="row">
                        {/* all */}
                        <div className="col-md-12 text-center p-0 pt-2 pb-2">
                          <p className='text-center text-light mb-3'>Total</p>

                          <div className="col-md-12 p-0">
                            <p className='text-center text-secondary'>4,000</p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 p-0">
              <div className="row">
                {/* <div className="col-md-3 status-info box-shadow border-radius p-2 mb-3">
                  <h6 className="transparent-white text-center">BVN</h6>
                  <h6 className="text-white text-center mb-0">{agent.bankVerificationNumber}</h6>
                </div> */}

                <MetricsCard
                  name='BVN'
                  bgColor='status-info'
                  textColor='text-info'
                  value={agent.bankVerificationNumber}
                  icon='bubble_chart'
                  key='bvn'
                  width='col-md-4'
                  showSign={false}
                />

                <MetricsCard
                  name='Business Name'
                  bgColor='status-info'
                  textColor='text-info'
                  value={agent.businessName || 'N/A'}
                  icon='bubble_chart'
                  key='businessName'
                  width='col-md-4'
                  showSign={false}
                />

                <MetricsCard
                  name='RC Number'
                  bgColor='status-info'
                  textColor='text-info'
                  value={agent.registrationNumber || 'N/A'}
                  icon='bubble_chart'
                  key='businessName'
                  width='col-md-4'
                  showSign={false}
                />

              </div>
            </div>

            <div className="col-md-12 mb-4 bg-white box-shadow border-radius pt-4" style={{ height: '400px' }}>
              <ul class="nav nav-tabs" id="myTab" role="tablist">

                <li class="nav-item col">
                  <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Transactions</a>
                </li>

                <li class="nav-item col">
                  <a class="nav-link" id="customer-tab" data-toggle="tab" href="#customer" role="tab" aria-controls="customer" aria-selected="false">Customers</a>
                </li>

                <li class="nav-item col">
                  <a class="nav-link" id="documents-tab" data-toggle="tab" href="#documents" role="tab" aria-controls="documents" aria-selected="false">Documents</a>
                </li>

                <li class="nav-item col">
                  <a class="nav-link" id="bvn-tab" data-toggle="tab" href="#bvn" role="tab" aria-controls="bvn" aria-selected="false">BVN</a>
                </li>

                <li class="nav-item col">
                  <a class="nav-link" id="tellers-tab" data-toggle="tab" href="#tellers" role="tab" aria-controls="tellers" aria-selected="false">Tellers</a>
                </li>

                <li class="nav-item col">
                  <a class="nav-link" id="terminals-tab" data-toggle="tab" href="#terminals" role="tab" aria-controls="terminals" aria-selected="false">Terminals</a>
                </li>

              </ul>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Transactions</div>
                <div class="tab-pane fade" id="customer" role="tabpanel" aria-labelledby="customer-tab"> Customers</div>

                <div class="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">Documents</div>

                <div class="tab-pane fade" id="bvn" role="tabpanel" aria-labelledby="bvn-tab">Bank Verification Number</div>

                <div class="tab-pane fade" id="tellers" role="tabpanel" aria-labelledby="tellers-tab">Tellers</div>

                <div class="tab-pane fade" id="terminals" role="tabpanel" aria-labelledby="terminals-tab">Terminals</div>
              </div>
            </div>

          </>}
      </div>

      {/* user parent panel */}
      <div className="col-md-3">
        {agent.isLoading &&
          <div className="col-md-12">
            <div className="col-md-12" style={{ overflow: 'hidden' }}>
              <Animations />
            </div>
          </div>}

        {!agent.isLoading &&
          // user panel
          <div className="col-md-12 box-shadow bg-white p-2 pt-3 border-radius position-relative user-panel">

            <div className="col-md-12 mb-3">
              <Avatar
                alt={agent.name}
                src={agent.logo}
                className="image-holder bg-light ml-auto mr-auto border"
              />
            </div>
            <h6 className='text-center text-secondary text-bold mb-0'>{agent.name}</h6>
            <p className="small text-light text-center mb-0"> {agent.email}</p>
            <p className="small text-light text-center mb-0"> {agent.phoneNumber}</p>
            <p className="small text-light text-center"> {agent.gender}</p>

            <div className='col-md-12 mt-3'>
              <div className='text-secondary small'>

                {/* <hr /> */}
                <div className="row m-0 justify-content-around">
                  <span className='text-right'>{agent.active ? (
                    <>
                      <span className='badge badge-pill status-success p-2 pl-3 pr-3'><i className='fas fa-check text-white fa-fw'></i> Active</span>
                    </>
                  ) : ( <>
                    <span className='badge badge-pill status-danger p-2 pl-3 pr-3'><i className='fas fa-check text-white fa-fw'></i> Inactive</span>
                    <i className='fas fa-times text-white'></i>
                  </> )}</span>

                  <span className='text-right'>{agent.approved ? (
                    <>
                      <span className='badge badge-pill status-success p-2 pl-3 pr-3'><i className='fas fa-check text-white fa-fw'></i> Approved</span>
                    </>
                  ) : ( <>
                    <span className='badge badge-pill status-danger p-2 pl-3 pr-3'><i className='fas fa-check text-white fa-fw'></i> Not Approved</span>
                    <i className='fas fa-times text-white'></i>
                  </> )}</span>
                </div>
                <hr />

                <div className="row m-0 mb-1">
                  <span className='text-bold text-secondary col p-0'>Created By </span>
                  <span className='text-right col p-0'> {agent.createdBy}</span>
                </div>

                <div className="row m-0 mb-1">
                  <span className='text-bold text-secondary col p-0'>Created On </span>
                  <span className='text-right col p-0'> {changeDate( agent.createdOn )}</span>
                </div>

                <div className="row m-0 mb-1">
                  <span className='text-bold text-secondary col p-0'>Last Updated By </span>
                  <span className='text-right col p-0'> {agent.lastUpdatedBy}</span>
                </div>

                <div className="row m-0 mb-1">
                  <span className='text-bold text-secondary col p-0'>Last Updated On </span>
                  <span className='text-right text-right col p-0'> {changeDate( agent.lastUpdatedOn )}</span>
                </div>


              </div>

            </div>


            {/* details */}
            <div className='col-md-12 mt-4'>
              <h6 className='text-secondary text-bold'>Address</h6>
              <hr className='mt-0' />
              <div className='text-secondary small'>
                <div className="row m-0 mb-1">
                  <span className='text-bold text-secondary col p-0'>Home </span>
                  <span className='text-right col p-0'> {agent.address}</span>
                </div>

                <div className="row m-0 mb-1">
                  <span className='text-bold text-secondary col p-0'>LGA </span>
                  <span className='text-right col p-0'> {agent.lga || agent.city}</span>
                </div>

                <div className="row m-0 mb-1">
                  <span className='text-bold text-secondary col p-0'>State </span>
                  <span className='text-right col p-0'>{agent.state}</span>
                </div>

                <div className="row m-0 mb-1">
                  <span className='text-bold text-secondary col p-0'>Country </span>
                  <span className='text-right col p-0'> {agent.country}</span>
                </div>
              </div>

              <h6 className='text-secondary text-bold mt-4 d-inline-block mr-2'>Aggregator</h6>
              {agent.aggregatorId !== null && <span className='pointer text-success small ml-3'> <i className='fas fa-refresh'></i> Remap</span>}
              {agent.aggregatorId === null &&
                <span className='pointer text-success ml-3'><i className='fas fa-plus-circle'></i> Add</span>
              }
              <hr className='mt-0' />
              {agent.aggregatorId !== null &&
                <div className='text-secondary small'>

                  <div className="row m-0 mb-1">
                    <span className='text-bold text-secondary col p-0'>Name </span>
                    <span className='text-right col p-0'> {agent.aggregatorName}</span>
                  </div>

                  <div className="row m-0 mb-1">
                    <span className='text-bold text-secondary col p-0'>Phone Number </span>
                    <span className='text-right col p-0'> {agent.aggregatorPhoneNumber}</span>
                  </div>
                </div>
              }

            </div>

            <div className="col-md-12 footer-button p-0 text-center mt-3">
              <button className={agent.active ? 'btn-danger status-danger btn col-md-12 p-3' : 'btn-success status-success btn col-md-12 p-3'}>{agent.active ? 'Deactivate' : 'Activate'}</button>
            </div>
          </div>
        }

      </div>
    </div >

  )
}
