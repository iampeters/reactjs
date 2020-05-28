export const viewReducer = (state = JSON.parse(localStorage.getItem('wideView')), action) => {
  switch (action.type) {
    case 'SET_VIEW': {
      return action.payload;
    }

    default:
      return state;
  }
};


export const geoJsonReducer = (
  state = '',
  action
) => {
  switch (action.type) {
    case 'GEO_JSON': {
      return action.payload;
    }

    default:
      return state;
  }
};
