import React from 'react';
import glob from 'styles/app';
import Col from 'react-bootstrap/lib/Col';
import wedding from '../../../../../config/wedding';

/**
  *
  * If invitation not found
  *
  * @param none
  *
  * @return {ReactComponent}
  */


const supportEmail = (
  <a href={`mailto:${wedding.email}?Subject=RSVP not found`} className={glob.email}>
    {wedding.email}
  </a>
);

const notFound = () => (
  <Col xs={12}>
    <div className={`${glob.card} ${glob.fourOhFour}`}>
      <h2 style={{ marginTop: '0px' }}>Invitation not found</h2>
      <h5 style={{ marginBottom: '0px' }}>
        Please email
        <br />
        {supportEmail}
        <br />
        for support
      </h5>
    </div>
  </Col>
);

export default notFound;
