import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

/**
  *
  * For within add invitation form, text input for guest last name
  *
  * @param {Object} guest name - contains guest last name
  *
  * @return {ReactComponent}
  */

class AddPersonNameLast extends React.Component {
  render() {
    return (
      <FormGroup key={this.props.index}>
        <Row>
          <Col componentClass={ControlLabel} sm={2}>
            Last Name
          </Col>
          <Col sm={6}>
            <input
              type="text"
              placeholder="Last Name"
              value={this.props.name.last}
              onChange={this.handleChange.bind(this)}
            />
          </Col>
        </Row>
      </FormGroup>
    );
  }

  handleChange(event) {
    const nameLast = event.target.value;
    this.props.onChange(nameLast, this.props.index);
  }
}

export default AddPersonNameLast;
