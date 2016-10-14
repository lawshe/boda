import React from 'react';
import glob from 'styles/app';
import { Col } from 'react-bootstrap';
import wedding from '../../../../../config/wedding';

/**
  *
  * If invitation not found
  *
  * @param none
  *
  * @return {ReactComponent}
  */

const supportEmail = <a href={`mailto:${wedding.email}?Subject=RSVP Not found`}>{wedding.email}</a>;

const notFound = () => (
  <Col xs={10} xsOffset={1}>
    <div className={`${glob.card} ${glob.cardImage} ${glob.fourOhFour}`}>
      <div className={`${glob.cardContent}`}>
        <h2 style={{ marginTop: '0px' }}>Invitation not found</h2>
        <h3 style={{ marginBottom: '0px' }}>
          Please email
          <br />
          {supportEmail}
          <br />
          for support
        </h3>
      </div>
    </div>
  </Col>
);

export default notFound;
