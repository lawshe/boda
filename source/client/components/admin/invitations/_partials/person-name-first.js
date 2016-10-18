import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

/**
  *
  * For within add invitation form, text input for guest first name
  *
  * @param {Object} guest name - contains guest first name
  *
  * @return {ReactComponent}
  */

class AddPersonNameFirst extends React.Component {
  render() {
    return (
      <FormGroup key={this.props.index}>
        <Row>
          <Col componentClass={ControlLabel} sm={2}>
            First Name
          </Col>
          <Col sm={6}>
            <input
              type="text"
              placeholder="First Name"
              value={this.props.name.first}
              onChange={this.handleChange.bind(this)}
            />
          </Col>
        </Row>
      </FormGroup>
    );
  }

  handleChange(event) {
    const nameFirst = event.target.value;
    this.props.onChange(nameFirst, this.props.index);
  }
}

export default AddPersonNameFirst;
