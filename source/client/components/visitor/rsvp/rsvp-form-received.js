import React from 'react';
import glob from 'styles/app';

import wedding from '../../../../../config/wedding';

/**
  *
  * If invitation received
  *
  * @param none
  *
  * @return {ReactComponent}
  */

const supportEmail = <a href={`mailto:${wedding.email}?Subject=RSVP Not found`}>{wedding.email}</a>;

export default (props) => {
  const attendingJsx = props.rsvpProcessed.attendingNamesStr
    ? <h4 style={{ marginBottom: '0px' }}>{props.rsvpProcessed.attendingNamesStr}</h4>
    : '';

  const plusJsx = props.rsvpProcessed.plusMessage
    ? <h4 style={{ margin: '15px 0 0 0' }}>{props.rsvpProcessed.plusMessage}</h4>
    : '';

  return (
    <div>
      <div className={`${glob.card}`}>
        <h2>RSVP Received</h2>
        <h3 style={{ marginBottom: '0px' }}>{props.rsvpProcessed.rsvpReceivedMessage}</h3>
        {attendingJsx}
        {plusJsx}
      </div>
      <p style={{ margin: '45px 0 15px 0' }}>Email {supportEmail}<br />if you have any questions.</p>
    </div>
  );
};
