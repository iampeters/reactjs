import React, { useEffect, useState } from 'react'
import './Agents.scss'
import ListTable from '../../components/Tables/ListTables/ListTable'
import { useDispatch, useSelector } from 'react-redux';
import { getAgents } from '../../redux/actions/agentActions';
import Animations from '../../components/Skeleton/Text';
import Pagination from "react-js-pagination";


export default function Agents() {

  const agents = useSelector( state => state.agent );
  const [page, setPage] = useState( 1 )
  const dispatch = useDispatch();

  const paginationConfig = {
    page: 1,
    pageSize: 10,
    whereCondition: JSON.stringify( {} ),
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
        <div className="border-radius bg-white p-5 box-shadow-mild animated fadeIn mb-4"></div>

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
