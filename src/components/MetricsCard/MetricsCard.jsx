import React from 'react'

export default function MetricsCard( { name, icon, value, bgColor, textColor, showSign, width } ) {
  return (
    <div className={"mb-3 " + width}>
      <div className='p-2 mb-3 bg-white box-shadow border-radius text-center portal-card'>
        <div className="row m-0">
          <div className={"col-4 p-1 text-center " + bgColor}>
            <div className="row m-0 justify-content-center align-content-center p-2">
              <i className="material-icons orange600 fa-2x">{icon}</i>
            </div>
          </div>
          <div className="col-8 p-1">
            <p className='text-dark text-center mb-0 p-1 text-bold text-secondary'>{name}</p>
            <h6 className={"text-dark text-center text-bold mb-0 " + textColor}>
              {showSign && <>&#8358;{value.toLocaleString()}</>}{!showSign && value}
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}
