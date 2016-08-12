import React from 'react';
import { subscribe } from 'horizon-react';
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from 'react-google-maps';

import { updateVenueMarkers } from '../../../actions/actionCreators';

import wedding from '../../../../../config/wedding.js';
import variables from '../../../../../config/variables.js';
import mapStyle from './map-style';
import MapPinPath from './map-pin-path';
import prettyAddress from '../../_partials/pretty-address';

const mapStateToProps = (state) => ({
  venueMap: state.venueMap
});

const pinSymbol = {
  path: MapPinPath,
  fillColor: variables.$blue,
  fillOpacity: 1,
  strokeColor: variables.$black,
  strokeWeight: 0,
  scale: 1
};

const mapBorder = `1px solid ${variables.$gray}`;

class PopUpInfoWindow extends React.Component {
  handleMarkerClick(targetMarker) {
    const markers = this.props.venueMap.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: !marker.showInfo,
          };
        }
        return marker;
    });
    this.props.dispatch(updateVenueMarkers(markers));
  }

  handleMarkerClose(marker) {
    marker.showInfo = false;
    this.props.dispatch(venueMarkerClick(marker));
  }

  renderInfoWindow(ref, marker) {
    const venueAddress = prettyAddress(wedding.venue.address);
    return (
      <InfoWindow
        key={`${ref}_info_window`}
        onCloseclick={this.handleMarkerClose.bind(this, marker)} >
          <div>
            {`${marker.content}`}
            <br />
            <a href={`https://www.google.com/maps?q=${wedding.venue.name} ${venueAddress}`} target="_BLANK">Directions</a>
          </div>
      </InfoWindow>
    );
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: variables.$mapHeight,
              border: mapBorder
            }} >
          </div>
        }
        googleMapElement={
          <GoogleMap
            center={this.props.venueMap.center}
            defaultZoom={14}
            defaultOptions={{ styles : mapStyle }}
            ref='map'>

            {this.props.venueMap.markers.map((marker, index) =>
              {
                const ref = `marker_${index}`;

                return (
                  <Marker
                    index={index}
                    key={index}
                    ref={ref}
                    icon={pinSymbol}
                    position={marker.position}
                    onClick={this.handleMarkerClick.bind(this, marker)}
                  >
                    {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}
                  </Marker>
                );
              })
            }
          </GoogleMap>
        }
      />
    );
  }
}

export default subscribe({
  mapStateToProps
})(PopUpInfoWindow);
