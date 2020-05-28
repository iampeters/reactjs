import React from 'react';
import './ListTable.scss';
import { useLocation, useHistory } from 'react-router-dom';

export default function ListTable( props ) {

  const location = useLocation();
  const history = useHistory();

  const goTo = (e) => {
   history.push(location.pathname + `/${e}`);
  }

  return (
    <div className='table-responsive'>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            {props.tableHead.map( ( item, index ) =>
              <th scope="col" key={index}>{item}</th>
            )}
          </tr>
        </thead>
        <tbody>

          {
            props.tableData.map( ( item, index ) =>
              <tr key={index}>
                <th scope="row">{props.seedIndex( index )}</th>
                <td>{item.name? item.name: `${item.firstName} ${item.lastName}`}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{`${new Date( item.createdOn ).getDate()}-${new Date( item.createdOn ).getMonth()}-${new Date( item.createdOn ).getFullYear()}`}</td>
                <td className='text-center'>{item.active ? ( <i className="fas fa-check text-success"></i> ) : ( <i className="fas fa-times text-danger"></i> )}</td>
                <td className='text-center pointer' onClick={()=> goTo(item.id) }><i className="fas fa-eye"></i></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
