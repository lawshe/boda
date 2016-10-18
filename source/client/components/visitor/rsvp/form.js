import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import wedding from '../../../../../config/wedding.js';
import glob from 'styles/app';
import local from './_styles';
import PerGuestRsvp from './form-pieces/per-guest-rsvp';
import PlusGuests from './form-pieces/plus-guests';
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
    <Col xs={10} xsOffset={1} style={{ textAlign: 'center' }}>
      <h3 style={{ marginTop: '0px' }}>Please submit by<br /><PrettyDate date={wedding.rsvp.date} /></h3>
      <div className={`${glob.card} ${local.rsvpForm}`}>
        <form onSubmit={props._sendRsvp} style={{ margin: '0px auto' }}>
          <PerGuestRsvp rsvp={rsvp} _changeRsvp={props._changeRsvp} />
          {plusJsx}
          <Row>
            <Col sm={12} className={`${glob.submitCol}`}>
              {submitBtnJsx}
            </Col>
          </Row>
        </form>
      </div>
    </Col>
  );

  // Display form, or that we've recieved RSVP
  const form = <RsvpFormForm />;

  return (
    <div>{form}</div>
  );
};
