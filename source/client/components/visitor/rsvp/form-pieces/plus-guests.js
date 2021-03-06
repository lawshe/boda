import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';

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
      { value: 0, label: '+ guests?' },
      { value: 1, label: 'Plus One' },
      { value: 2, label: 'Plus Two' },
      { value: 3, label: 'Plus Three' },
      { value: 4, label: 'Plus Four' },
      { value: 5, label: 'Plus Five' }
  ];

  if (props.rsvp.plus.allowed !== 0) {
    allowed = props.rsvp.plus.allowed;
  }

  const plusOptions = plusGuestOptions.map((option, i) => {
    if (option.value <= allowed) {
      return <option value={option.value} key={i}>{option.label}</option>;
    } else {
      return '';
    }
  });

  if (allowed !== 0) {
    plusSelect = (
      <FormControl componentClass="select" placeholder="select" onChange={props._changePlus} value={props.rsvp.plus.bringing}>
        {plusOptions}
      </FormControl>
    );
  }

  return (
    <Row style={{ margin: '30px 0' }}>
      <Col xs={10} xsOffset={0} sm={4} smOffset={4}>{plusSelect}</Col>
    </Row>
  );
};
