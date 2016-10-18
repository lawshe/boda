import React from 'react';
import subscribe from 'horizon-react/lib/components/subscribe';
import wedding from '../../../../../config/wedding.js';
import variables from '../../../../../config/variables.js';
import glob from 'styles/app';
import local from './_styles';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import PageHeader from '../../_partials/page-header';
import prettyAddress from '../../_partials/pretty-address';
import Map from '../../_partials/map/map';
import { showGuideMapInfo } from '../../../actions/actionCreators';
import greetings from '../../../../../static/images/greetings.png';
import greetingsSm from '../../../../../static/images/greetings_sm.png';
import Scroll from 'react-scroll';

/**
  *
  * The City Guide page
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

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

  componentDidMount () {
    scrollSpy.update();
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
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
      } else if(listType === 'shop'){
        prettyListType = <span>Shop<br/><i className={`material-icons ${local.icon}`}>shopping_basket</i></span>;
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
                <li className={`${glob.card} ${local.listItem}`} key={idx}>
                  <h5
                    style={{
                      borderColor : variables.$map.colors[listType],
                      color : variables.$map.colors[listType],
                      marginBottom: '5px'
                    }}>
                    {place.name}
                  </h5>
                  <p className={glob.smallType}>{place.description}</p>
                  <p>{place.address.street}</p>
                  <p style={{ marginBottom: '0px' }}>
                    <a className={local.guideLink} href="#" style={{ color: variables.$map.colors[listType]}} onClick={this.handlePlaceNameClick.bind(this)} id={`${listType}-${idx}`}>
                      <i className="material-icons">map</i>
                    </a>
                    <a className={local.guideLink} href={place.website} style={{ color : variables.$map.colors[listType]}} target="_BLANK">
                      <i className="material-icons">arrow_forward</i>
                    </a>
                  </p>
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
    const shopList = makeList('shop');

    const fullList = (
      <ul className={local.todoCatList}>
        <li className={local.todoCat}>{musicList}</li>
        <li className={local.todoCat}>{funList}</li>
        <li className={local.todoCat}>{foodList}</li>
        <li className={local.todoCat}>{barList}</li>
        <li className={local.todoCat}>{shopList}</li>
      </ul>
    );

    const greetingsImg = window.innerWidth > 500 ? greetings : greetingsSm ;

    return (
      <div className={glob.pageDetails}>
        <PageHeader page="City Guide" />

        <div className={`${glob.section}`} style={{ paddingBottom: '0px' }}>
          <h2 style={{ margin: '0px 0px -15px 0px' }}>Welcome to</h2>
          <h1 style={{ marginTop: '0px' }}>{wedding.city.name}</h1>
        </div>

        <div className={`${glob.section} ${glob.sectionBlue}`} style={{  }}>
          <Row>
            <Col xs={11} sm={6} md={4} className={glob.verticalCol}>
              {<img src={greetingsImg} className={local.greetings} />}
            </Col>
          </Row>
        </div>

        <div className={`${glob.section}`}>
          <h2 className={`${glob.headerLines} ${glob.black}`}><span>Accommodations</span></h2>
          <Row>
            <Col xs={10} sm={6} className={glob.verticalCol}>
                <div className={`${glob.card} ${local.hotel}`}>
                    <h3 style={{ margin: '0px' }}>
                      {wedding.accommodations.hotel.name}
                      <br />
                      {wedding.accommodations.hotel.location}
                    </h3>
                    <h5>{accommodationsAddress}</h5>
                    <p style={{marginBottom: '0px'}}>
                      <a href="{wedding.accommodations.hotel.discountLink}" target="_BLANK">Book Hotel at {wedding.accommodations.hotel.discountAmt}% OFF</a>
                    </p>
                </div>
            </Col>
            <Col xs={8} sm={6} className={`${glob.verticalCol} ${local.hotelAbout}`}>
              <h2 style={{ marginBottom: '-10px' }}><i className="material-icons">hotel</i></h2>
              <h4><i>{wedding.accommodations.hotel.highlight}</i></h4>
              <p>{wedding.accommodations.hotel.message}</p>
            </Col>
          </Row>
        </div>

        <div className={`${glob.section} ${glob.sectionWhiteMed}`}>
          <Row>
            <Col xs={12}>
              <h2 className={`${glob.headerLines}`}><span>Transportation</span></h2>
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

        <div  className={`${glob.section}`}>
          <h2 className={`${glob.headerLines} ${glob.black}`}><span>Things to Do</span></h2>
          <Row id="map">
            <Col xs={10} xsOffset={1} lg={6} lgOffset={3}>
              <Map type="guide" />
            </Col>
          </Row>
          <Row>
            <Col xs={10} xsOffset={1} lg={6} lgOffset={3}>
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
