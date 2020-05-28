import React, { useState, useEffect } from 'react'
import './Maps.scss';
import { Map, GeoJSON } from 'react-leaflet'
import { useSelector, useDispatch } from 'react-redux';

export default function Maps() {

  let selectedFeature;
  let coordinates;
  const [position, setPosition] = useState( [9.082, 8.6753] );
  const [state, setState] = useState( '' );
  const [initial, setInitial] = useState( true );
  const geoJSON = useSelector( state => state.geoJSON )

  // useEffect( () => {

  //   // some code

  //   return () => {
  //     // cleanup
  //   }
  // }, [] )

  const dispatch = useDispatch();

  const handleClick = ( e ) => {
    const position = e.latlng;
    coordinates = [position.lat, position.lng]
  }

  const onEachFeature = ( feature, layer ) => {
    layer.on( {
      mouseover: ( e ) => highlightFeature( e.target ),
      mouseout: ( e ) => mouseout( e.target ),
      click: ( e ) => selectFeature( e.target ),
    } );
  }

  const highlightFeature = ( feature ) => {
    if ( feature ) {
      feature.setStyle( {
        fillColor: '#0095ff',
        fillOpacity: 1,
        weight: 0.7,
        color: 'white'
      } )

      feature.bringToFront();
    }
  }

  const feature = ( ) => {
    return {
      fillColor: '#edf1f7',
      fillOpacity: 1,
      opacity: 1,
      weight: 0.7,
      color: '#dddddd',
      stroke: '#e4e9f2'
    };
  }

  const mouseout = ( feature ) => {
    if ( feature !== selectedFeature ) {
      resetHighlight( feature );
    }
  }

  const selectFeature = ( feature ) => {
    if ( feature !== selectedFeature ) {
      resetHighlight( selectedFeature )
      selectedFeature = feature;
      // highlightFeature( feature );

      // set the state
      setState( feature.feature.properties.state )
      setInitial( false )
      highlightFeature( feature );

    }
  }

  const resetHighlight = ( feature ) => {
    if ( feature ) {
      feature.setStyle( {
        fillColor: '#edf1f7',
        fillOpacity: 1,
        opacity: 1,
        weight: 0.7,
        color: '#dddddd',
        stroke: '#e4e9f2'
      } )
    }
  }

  return (
    <div className='col-md-12 p-0 h-inherit' style={{ overflow: 'hidden' }}>
      <div className="row m-0 h-inherit">
        <div className="col-md-12 border-bottom p-3">
          <h6 className='mb-0'>Nationwide Coverage</h6>
        </div>
        <div className="col-md-9 h-inherit p-0" style={{ height: '370px' }}>
          <Map center={position} zoom={6} minZoom={5} maxZoom={7} onclick={( e ) => handleClick( e )}>
            {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWFtcGV0ZXJzIiwiYSI6ImNrYXFqd24wbTAwb2YyeXF0YWQzdGc3N24ifQ.SqU3-yuDGdNIKc2KetIvKQ'
          attribution=""
          id='mapbox/light-v9'
          tileSize={512}
          zoomOffset={-1}
        /> */}

            <GeoJSON data={geoJSON}
              style={feature}
              onEachFeature={( feature, layer ) => onEachFeature( feature, layer )}
            />

          </Map>
        </div>

        <div className="col-md-3 p-2 pl-4 pr-4 animated fadeIn">
          <div className={initial?'d-none': ''}>
            <p className="text-secondary text-bold mb-0 small">State</p>
            <h4 className='mb-3 text-info text-bold'>{state}</h4>

            <p className="text-secondary text-bold mb-0 small">Population</p>
            <h4 className='mb-3 text-info text-bold'>2.5M</h4>

            <p className="text-secondary text-bold mb-0 small">Number of Agents</p>
            <h4 className='mb-3 text-info text-bold'>5,000</h4>

            <p className="text-secondary text-bold mb-0 small">Reached</p>
            <h4 className='mb-3 text-info text-bold'>100,000</h4>
          </div>

          <div className={!initial? 'd-none':''}>
            <p className="text-secondary text-bold mb-0 small">States</p>
            <h4 className='mb-3 text-info text-bold'>36</h4>

            <p className="text-secondary text-bold mb-0 small">Population</p>
            <h4 className='mb-3 text-info text-bold'>200M</h4>

            <p className="text-secondary text-bold mb-0 small">Number of Agents</p>
            <h4 className='mb-3 text-info text-bold'>100,000</h4>

            <p className="text-secondary text-bold mb-0 small">Reached</p>
            <h4 className='mb-3 text-info text-bold'>1,000,000</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
