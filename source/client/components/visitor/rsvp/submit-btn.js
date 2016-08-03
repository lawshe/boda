import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import glob from 'styles/app';

/**
  *
  * RSVP form submit button
  *
  * @param none
  *
  * @return {ReactComponent}
  */


const SubmitBtn = () =>
  <Button type="submit" className={`${glob.button}`} bsSize="large">
    Send RSVP
  </Button>;

const mapStateToProps = ({ rsvp }) => ({ rsvp });

export default connect(mapStateToProps)(SubmitBtn);
