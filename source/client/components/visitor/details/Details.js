import React from 'react';
import { Row, Col } from 'react-bootstrap';

import wedding from '../../../../../config/wedding.js';

import glob from 'styles/app';
import local from './_styles';
import Map from '../../_partials/map/map';

import PageHeader from '../../_partials/page-header';
import WeddingDate from '../../_partials/pretty-wedding-date';
import EucThree from '../../svg/euc-3';
import EucFour from '../../svg/euc-4';
import VenueAddress from '../../_partials/venue-address';

/**
  *
  * The details page
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

export default () => {
  return (
    <div className={glob.pageDetails}>
      <PageHeader page="The Wedding" />

      <div className={`${glob.section}`}>
        <Row>
          <Col xs={12}>
            <div className={`${local.eucDate} ${local.eucBorderTop}`}>
              <EucFour color="$green" />
            </div>
            <h2 className={`${local.date}`}>
              <WeddingDate />
            </h2>
            <div className={`${local.eucDate} ${local.eucBorderBtm}`}>
              <EucThree color="$green" />
            </div>
          </Col>
        </Row>
      </div>

      <div className={`${glob.section} ${glob.sectionWhite}`} style={{ marginBottom: '0px' }}>
        <Row>
          <Col xs={10} xsOffset={1} sm={5} md={4} mdOffset={0} className={glob.verticalCol}>
            <div className={`${glob.card} ${glob.cardImage} ${local.timeline}`}>
              <div className={`${glob.cardContent}`}>
                <h4 style={{ marginTop: '0px' }}>Ceremony & Reception at</h4>
                <h2 style={{ margin: '0px' }}>{wedding.venue.name}</h2>
                <h5 style={{ marginTop: '0px' }}><VenueAddress /></h5>
                {wedding.timeline.map((timelineEvent, index) => {
                  const ref = `timeline_${index}`;

                  return (
                    <Row className={local.event} key={ref}>
                      <Col xs={5}>
                        <h5 style={{ margin: '0px', textAlign: 'right' }}>
                          {timelineEvent.time.start}
                        </h5>
                      </Col>
                      <Col xs={2} style={{ padding: '0 5px' }}>
                        <h5 style={{ margin: '0px', overflow: 'hidden' }}>
                          &middot;&middot;&middot;&middot;&middot;&middot;&middot;
                        </h5>
                      </Col>
                      <Col xs={5}>
                        <h5 style={{ margin: '0px', textAlign: 'left' }}>
                          {timelineEvent.eventName}
                        </h5>
                      </Col>
                    </Row>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col xs={10} xsOffset={1} sm={5} smOffset={0} md={4} className={glob.verticalCol}>
            <div className={local.venueMap}>
              <Map type="venue" />
            </div>
          </Col>
        </Row>
      </div>

      <div className={`${glob.section} ${glob.sectionBlue}`} style={{ marginTop: '0px' }}>
        <h2>Attire</h2>
        <Row>
          <Col xs={12} sm={4} smOffset={4}>
            <h3>{wedding.attire.dressCode}</h3>
            <p style={{ margin: '0px' }}>{wedding.attire.message}</p>
          </Col>
        </Row>
      </div>

      <div className={`${glob.section}`}>
        <h2>Reception</h2>
        <Row>
          <Col xs={12} sm={6}>
            <h3>{wedding.reception.meal.what}</h3>
            <h4>{wedding.reception.meal.details}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <h3>{wedding.reception.bar.what}</h3>
            <h4>{wedding.reception.bar.details}</h4>
          </Col>
        </Row>
      </div>
    </div>
  );
};
