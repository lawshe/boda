import React from 'react';
import { Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

/**
  *
  * For within RSVP form, plus guests
  *
  * @param {Object} rsvp
  *
  * @return {ReactComponent}
  */

export default (props) => {
  let plusSelect;
  let allowed = 0;
  const plusGuestOptions = [
      { value: 0, label: 'Select Plus' },
      { value: 1, label: 'Plus One' },
      { value: 2, label: 'Plus Two' },
      { value: 3, label: 'Plus Three' },
      { value: 4, label: 'Plus Four' },
      { value: 5, label: 'Plus Five' }
  ];

  if (props.rsvp.plus.allowed !== 0) {
    allowed = props.rsvp.plus.allowed;
  }

  const plusOptions = plusGuestOptions.map(function(option, i){
    if (option.value <= allowed) {
      return <option value={option.value} key={i}>{option.label}</option>;
    }
  });

  if (allowed !== 0) {
    plusSelect = (
      <FormGroup>
        <ControlLabel>+ guests?</ControlLabel>
        <FormControl componentClass="select" placeholder="select" onChange={props.changePlus} value={props.rsvp.plus.bringing}>
          {plusOptions}
        </FormControl>
      </FormGroup>);
  }

  return (
    <Row><Col xs={12}>{plusSelect}</Col></Row>
  );
};
