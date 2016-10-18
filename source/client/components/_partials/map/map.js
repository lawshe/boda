import React from 'react';
import subscribe from 'horizon-react/lib/components/subscribe';
import GoogleMapLoader from 'react-google-maps/lib/GoogleMapLoader';
import GoogleMap from 'react-google-maps/lib/GoogleMap';
import InfoWindow from 'react-google-maps/lib/InfoWindow';
import Marker from 'react-google-maps/lib/Marker';
import updateVenueMarkers from '../../../actions/actionCreators';
import updateGuideMarkers from '../../../actions/actionCreators';
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
    strokeWeight: 0,
    scale: 1
  }
};


class PopUpInfoWindow extends React.Component {
  constructor(props) {
    super(props);
    let center = this.state ? this.state.center : props.guideMap.center;

    this.state = { center: props.venueMap.center };
  }

  handleMarkerClick(targetMarker) {
    let markerSet = 'guideMap';
    if(this.props.type === 'venue'){
      markerSet = 'venueMap';
    }
    const newCenter = { lat: targetMarker.position.lat(), lng: targetMarker.position.lng() };
    this.setState({ center: newCenter });
    const markers = this.props[markerSet].markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: !marker.showInfo,
          };
        } else {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
    });
    if (this.props.type === 'guide') {
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
      if (marker.website) {
        return (
          <div>
            <a href={`${marker.website}`} target="_BLANK">Website</a>
          </div>
        );
      }
    }

    let markerType = '';
    if ( marker.pin === 'fun' ) {
      markerType = 'Misc';
    } else if ( marker.pin === 'bar' ) {
      markerType = 'Drinks';
    } else if ( marker.pin === 'food' ) {
      markerType = 'Food';
    } else if ( marker.pin === 'music' ) {
      markerType = 'Music';
    } else if ( marker.pin === 'shop' ) {
      markerType = 'Shop';
    }

    return (
      <InfoWindow
        key={`${ref}_info_window`}
        onCloseclick={this.handleMarkerClose.bind(this, marker)} >
          <div style={{ padding: '5px'}}>
            <div style={{ fontSize: '10px' }}>{markerType}</div>
            <div style={{ fontSize: '14px', margin: '10px auto' }}>{`${marker.content}`}</div>
            <div style={{ fontSize: '12px', margin: '10px auto' }}>{linkJsx()}</div>
            <div style={{ fontSize: '12px' }}>
              <a href={`https://www.google.com/maps?q=${marker.mapQuery}`} target="_BLANK">Directions</a>
            </div>
          </div>
      </InfoWindow>
    );
  }

  render() {
    let markers = [];

    // height
    let mapHeight = variables.$mapHeight;

    // center
    let center = this.state.center;
    let defaultZoom = 14;

    if (this.props.type === 'guide') {
      markers = this.props.guideMap.markers;
      defaultZoom = 11;
    } else{
      markers = this.props.venueMap.markers;
      defaultZoom = 14;
      mapHeight = variables.$mapHeightVenue;
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
        } else if(marker.pin === 'music'){
          markerColor = variables.$map.colors.music;
        } else if(marker.pin === 'shop'){
          markerColor = variables.$map.colors.shop;
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
          <div className={`${local.mapContainer}`} style={{ height: mapHeight}}>
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
