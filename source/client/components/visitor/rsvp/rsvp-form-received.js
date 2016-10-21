import React from 'react';
import glob from 'styles/app';
import Col from 'react-bootstrap/lib/Col';
import wedding from '../../../../../config/wedding';

/**
  *
  * If invitation received
  *
  * @param none
  *
  * @return {ReactComponent}
  */

const supportEmail = (
  <a href={`mailto:${wedding.email}`} className={glob.email}>
    {wedding.email}
  </a>
);

export default (props) => {
  const attendingJsx = props.rsvpProcessed.attendingNamesStr
    ? <h5>{props.rsvpProcessed.attendingNamesStr}</h5>
    : '';

  const plusJsx = props.rsvpProcessed.plusMessage
    ? <h5 style={{ margin: '15px 0 0 0' }}>{props.rsvpProcessed.plusMessage}</h5>
    : '';

  return (
    <Col xs={10} xsOffset={1} style={{ textAlign: 'center' }}>
      <div className={`${glob.card} ${glob.cardImage}`}>
        <div className={`${glob.cardContent}`}>
          <h2 style={{ marginTop: '0px' }}>Received</h2>
          <h3 style={{ marginBottom: '0px' }}>{props.rsvpProcessed.rsvpReceivedMessage}</h3>
          {attendingJsx}
          {plusJsx}
        </div>
      </div>
      <p style={{ margin: '45px 0 15px 0' }}>
        Please email {supportEmail}<br />if you have any questions.
      </p>
    </Col>
  );
};
