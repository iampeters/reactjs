import React, { useEffect } from 'react';
import './ListTable.scss';

export default function ListTable( props ) {


  // useEffect( () => { } )


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
                <th scope="row">{props.seedIndex(index)}</th>
                <td>{item.name}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{`${new Date( item.createdOn ).getDate()}-${new Date( item.createdOn ).getMonth()}-${new Date( item.createdOn ).getFullYear()}`}</td>
                <td className='text-center'>{item.active ? ( <i className="fas fa-check text-success"></i> ) : ( <i className="fas fa-times text-danger"></i> )}</td>
                <td className='text-center pointer'><i className="fas fa-eye"></i></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
