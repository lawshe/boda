import React from 'react';

import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

import wedding from '../../../../../config/wedding.js';
import variables from '../../../../../config/variables.js';

const mapCoords = {
  lat: parseFloat(wedding.venue.coordinates.latitude, 10),
  lng: parseFloat(wedding.venue.coordinates.longitude, 10)
};

const pinSymbol = {
  path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
  fillColor: variables.$blue,
  fillOpacity: 1,
  strokeColor: variables.$black,
  strokeWeight: 0,
  scale: 1
};

const mapStyles = [
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      { color : variables.$grayLight },
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      { color : variables.$gray },
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text',
    stylers: [
      { color : variables.$grayDark },
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      { color : variables.$gray },
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text',
    stylers: [
      { color : variables.$grayDark },
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      { color: variables.$blueLight }
    ]
  },
  {
    featureType: 'poi',
    stylers: [
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      { color: variables.$greenMuted }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text',
    stylers: [
      { color: variables.$green }
    ]
  },
  {
    featureType: 'poi.school',
    elementType: 'geometry',
    stylers: [
      { color: variables.$whiteDark }
    ]
  },
  {
    featureType: 'poi.government',
    elementType: 'geometry',
    stylers: [
      { color: variables.$whiteDark }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'geometry',
    stylers: [
      { color: variables.$whiteDark }
    ]
  },
  {
    featureType: 'poi.place_of_worship',
    elementType: 'geometry',
    stylers: [
      { color: variables.$whiteDark }
    ]
  },
  {
    featureType: 'poi.sports_complex',
    elementType: 'geometry',
    stylers: [
      { color: variables.$greenMuted }
    ]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      { color: variables.$greenMuted }
    ]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'labels.text',
    stylers: [
      { color: variables.$green }
    ]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry',
    stylers: [
      { color: variables.$white }
    ]
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: [
      { visibility: 'off' }
    ]
  }
];

const mapBorder = `1px solid ${variables.$gray}`;

class StyledMap extends React.Component {

  render () {
    return (
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: '300px',
              border: mapBorder
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={14}
            defaultCenter={mapCoords}
            defaultOptions={{ styles : mapStyles }}
          >
            <Marker position={mapCoords} icon={pinSymbol} />
          </GoogleMap>
        }
      />
    );
  }
}

export default StyledMap;
