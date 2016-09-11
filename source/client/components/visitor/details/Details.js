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

      <Row style={{marginBottom: '30px'}}>
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

      <Row style={{ marginBottom: '30px' }}>
        <Col xs={12} sm={6} md={4} mdOffset={2} className={local.location}>
          <h4>Ceremony & Reception<br />to Follow at:</h4>
          <h2>{wedding.venue.name}</h2>
          <h3><VenueAddress /></h3>
        </Col>
        <Col xs={8} xsOffset={2} sm={6} smOffset={0} md={4}>
          <Map type="venue" />
        </Col>
      </Row>

      <div className={glob.section}>
        <h2>Timeline</h2>
        <Row>
          <Col xs={8} xsOffset={1} sm={6} smOffset={3} md={4} mdOffset={4}>
            <div className={`${glob.card} ${local.timeline}`}>
              {wedding.timeline.map((timelineEvent, index) => {
                const ref = `timeline_${index}`;

                return (
                  <Row className={local.event} key={ref}>
                    <Col xs={5}>
                      <p style={{ textAlign: 'right' }}>{timelineEvent.time.start}</p>
                    </Col>
                    <Col xs={2}>
                      <p style={{ overflow: 'hidden' }}>
                        &middot;&middot;&middot;&middot;&middot;&middot;&middot;
                      </p>
                    </Col>
                    <Col xs={5}>
                      <p style={{ textAlign: 'left' }}>{timelineEvent.eventName}</p>
                    </Col>
                  </Row>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
