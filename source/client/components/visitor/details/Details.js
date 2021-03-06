import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import wedding from '../../../../../config/wedding.js';
import glob from 'styles/app';
import effects from 'styles/effects';
import local from './_styles';
import Map from '../../_partials/map/map';
import PageHeader from '../../_partials/page-header';
import EucThree from '../../svg/euc-3';
import EucFour from '../../svg/euc-4';
import PrettyAddress from '../../_partials/pretty-address';
import fxns from '../../../../utils/fxns';
import Scroll from 'react-scroll';

/**
  *
  * The details page
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

const wordDate = fxns.weddingWordDate();

class Details extends React.Component {
  componentDidMount () {
    scrollSpy.update();
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    const isIos = fxns.iOS(navigator);
    const sectionImageClass = isIos ? glob.iosBgImg : '';

    const directions = wedding.venue.directions.map((direction) =>
      <li><p>{direction}</p></li>
    );

    const attire = wedding.attire.message.map((msg) =>
      <p className={local.attire}>{msg}</p>
    );

    const reception = wedding.reception.message.map((msg) =>
      <p className={local.reception}>{msg}</p>
    );

    const weddingDate = fxns.weddingDotDate();

    const venueAddress = PrettyAddress(wedding.venue.address);

    return (
      <div className={`${glob.pageDetails} ${effects.fade}`}>
        <PageHeader page="The Wedding" />

        <div className={`${glob.section}`}>
          <Row>
            <Col xs={12}>
              <div className={`${local.eucDate} ${local.eucBorderTop}`}>
                <EucFour color="$green" />
              </div>
              <h2 className={`${local.date}`}>
                {weddingDate}
              </h2>
              <div className={`${local.eucDate} ${local.eucBorderBtm}`}>
                <EucThree color="$green" />
              </div>
            </Col>
          </Row>
        </div>


        <div className={`${glob.section} ${glob.sectionImage} ${sectionImageClass}`}>
          <Row>
            <Col xs={12} className={glob.verticalCol}>
              <div className={`${glob.card} ${glob.cardBordered} ${local.timeline}`}>
                <div className={`${glob.cardContent}`}>
                  <h3 style={{ marginTop: '0px' }}>{wordDate}</h3>
                  <h2 style={{ margin: '0px' }}>{wedding.venue.name}</h2>
                  {wedding.timeline.map((timelineEvent, index) => {
                    const ref = `timeline_${index}`;

                    return (
                      <Row className={local.event} key={ref}>
                        <Col xs={5}>
                          <h3 style={{ textAlign: 'right' }} className={local.eventDetail}>
                            {timelineEvent.time.start}
                          </h3>
                        </Col>
                        <Col xs={2} style={{ padding: '0 5px' }}>
                          <h3 className={`${local.eventDetail} ${local.dot}`}>
                            &middot;&middot;&middot;&middot;&middot;&middot;&middot;
                          </h3>
                        </Col>
                        <Col xs={5}>
                          <h3 style={{ textAlign: 'left' }} className={local.eventDetail}>
                            {timelineEvent.eventName}
                          </h3>
                        </Col>
                      </Row>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className={`${glob.section}`}>
          <Row>
            <Col xs={10} sm={4} className={glob.verticalCol}>
              <h4 className={local.directionsHeader}>Ceremony & Reception at</h4>
              <h5 className={local.directionsHeader}>{venueAddress}</h5>
              <ul className={local.directions}>{directions}</ul>
            </Col>
            <Col xs={10} sm={4} className={glob.verticalCol}>
              <div className={local.venueMap}>
                <Map type="venue" />
              </div>
            </Col>
          </Row>
        </div>

        <div className={`${glob.section} ${glob.sectionWhiteMed}`}>
          <h2 className={`${glob.headerLines}`}><span>Attire</span></h2>
          <Row>
            <Col xs={10} xsOffset={1} sm={4} smOffset={4}>
              <h3>{wedding.attire.dressCode}</h3>
              <p style={{ margin: '0px' }}>{attire}</p>
            </Col>
          </Row>
        </div>

        <div className={`${glob.section}`}>
          <h2 className={`${glob.headerLines} ${glob.black}`}><span>Reception</span></h2>
          <Row>
            <Col xs={6} sm={6}>
              <h3 style={{ margin: '0px', textAlign: 'right' }}>
                <i className="material-icons">local_dining</i>
                <br />
                {wedding.reception.meal.what}
              </h3>
            </Col>
            <Col xs={6} sm={6}>
              <h3 style={{ margin: '0px', textAlign: 'left' }}>
                <i className="material-icons">local_drink</i>
                <br />
                {wedding.reception.bar.what}
              </h3>
            </Col>
          </Row>
          <Row style={{ marginTop: '30px' }}>
            <Col xs={10} xsOffset={1} sm={4} smOffset={4}>
              {reception}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h2 style={{ margin: '30px 0 0 0' }}>Check back for updates!</h2>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Details;
