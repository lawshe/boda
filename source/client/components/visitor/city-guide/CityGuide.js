import React from 'react';
import { subscribe } from 'horizon-react';

import wedding from '../../../../../config/wedding.js';
import variables from '../../../../../config/variables.js';
import glob from 'styles/app';
// import type from 'styles/type';
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
      let prettyListType = listType;
      if(listType === 'bar'){
        prettyListType = 'Drink';
      } else if(listType === 'music'){
        prettyListType = 'Music';
      } else if(listType === 'food'){
        prettyListType = 'Eat';
      } else if(listType === 'fun'){
        prettyListType = 'Misc';
      }
      return (
        <ul className={`${local.todoListCol}`}>
          <li
            className={`${glob.card} ${local.todoListHeader}`}
            style={{backgroundColor: variables.$map.colors[listType]}}
          >
            <h3>
              {prettyListType}
            </h3>
          </li>
          {wedding.guide[listType].list.map(
            (place, idx) => {
              return (
                <li className={glob.card} style={{paddingTop: '0px'}} key={idx}>
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

    const fullList = (
      <ul className={local.todoCatList}>
        <li className={local.todoCat}>{barList}</li>
        <li className={local.todoCat}>{musicList}</li>
        <li className={local.todoCat}>{foodList}</li>
        <li className={local.todoCat}>{funList}</li>
      </ul>
    );

    return (
      <div className={glob.pageDetails}>
        <PageHeader page="City Guide" />

        <div className="section">
          <h2>Accommodations</h2>
          <Row>
            <Col xs={8} xsOffset={2} lg={6} lgOffset={3}>
              <div className={`${glob.card}`} style={{margin: '0 0 30px 0'}}>
                <h3>{wedding.accommodations.name}</h3>
                <h4 style={{marginBottom: '0px'}}>{accommodationsAddress}</h4>
              </div>
            </Col>
          </Row>
        </div>

        <div className="section">
          <h2>Transportation</h2>
          <Row>
            <Col smOffset={2} lg={6} lgOffset={3}>
              <Row style={{margin: '0 0 15px 0'}}>
                <Col xs={12} sm={4}>
                  <div className={`${glob.card} ${local.transportation}`}>
                    <h3>{wedding.guide.transportation.bus.how.name}</h3>
                    <p style={{marginBottom: '0px'}}>
                      <a href={wedding.guide.transportation.bus.how.website} target="_BLANK">website</a>
                    </p>
                  </div>
                </Col>
                <Col xs={12} sm={4}>
                  <div className={`${glob.card} ${local.transportation}`}>
                    <h3>{wedding.guide.transportation.rideshare.how.name}</h3>
                    <p style={{marginBottom: '0px'}}>
                      <a href={wedding.guide.transportation.rideshare.how.website}  target="_BLANK">website</a>
                    </p>
                  </div>
                </Col>
                <Col xs={12} sm={4}>
                  <div className={`${glob.card} ${local.transportation}`}>
                    <h3>{wedding.guide.transportation.taxi.how.name}</h3>
                    <p style={{marginBottom: '0px'}}>
                      <a href={wedding.guide.transportation.taxi.how.website} target="_BLANK">website</a>
                    </p>
                  </div>
                </Col>
              </Row>
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
            <Col xs={12}>
              {fullList}
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
