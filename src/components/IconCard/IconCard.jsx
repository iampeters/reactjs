import React from 'react'
import './IconCard.scss';
import { NavLink } from 'react-router-dom';

export default function IconCard({ route, bgColor, textColor, name, value, icon, showSign}) {
  return (
    <div className="col-md-3 mb-3 portal-card">
      <NavLink to={route}>
        <div className='mb-3 bg-white box-shadow border-radius pointer'>
          <div className="row m-0">
            <div className={"col-4 p-1 text-center " + bgColor}>
              <div className="row m-0 justify-content-center align-content-center p-1">
                <i className="material-icons orange600 fa-3x">{icon}</i>
              </div>
            </div>
            <div className="col-8 p-1">
              <p className='text-center text-secondary mb-0 p-1 text-bold'>{name}</p>
              <h6 className={"text-center text-bold " + textColor}> {showSign && <>&#8358;</>}{value.toLocaleString()}</h6>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  )
}
