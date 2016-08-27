import React from 'react';

import wedding from '../../../../../config/wedding.js';
import glob from 'styles/app';
import local from './_styles';
import { Row, Col } from 'react-bootstrap';
import PageHeader from '../../_partials/page-header';
import prettyAddress from '../../_partials/pretty-address';
import Map from '../../_partials/map/map';

/**
  *
  * The City Guide page
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

const barsList = (
  <ul className={`${local.placeList}`}>
    {wedding.guide.bars.list.map(
      (bar, i) => (
        <li key={i}>
          <h4>{bar.name}</h4>
          <h5>{bar.address.street}</h5>
        </li>
      )
    )}
  </ul>
);

const musicList = (
  <ul className={`${local.placeList}`}>
    {wedding.guide.music.list.map(
      (venue, i) => (
        <li key={i}>
          <h4>{venue.name}</h4>
          <h5>{venue.address.street}</h5>
        </li>
      )
    )}
  </ul>
);

const foodList = (
  <ul className={`${local.placeList}`}>
    {wedding.guide.food.list.map(
      (place, i) => (
        <li key={i}>
          <h4>{place.name}</h4>
          <h5>{place.address.street}</h5>
        </li>
      )
    )}
  </ul>
);

const funList = (
  <ul className={`${local.placeList}`}>
    {wedding.guide.fun.list.map(
      (place, i) => (
        <li key={i}>
          <h4>{place.name}</h4>
          <h5>{place.address.street}</h5>
        </li>
      )
    )}
  </ul>
);

export default () => {
  const accommodationsAddress = prettyAddress(wedding.accommodations.address);
  return (
    <div className={glob.pageDetails}>
      <PageHeader page="City Guide" />
      <h2>Accommodations</h2>
      <h3>{wedding.accommodations.name}</h3>
      <h4>{accommodationsAddress}</h4>

      <h2>Things to Do</h2>
      <Row>
        <Col xs={10} xsOffset={1} sm={8} smOffset={2}>
          <Map type="guide" />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h3>Listen to Music</h3>
          {musicList}
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h3>Listen to Music</h3>
          {musicList}
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h3>Grab a Drink</h3>
          {barsList}
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h3>Grab a Bite</h3>
          {foodList}
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h3>Fun Things</h3>
          {funList}
        </Col>
      </Row>
    </div>
  );
};
