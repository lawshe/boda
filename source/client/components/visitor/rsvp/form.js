import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

import glob from 'styles/app';
import type from 'styles/type';
import local from './_styles';

import PerGuestRsvp from './per-guest-rsvp';
import PlusGuests from './plus-guests';
import SubmitBtn from './submit-btn';

import PersonName from '../../_partials/person-name';


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
  let plus;

  // count of invited attending
  if (rsvp.guests) {
    rsvp.guests.forEach(function (guest) {
      if (guest.rsvp) {
        attending++;
      }
    });
  }

  // names of attending
  const attendingNames = rsvp.guests.map(
    guest => (
      <div className={`${local.attending}`}><PersonName guest={guest} /></div>
    )
  );

  // Update total attending for invitation with plus count
  if (rsvp.plus.bringing > 0) {
    attending += rsvp.plus.bringing;
  }

  // for message to display how many plus
  if (rsvp.plus.bringing > 1) {
    plus = (<h4>+ {rsvp.plus.bringing} guests</h4>);
  } else if (rsvp.plus.bringing === 1) {
    plus = (<h4>+ {rsvp.plus.bringing} guest</h4>);
  }

  // message for if anyone attending or not
  let message = 'We look forward to seeing yall!';
  if (attending === 0) {
    message = 'We will miss yall!';
  } else if (attending === 1) {
    message = 'We look forward to seeing you!';
  }

  const RsvpFormReceived = () => (
    <div className={`${glob.tCenter}`}>
      <h2>RSVP Received</h2>
      <h3>{message}</h3>
      <h4>{attendingNames}</h4>
      {plus}
    </div>
  );
  // END - if form received

  const RsvpFormForm = () => (
    <div className={`${local.rsvpPanel}`}>
      <h2 className={`${local.panelHeader} ${type.gothic}`}>RSVP</h2>
      <Form onSubmit={props.sendRsvp}>
        <PerGuestRsvp rsvp={rsvp} changeRsvp={props.changeRsvp} />
        <PlusGuests rsvp={rsvp} changePlus={props.changePlus} />
        <Row>
          <Col sm={12} className={`${glob.tCenter}`}>
            <SubmitBtn />
          </Col>
        </Row>
      </Form>
    </div>
  );

  // Display form, or that we've recieved RSVP
  const form = rsvp.returned
    ? <RsvpFormReceived />
    : <RsvpFormForm />;

  return (
    <div>{form}</div>
  );
};
