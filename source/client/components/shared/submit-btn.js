import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import glob from 'styles/app';

/**
  *
  * RSVP form submit button
  *
  * @param {String} displayText - text to display in button
  *
  * @return {ReactComponent}
  */


const SubmitBtn = (props) =>
  <Button type="submit" className={`${glob.button}`} bsSize="large">
    {props.displayText}
  </Button>;

export default SubmitBtn;
