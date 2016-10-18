import React from 'react';
import { subscribe } from 'horizon-react';
import { Grid, Row, Col, Well } from 'react-bootstrap';

import Menu from './menu';

import {
  authorizeAdmin
} from '../../../actions/actionCreators';

/**
  *
  * Layout for admin page
  *
  * @param  {Object} children - routes
  *
  * @return {ReactComponent}
  */


const mapStateToProps = (state) => {
  return {
    authorized: state.admin.authorized,
    secret: state.admin.secret
  };
};


class Layout extends React.Component {
  render() {
    const view = this._authorized(this.props);
    return (
      <div>
        <h3 style={{ marginTop: '30px' }}>Admin</h3>
        {view}
      </div>
    );
  }

  // View
  _authorized(props) {
    const notAuthorized = (
      <Row>
        <Col sm={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
          <Well>
            <input
              type="text"
              placeholder="Password"
              value={props.secret}
              onChange={this._onChange.bind(this)}
              style={{ width: '100%' }}
              required
            />
          </Well>
        </Col>
      </Row>
    );

    const authorized = (
      <div>
        <Menu />
        <Grid>
          {props.children}
        </Grid>
      </div>
    );
    return props.authorized ? authorized : notAuthorized;
  }

  // Authorize
  _onChange(event) {
    this.props.dispatch(authorizeAdmin(event.target.value));
  }
}

export default subscribe({
  mapStateToProps
})(Layout);
