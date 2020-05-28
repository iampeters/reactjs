// import geoJSON from '../../APIs/geo/countries.geo.json';
import geoJSON from '../../APIs/geo/nigeria.geo.json';

export const setWideView = () => {
  const state = JSON.parse( localStorage.getItem( 'wideView' ) );

  return ( dispatch ) => {
    dispatch( { type: 'SET_VIEW', payload: state } );
  };
};

export const getGeoJson = () => {

  return dispatch => {
    dispatch( { type: 'GEO_JSON', payload: geoJSON } );
  };
};
