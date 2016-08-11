import React from 'react';
import { Row, Col } from 'react-bootstrap';

import wedding from '../../../../../config/wedding.js';

import Map from './map';

import PageHeader from '../../_partials/page-header';
import PrettyDate from '../../_partials/pretty-date';
import prettyAddress from '../../_partials/pretty-address';

/**
  *
  * The details page
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

const numberOfDaysUntil = () => {
  const oneDay = 24 * 60 * 60 * 1000;
  const weddingDate = new Date(wedding.date);
  const today = new Date();
  return Math.round(Math.abs((today.getTime() - weddingDate.getTime()) / (oneDay)));
};

export default () => {
  const today = new Date();
  const bigDay = new Date(wedding.date);

  let countdown = '';

  if (today.toDateString() === bigDay.toDateString()) {
    countdown = 'TODAY IS THE DAY!';
  } else {
    countdown = `${numberOfDaysUntil()}  Days until the wedding!`;
  }

  const venueAddress = prettyAddress(wedding.venue.address);

  return (
    <div className="page-details">
      <PageHeader page="The Wedding" />

      <h2><PrettyDate /></h2>
      <p>{countdown}</p>

      {wedding.timeline.map((timelineEvent, index) => {
        const ref = `timeline_${index}`;

        return (
          <Row key={ref}>
            <Col xs={5} style={{ textAlign: 'right' }}>
              {timelineEvent.time.start}
            </Col>
            <Col xs={2} style={{ textAlign: 'center', overflow: 'hidden' }}>
              ................................................
            </Col>
            <Col xs={5}>
              {timelineEvent.eventName}
            </Col>
          </Row>
        );
      })}

      <h2>{wedding.venue.name}</h2>
      <h3>{venueAddress}</h3>
      <Row>
        <Col xs={8} xsOffset={2}><Map /></Col>
      </Row>
    </div>
  );
};
