import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import wedding from '../../../../../config/wedding.js';
import PageHeader from '../../_partials/page-header';
import glob from '../../../styles/app';

/**
  *
  * The registry page
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

const registryLinks = wedding.registry.where.map(
  reg => (<h4><a href={reg.link} target="_BLANK">{reg.name}</a></h4>)
);

export default () => (
  <div>
    <PageHeader page="Registry" />
    <div className={`${glob.section}`}>
      <Row>
        <Col xs={12}>
          <h2>Your presence is all that we ask for!</h2>
          <p>{wedding.registry.messageToGuests}</p>
        </Col>
      </Row>
    </div>

    <div className={`${glob.section} ${glob.sectionWhiteMed}`}>
      <h3>
        <i className="material-icons">airplanemode_active</i>
        <br />
        We're going
        <br />
        to {wedding.honeymoon.city}!
      </h3>
      <p style={{ marginBottom: '0px' }}>{wedding.honeymoon.message}</p>
    </div>

    <div className={`${glob.section} ${glob.sectionWhite}`}>
      <Row>
        <Col xs={10} xsOffset={1} sm={8} smOffset={2}>
          <Row>
            <Col xs={12} sm={7} className={glob.verticalCol}>
              <h5 style={{ textAlign: 'right' }}>
                What we’d like to do:
              </h5>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
          {wedding.registry.honeymoon.map((item, index) => {
            const rowClass = item.remaining > 0 ? '' : glob.opaqueRow;
            return (
              <Row className={`${glob.whiteTopBorder} ${rowClass}`}>
                <Col xs={12} sm={7} className={glob.verticalCol}>
                  <h5 style={{ margin: '0px', textAlign: 'right' }}>{item.title}</h5>
                  <p style={{ margin: '0px', textAlign: 'right' }}>{item.description}</p>
                </Col>
                <Col xs={12} sm={3} className={glob.verticalCol}>
                  <Button className={`${glob.buttonLarge}`} onClick="">${item.price}</Button>
                  <div className={glob.smallType} style={{ margin: '5px 0' }}>
                    {item.remaining} Remaining
                  </div>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </div>


    <div className={`${glob.section} ${glob.sectionWhiteMed}`}>
      <h3>Also, we have a registry at:</h3>
      {registryLinks}
    </div>
  </div>
);
