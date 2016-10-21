import wedding from '../../../config/wedding.js';
import { UPDATE_GUIDE_MARKERS, SHOW_GUIDE_MAP_INFO } from '../actions/actionTypes';

const lat = parseFloat(wedding.city.center.lat, 10);
const lng = parseFloat(wedding.city.center.lng, 10);

const makeMarker = (i, place, kind) => {
  const latitude = parseFloat(place.coordinates.lat, 10);
  const longitude = parseFloat(place.coordinates.lng, 10);
  const content = place.name;
  const website = place.website;
  return {
    idx: i,
    position: new google.maps.LatLng(latitude, longitude),
    showInfo: false,
    pin: kind,
    content,
    website,
    mapQuery: `${place.name} ${place.address.street} ${place.address.city} ${place.address.state} ${place.address.zip}`
  };
};


const getMarkers = () => {
  const markers = [];

  wedding.guide.bar.list.forEach(
    (bar, i) => {
      markers.push(makeMarker(i, bar, 'bar'));
    }
  );

  wedding.guide.music.list.forEach(
    (music, i) => {
      markers.push(makeMarker(i, music, 'music'));
    }
  );

  wedding.guide.food.list.forEach(
    (place, i) => {
      markers.push(makeMarker(i, place, 'food'));
    }
  );

  wedding.guide.fun.list.forEach(
    (place, i) => {
      markers.push(makeMarker(i, place, 'fun'));
    }
  );

  wedding.guide.shop.list.forEach(
    (place, i) => {
      markers.push(makeMarker(i, place, 'shop'));
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
    case SHOW_GUIDE_MAP_INFO: {
      const newGuideMarkers = Object.assign({}, state, { markers: action.markers });
      return newGuideMarkers;
    }
    default:
      return state;
  }
}
