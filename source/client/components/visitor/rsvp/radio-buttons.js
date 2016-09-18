import React from 'react';
import { FormGroup, Radio } from 'react-bootstrap';

import local from './_styles';
import radio from 'styles/radio.css';

class RsvpRadioButtons extends React.Component {

  render() {
    const { guest } = this.props;
    const radioName = `rsvp-${guest.name.first}`;
    const yesId = `yes-${guest.name.first}`;
    const noId = `no-${guest.name.first}`;
    const checkedYes = guest.rsvp ? 'checked' : '';
    const checkedNo = guest.rsvp ? '' : 'checked';

    return (
      <ul className={`${radio.ul}`} >
        <li className={`${radio.li}`}>
          <input className={`${radio.input}`} type="radio" id={yesId} value="yes" name={radioName} onChange={this.handleChange.bind(this)} checked={checkedYes} />
          <label className={`${local.label} ${radio.label}`} htmlFor={yesId}>
            accepts with pleasure
          </label>
          <div className={`${radio.check}`}><div className="inside"></div></div>
        </li>
        <li className={`${radio.li}`}>
          <input className={`${radio.input}`} type="radio" id={noId} value="no" name={radioName} onChange={this.handleChange.bind(this)} checked={checkedNo} />
          <label className={`${local.label} ${radio.label}`} htmlFor={noId}>
            declines with regrets
          </label>
          <div className={`${radio.check}`}><div className="inside"></div></div>
        </li>
      </ul>
    );
  }

  handleChange(event) {
    // console.log('handleChange. this.props = ',this.props);
    const rsvpValue = event.target.value === 'yes'
        ? true
        : false;
      // console.log('rsvpValue =',rsvpValue);
    this.props._changeRsvp(rsvpValue, this.props.index);
  }
}

export default RsvpRadioButtons;
