import React from 'react';
import { subscribe } from 'horizon-react';
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from 'react-google-maps';

import { updateVenueMarkers, updateGuideMarkers } from '../../../actions/actionCreators';

import wedding from '../../../../../config/wedding.js';
import variables from '../../../../../config/variables.js';
import mapStyle from './map-style';
import MapPinPath from './map-pin-path';
import prettyAddress from '../../_partials/pretty-address';
import local from '../_styles';

const mapStateToProps = (state) => ({
  venueMap: state.venueMap,
  guideMap: state.guideMap
});

const pinSymbol = (color) => {
  return {
    path: MapPinPath,
    fillColor: color,
    fillOpacity: 1,
    strokeColor: color,
    strokeWeight: 4,
    scale: 1
  }
};


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
    const linkJsx = () => {
      if(marker.website){
        return (
          <div style={{margin: '10px auto'}}>
            <a href={`${marker.website}`} target="_BLANK">Website</a>
          </div>
        );
      }
    }

    return (
      <InfoWindow
        key={`${ref}_info_window`}
        onCloseclick={this.handleMarkerClose.bind(this, marker)} >
          <div>
            {`${marker.content}`}
            {linkJsx()}
            <div>
              <a href={`https://www.google.com/maps?q=${marker.mapQuery}`} target="_BLANK">Directions</a>
            </div>
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
        let markerColor = variables.$blue;
        if(marker.pin === 'food'){
          markerColor = variables.$map.colors.food;
        } else if(marker.pin === 'bar'){
          markerColor = variables.$map.colors.bar;
        } else if(marker.pin === 'fun'){
          markerColor = variables.$map.colors.fun;
        }else if(marker.pin === 'music'){
          markerColor = variables.$map.colors.music;
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
          <div className={local.mapContainer}>
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
