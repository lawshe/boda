import React from 'react';
import { subscribe } from 'horizon-react';
import wedding from '../../../../../config/wedding.js';
import variables from '../../../../../config/variables.js';
import glob from 'styles/app';
import local from './_styles';
import { Row, Col, Button } from 'react-bootstrap';
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
    const accommodationsAddress = prettyAddress(wedding.accommodations.hotel.address);

    const makeList = (listType) => {
      let prettyListType = listType;
      if(listType === 'bar'){
        prettyListType = <span>Drink<br/><i className={`material-icons ${local.icon}`}>local_bar</i></span>;
      } else if(listType === 'music'){
        prettyListType = <span>Music<br/><i className={`material-icons ${local.icon}`}>music_note</i></span>;
      } else if(listType === 'food'){
        prettyListType = <span>Eat<br/><i className={`material-icons ${local.icon}`}>restaurant</i></span>;
      } else if(listType === 'fun'){
        prettyListType = <span>Misc<br/><i className={`material-icons ${local.icon}`}>directions_bike</i></span>;
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
                <li className={`${glob.card} ${local.listItem}`} style={{paddingTop: '0px'}} key={idx}>
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
                  <p className={glob.smallType}><i>{place.tip}</i></p>
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
        <li className={local.todoCat}>{musicList}</li>
        <li className={local.todoCat}>{funList}</li>
        <li className={local.todoCat}>{foodList}</li>
        <li className={local.todoCat}>{barList}</li>
      </ul>
    );

    return (
      <div className={glob.pageDetails}>
        <PageHeader page="City Guide" />

        <h2 style={{ marginBottom: '0px' }}>Welcome to</h2>
        <h1 style={{ marginTop: '0px' }}>{wedding.city.name}</h1>

        <div className={`${glob.section} ${glob.sectionWhite}`} style={{ marginBottom: '0px' }}>
          <h2>Accommodations</h2>
          <Row className={glob.verticalRow}>
            <Col xs={8} sm={4} className={glob.verticalCol}>
                <div className={`${glob.card}`} style={{margin: '0 0 30px 0'}}>
                    <h3>
                      <i className="material-icons">hotel</i>
                      <br />
                      {wedding.accommodations.hotel.name}
                      <br />
                      {wedding.accommodations.hotel.location}
                    </h3>
                    <h4>{accommodationsAddress}</h4>
                    <p style={{marginBottom: '0px'}}>{wedding.accommodations.hotel.discount}</p>
                </div>
            </Col>
            <Col xs={8} sm={4} className={glob.verticalCol}>
              <h4><i>{wedding.accommodations.hotel.highlight}</i></h4>
              <p>{wedding.accommodations.hotel.message}</p>
            </Col>
          </Row>
        </div>

        <div className={`${glob.section} ${glob.sectionBlue}`} style={{ marginTop: '0px' }}>
          <Row>
            <Col xs={12}>
              <h2 style={{ marginBottom: '0px' }}>Transportation</h2>
              <ul className={`${local.transportation}`}>
                  <li>
                    <Button className={`${glob.button}`} href={wedding.guide.transportation.bus.how.website} target="_BLANK">
                      <i className="material-icons">directions_bus</i>
                      <br />
                      {wedding.guide.transportation.bus.how.name}
                    </Button>
                  </li>
                  <li>
                    <Button className={`${glob.button}`} href={wedding.guide.transportation.rideshare.how.website}  target="_BLANK">
                      <i className="material-icons">directions_car</i>
                      <br />
                      {wedding.guide.transportation.rideshare.how.name}
                    </Button>
                  </li>
                  <li>
                    <Button className={`${glob.button}`} href={wedding.guide.transportation.taxi.how.website} target="_BLANK">
                      <i className="material-icons">local_taxi</i>
                      <br />
                      {wedding.guide.transportation.taxi.how.name}
                    </Button>
                  </li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className="section">
          <h2>Things to Do</h2>
          <Row id="map">
            <Col xs={10} xsOffset={1} mdOffset={2} md={8}>
              <Map type="guide" />
            </Col>
          </Row>
          <Row>
            <Col xs={10} xsOffset={1} mdOffset={2} md={8}>
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
