import React from 'react';
import { Row, Col } from 'react-bootstrap';

import wedding from '../../../../../config/wedding.js';

import glob from 'styles/app';
import local from './_styles';
import Map from '../../_partials/map/map';

import PageHeader from '../../_partials/page-header';
import WeddingDate from '../../_partials/pretty-wedding-date';
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

      <Row>
        <Col xs={12}>
          <div className={`${local.eucSet}`}>
            <div className={`${local.eucDate} ${local.eucBorderLeft}`}>
              <EucFour color="$blackLight" />
            </div>
            <div className={`${local.eucDate} ${local.eucBorderRight}`}>
              <EucFour color="$blackLight" />
            </div>
          </div>
          <h2 className={`${local.date}`}>
            <WeddingDate />
          </h2>
          <div className={`${local.eucSet} ${local.eucSetBtm}`}>
            <div className={`${local.eucDate} ${local.eucBorderLeft}`}>
              <EucFour color="$blackLight" />
            </div>
            <div className={`${local.eucDate} ${local.eucBorderRight}`}>
              <EucFour color="$blackLight" />
            </div>
          </div>
        </Col>
      </Row>

      <div className={local.timeline}>
        {wedding.timeline.map((timelineEvent, index) => {
          const ref = `timeline_${index}`;

          return (
            <Row key={ref}>
              <Col xs={5} style={{ textAlign: 'right' }}>
                {timelineEvent.time.start}
              </Col>
              <Col xs={2} style={{ overflow: 'hidden' }}>
                ................................................
              </Col>
              <Col xs={5} style={{ textAlign: 'left' }}>
                {timelineEvent.eventName}
              </Col>
            </Row>
          );
        })}
      </div>

      <Row style={{ marginBottom: '30px' }}>
        <Col xs={6} md={4}>
          <h4 className="text-right">Ceremony & Reception to Follow at:</h4>
          <h2 className="text-right">{wedding.venue.name}</h2>
          <h3 className="text-right"><VenueAddress /></h3>
        </Col>
        <Col xs={6} md={4}>
          <Map type="venue" />
        </Col>
      </Row>
    </div>
  );
};
