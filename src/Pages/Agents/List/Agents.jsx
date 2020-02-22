import React, { useEffect, useState } from 'react'
import './Agents.scss'
import ListTable from '../../../components/Tables/ListTables/ListTable'
import { useDispatch, useSelector } from 'react-redux';
import { getAgents } from '../../../redux/actions/agentActions';
import Animations from '../../../components/Skeleton/Text';
import Pagination from "react-js-pagination";

export default function Agents() {

  const agents = useSelector( state => state.agent );
  const [page, setPage] = useState( 1 )
  const [show, setShow] = useState(false)
  const dispatch = useDispatch();

  const filter = {};
  
  const showSearch = () => {
    setShow(!show)
  };

  const paginationConfig = {
    page: 1,
    pageSize: 10,
    whereCondition: JSON.stringify( filter ),
    isLoading: true
  }

  const headers = [
    '#', 'Name', 'Phone Number', 'Email', 'Address', 'Date', 'Status', 'Actions'
  ];

  useEffect( () => {
    window.scrollTo( 0, 0 );
    dispatch( getAgents( paginationConfig ) );

  }, [dispatch] );

  const handlePageChange = ( e ) => {
    setPage( e );
    paginationConfig.page = e;

    dispatch( getAgents( paginationConfig ) )
  }

  const getIndexSeed = ( index ) => {
    paginationConfig.page = page;
    return ( paginationConfig.page - 1 ) * paginationConfig.pageSize + index + 1;
  }

  const handleSearch = ( e ) => {
    e.preventDefault();

    paginationConfig.whereCondition = JSON.stringify(filter)    
    
    dispatch(getAgents(paginationConfig))
  }

  if ( agents.isLoading ) {
    return (
      <div className="row">
        <div className="col-md-12">
          <Animations />
        </div>
      </div>
    )
  } else {
    return (
      <>
        <div className="border-radius text-right animated fadeIn mb-4">
          <button className='btn btn-primary' onClick={showSearch}> <i className="fas fa-search" ></i> Search</button>
        </div>

        {show ? (
          <div className="border-radius bg-white p-4 box-shadow-mild animated fadeIn mb-4">
            <form onSubmit={handleSearch}>
              <div className="form-row">

                <div className="form-group col-md-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" id='name' className="form-control" placeholder='Name' value={filter.name} onChange={e => filter.name = e.target.value} />
                </div>

                <div className="form-group col-md-3">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" inputMode='tel' id='phoneNumber' className="form-control" placeholder='Phone Number' value={filter.phoneNumber} onChange={e => filter.phoneNumber = e.target.value} />
                </div>

                <div className="form-group col-md-3">
                  <label htmlFor="startDate">Start Date</label>
                  <input type='date' id='startDate' className="form-control" placeholder='Start Date' value={filter.dateCreatedFrom} onChange={e => filter.dateCreatedFrom = e.target.value} />
                </div>

                <div className="form-group col-md-3">
                  <label htmlFor="startDate">End Date</label>
                  <input type='date' id='startDate' className="form-control" placeholder='Start Date' value={filter.dateCreatedTo} onChange={e => filter.dateCreatedTo = e.target.value} />
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <button type='submit' className="btn btn-primary mr-2">Search</button>
                    <button type='reset' className="btn btn-light text-danger" onClick={() => dispatch( getAgents( paginationConfig ) )}>Reset</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ): ''}

        <div className="border-radius bg-white p-3 box-shadow-mild animated fadeIn">
          <ListTable tableHead={headers} tableData={agents.items} seedIndex={getIndexSeed} />
          <div className='row m-0 justify-content-end'>
            <Pagination
              activePage={page}
              itemsCountPerPage={paginationConfig.pageSize}
              totalItemsCount={agents.total}
              pageRangeDisplayed={5}
              itemClass='page-item'
              linkClass='page-link'
              onChange={handlePageChange}
            />
          </div>
        </div>
      </>
    )
  }
}
