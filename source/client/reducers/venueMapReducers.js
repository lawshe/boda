import wedding from '../../../config/wedding.js';
import { UPDATE_VENUE_MARKERS } from '../actions/actionTypes';
// import { GoogleMap } from 'react-google-maps';

const lat = parseFloat(wedding.venue.coordinates.latitude, 10);
const lng = parseFloat(wedding.venue.coordinates.longitude, 10);

const venueInfoContent = `${wedding.venue.name}`;

const markers = [
  {
    position: new google.maps.LatLng(lat, lng),
    showInfo: false,
    content: venueInfoContent
  }
];

const initialState = {
  center: {
    lat,
    lng
  },
  markers
};

export default function venueMapReducers(state = initialState, action) {
  switch (action.type) {
    case UPDATE_VENUE_MARKERS: {
      const newVenueMarkerState = Object.assign({}, state, { markers: action.markers });
      return newVenueMarkerState;
    }
    default:
      return state;
  }
}
