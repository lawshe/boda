import wedding from '../../../config/wedding.js';
import { UPDATE_GUIDE_MARKERS } from '../actions/actionTypes';
// import { GoogleMap } from 'react-google-maps';
// console.log('-----wedding',wedding);
// const cityLat = parseFloat(wedding.venue.coordinates.latitude, 10);
// const cityLng = parseFloat(wedding.venue.coordinates.longitude, 10);

const lat = parseFloat(wedding.city.center.lat, 10);
const lng = parseFloat(wedding.city.center.lng, 10);

const makeMarker = (place, kind) => {
  const latitude = parseFloat(place.coordinates.lat, 10);
  const longitude = parseFloat(place.coordinates.lng, 10);
  const content = place.name;
  return {
    position: new google.maps.LatLng(latitude, longitude),
    showInfo: false,
    pin: kind,
    content,
    mapQuery: `${place.name} ${place.address.street} ${place.address.city} ${place.address.state} ${place.address.zip}`
  };
};

const getMarkers = () => {
  const markers = wedding.guide.bars.list.map(
    (bar) => (makeMarker(bar, 'bar'))
  );

  wedding.guide.music.list.forEach(
    (venue) => {
      markers.push(makeMarker(venue, 'venue'));
    }
  );

  wedding.guide.food.list.forEach(
    (place) => {
      markers.push(makeMarker(place, 'food'));
    }
  );

  wedding.guide.fun.list.forEach(
    (place) => {
      markers.push(makeMarker(place, 'fun'));
    }
  );

  return markers;
};

const initialState = {
  center: {
    lat,
    lng
  },
  markers: getMarkers()
};
export default function guideMapReducers(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GUIDE_MARKERS: {
      const newGuideMarkerState = Object.assign({}, state, { markers: action.markers });
      return newGuideMarkerState;
    }
    default:
      return state;
  }
}
