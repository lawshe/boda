import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

/**
  *
  * For within add invitation form, email input for guest email
  *
  * @param {Object} guest email - contains guest email
  *
  * @return {ReactComponent}
  */

class AddPersonEmail extends React.Component {
  render() {
    return (
      <FormGroup key={this.props.index}>
        <Row>
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={6}>
            <input
              type="email"
              placeholder="Email"
              value={this.props.email}
              onChange={this.handleChange.bind(this)}
            />
          </Col>
        </Row>
      </FormGroup>
    );
  }

  handleChange(event) {
    const email = event.target.value;
    this.props.onChange(email, this.props.index);
  }
}

export default AddPersonEmail;
