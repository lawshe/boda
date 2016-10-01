import React from 'react';
import { Row, Col } from 'react-bootstrap';
import wedding from '../../../../../config/wedding.js';
import glob from 'styles/app';
import local from './_styles';
import PerGuestRsvp from './per-guest-rsvp';
import PlusGuests from './plus-guests';
import RsvpFormReceived from './rsvp-form-received';
import SubmitBtn from '../../shared/submit-btn';
import PrettyDate from '../../_partials/pretty-date';


/**
  *
  * The RSVP form
  *
  * @param {Object} rsvp
  *
  * @return {ReactComponent}
  */

export default (props) => {
  let { rsvp } = props;

  let attending = 0;

  // count of invited attending
  if (rsvp.guests) {
    rsvp.guests.forEach((guest) => {
      if (guest.rsvp) {
        attending++;
      }
    });
  }

  // Update total attending for invitation with plus count
  if (rsvp.plus.bringing > 0) {
    attending += rsvp.plus.bringing;
  }

  const submitBtnJsx = (
    <div>
      <SubmitBtn displayText="Submit RSVP" />
    </div>
  );

  const plusJsx = rsvp.plus.allowed > 0
      ? <PlusGuests rsvp={rsvp} _changePlus={props._changePlus} />
      : '';


  const RsvpFormForm = () => (
    <div>
      <h4>Please submit by<br /><PrettyDate date={wedding.rsvp.date} /></h4>
      <div className={`${glob.card} ${local.rsvpForm}`}>
        <form onSubmit={props._sendRsvp} style={{ margin: '20px auto' }}>
          <PerGuestRsvp rsvp={rsvp} _changeRsvp={props._changeRsvp} />
          {plusJsx}
          <Row>
            <Col sm={12} className={`${glob.tCenter}`}>
              {submitBtnJsx}
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );

  // Display form, or that we've recieved RSVP
  const form = rsvp.returned
    ? <RsvpFormReceived rsvpProcessed={rsvp.processed} />
    : <RsvpFormForm />;

  return (
    <div>{form}</div>
  );
};
