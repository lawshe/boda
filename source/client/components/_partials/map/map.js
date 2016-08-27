import React from 'react';
import { subscribe } from 'horizon-react';
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from 'react-google-maps';

import { updateVenueMarkers, updateGuideMarkers } from '../../../actions/actionCreators';

import wedding from '../../../../../config/wedding.js';
import variables from '../../../../../config/variables.js';
import mapStyle from './map-style';
import MapPinPath from './map-pin-path';
import prettyAddress from '../../_partials/pretty-address';

const mapStateToProps = (state) => ({
  venueMap: state.venueMap,
  guideMap: state.guideMap
});

const pinSymbol = (color) => {
  return {
    path: MapPinPath,
    fillColor: variables[color],
    fillOpacity: 1,
    strokeColor: variables.$black,
    strokeWeight: 0,
    scale: 1
  }
};

const mapBorder = `1px solid ${variables.$gray}`;

class PopUpInfoWindow extends React.Component {
  handleMarkerClick(targetMarker) {
    let markerSet = 'guideMap';
    if(this.props.type === 'venue'){
      markerSet = 'venueMap';
    }
    const markers = this.props[markerSet].markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: !marker.showInfo,
          };
        }
        return marker;
    });

    if(this.props.type === 'guide'  ){
      this.props.dispatch(updateGuideMarkers(markers));
    } else{
      this.props.dispatch(updateVenueMarkers(markers));
    }
  }

  handleMarkerClose(marker) {
    this.props.dispatch(this.handleMarkerClick(marker));
  }

  renderInfoWindow(ref, marker) {
    return (
      <InfoWindow
        key={`${ref}_info_window`}
        onCloseclick={this.handleMarkerClose.bind(this, marker)} >
          <div>
            {`${marker.content}`}
            <br />
            <a href={`https://www.google.com/maps?q=${marker.mapQuery}`} target="_BLANK">Directions</a>
          </div>
      </InfoWindow>
    );
  }

  render() {
    let markers = [];

    // center
    let center = this.props.venueMap.center;
    let defaultZoom = 14;

    if(this.props.type === 'venue'){
      markers = this.props.venueMap.markers;
    } else if(this.props.type === 'guide'){
      markers = this.props.guideMap.markers;
      center = this.props.guideMap.center;
      defaultZoom = 11;
    }

    // markers
    const markersJsx = markers.map((marker, index) =>
      {
        const ref = `marker_${index}`;
        let markerColor = '$blue';
        if(marker.pin === 'food'){
          markerColor = '$green';
        } else if(marker.pin === 'bar'){
          markerColor = '$blackLight';
        } else if(marker.pin === 'fun'){
          markerColor = '$pink';
        }

        return (
          <Marker
            index={index}
            key={index}
            ref={ref}
            icon={pinSymbol(markerColor)}
            position={marker.position}
            onClick={this.handleMarkerClick.bind(this, marker)}
          >
            {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}
          </Marker>
        );
    });

    return (
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: variables.$mapHeight,
              border: mapBorder,
              marginBottom: '30px'
            }} >
          </div>
        }
        googleMapElement={
          <GoogleMap
            center={center}
            defaultZoom={defaultZoom}
            defaultOptions={{ styles : mapStyle }}
            ref='map'>

            {markersJsx}

          </GoogleMap>
        }
      />
    );
  }
}

export default subscribe({
  mapStateToProps
})(PopUpInfoWindow);
