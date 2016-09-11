import React from 'react';
import { subscribe } from 'horizon-react';

import wedding from '../../../../../config/wedding.js';
import variables from '../../../../../config/variables.js';
import glob from 'styles/app';
import local from './_styles';
import { Row, Col } from 'react-bootstrap';
import PageHeader from '../../_partials/page-header';
import prettyAddress from '../../_partials/pretty-address';
import Map from '../../_partials/map/map';

import { showGuideMapInfo } from '../../../actions/actionCreators';

/**
  *
  * The City Guide page
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

const mapStateToProps = (state) => ({
  guideMap: state.guideMap
});

class CityGuide extends React.Component {
  handlePlaceNameClick(e){
    e.preventDefault();
    const element = document.getElementById('map')
    const alignWithTop = true;
    element.scrollIntoView(alignWithTop);
    const placeParts = e.target.id.split('-');
    const list = placeParts[0];
    const index = parseInt(placeParts[1]);
    const markers = this.props.guideMap.markers.map(
      (marker, i) => {
        let show = false;
        if (marker.pin === list && marker.idx === index) {
          show = true
        }
        return {
          ...marker,
          showInfo: show,
        };
      }
    );
    this.props.dispatch(showGuideMapInfo(markers));
  }

  render(){
    const accommodationsAddress = prettyAddress(wedding.accommodations.address);

    const makeList = (listType) => {
      return (
        <ul className={`${local.todoListCol}`}>
          {wedding.guide[listType].list.map(
            (place, idx) => {
              return (
                <li key={idx}>
                  <h4>
                    <a
                      href={place.website}
                      style={{
                        borderColor : variables.$map.colors[listType],
                        color : variables.$map.colors[listType]
                      }}
                      target="_BLANK"
                    >
                      {place.name}
                    </a>
                  </h4>
                  <h5>{place.address.street}</h5>
                  <p>
                    <a href="#" style={{border : '0px', color : variables.$map.colors[listType]}} onClick={this.handlePlaceNameClick.bind(this)} id={`${listType}-${idx}`}>
                      View on Map
                    </a>
                  </p>
                  <p><i>{place.tip}</i></p>
                </li>
              );
            }
          )}
        </ul>
      )
    }

    const barList = makeList('bar');
    const musicList = makeList('music');
    const foodList = makeList('food');
    const funList = makeList('fun');

    return (
      <div className={glob.pageDetails}>
        <PageHeader page="City Guide" />

        <div className="section">
          <h2>Accommodations</h2>
          <Row>
            <Col sm={10} smOffset={1} md={6} mdOffset={3}>
              <div className={`${glob.card}`}>
                <h3>{wedding.accommodations.name}</h3>
                <h4 style={{marginBottom: '0px'}}>{accommodationsAddress}</h4>
              </div>
            </Col>
          </Row>
        </div>

        <div className="section">
          <h2>Transportation</h2>
          <Row>
            <Col sm={12} md={6} mdOffset={3}>
              <div className={`${glob.card}`} style={{margin: '0 0 30px 0'}}>
                <Row>
                  <Col sm={12} md={4}>
                    <h3>Ride Sharing</h3>
                    <h4>{wedding.guide.transportation.rideshare.how.name}</h4>
                    <p><a href={wedding.guide.transportation.rideshare.how.website}>website</a></p>
                  </Col>
                  <Col sm={12} md={4}>
                    <h3>Public</h3>
                    <h4>{wedding.guide.transportation.bus.how.name}</h4>
                    <p><a href={wedding.guide.transportation.bus.how.website}>website</a></p>
                  </Col>
                  <Col sm={12} md={4}>
                    <h3>Cab</h3>
                    <h4>{wedding.guide.transportation.taxi.how.name}</h4>
                    <p><a href={wedding.guide.transportation.taxi.how.website}>website</a></p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>

        <div className="section">
          <h2>Things to Do</h2>
          <Row id="map">
            <Col xs={10} xsOffset={1} sm={8} smOffset={2}>
              <Map type="guide" />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={3} className={`${local.todoCol}`}>
              <h3 className={`${local.todoListHeader}`} style={{backgroundColor: variables.$map.colors.music}}>Music</h3>
              {musicList}
            </Col>
            <Col sm={12} md={3} className={`${local.todoCol}`}>
              <h3 className={`${local.todoListHeader}`} style={{backgroundColor: variables.$map.colors.bar}}>Drinks</h3>
              {barList}
            </Col>
            <Col sm={12} md={3} className={`${local.todoCol}`}>
              <h3 className={`${local.todoListHeader}`} style={{backgroundColor: variables.$map.colors.food}}>Food</h3>
              {foodList}
            </Col>
            <Col sm={12} md={3} className={`${local.todoCol}`}>
              <h3 className={`${local.todoListHeader}`} style={{backgroundColor: variables.$map.colors.fun}}>Misc.</h3>
              {funList}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
};

export default subscribe({
  mapStateToProps
})(CityGuide);
