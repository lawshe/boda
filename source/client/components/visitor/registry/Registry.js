import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import wedding from '../../../../../config/wedding.js';
import PageHeader from '../../_partials/page-header';
import glob from '../../../styles/app';
import local from './_styles';

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
        <Col xs={10} xsOffset={1} sm={8} smOffset={2}>
          <h2 style={{ margin: '0px' }}>Your presence is all that we ask for!</h2>
          <p style={{ margin: '0px' }}>{wedding.registry.messageToGuests}</p>
        </Col>
      </Row>
    </div>
    <div className={`${glob.section} ${glob.sectionBlue}`}>
      <Row>
        <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={4} mdOffset={4}>
          <h3>
            <i className="material-icons">airplanemode_active</i>
            <br />
            We're going
            <br />
            to {wedding.honeymoon.city}!
          </h3>
          <p>{wedding.honeymoon.message}</p>
        </Col>
      </Row>
    </div>

    <div className={`${glob.section} ${glob.sectionWhiteMed}`}>
      <h3>Also, we have a registry at:</h3>
      {registryLinks}
    </div>

    <div className={`${glob.section} ${glob.sectionWhite}`}>
      <Row>
        <Col xs={12}>
          <h5>There are some things we'd like to do in Barcelona</h5>
          <p>We are collecting gifts via PayPal links below</p>
        </Col>
      </Row>
      <Row>
        <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
          {wedding.registry.honeymoon.map((item, index) => {
            const rowClass = item.remaining > 0 ? '' : glob.opaqueRow;
            return (
              <Row className={`${local.item} ${rowClass}`} key={`${index}_item`}>
                <Col xs={12} sm={6} className={glob.verticalCol}>
                  <h5 className={local.itemTitle}>{item.title}</h5>
                  <p className={local.itemDescription}>
                    {item.description}
                    <br />
                    ${item.price}
                    <br />
                    <span className={glob.smallType}>
                      <i>{item.remaining} Remaining</i>
                    </span>
                  </p>
                </Col>
                <Col xs={12} sm={3} className={`${glob.verticalCol} ${local.paypal} `}>
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="encrypted" value={item.payPal} />
                    <input type="image" src="https://s3-us-west-1.amazonaws.com/laholland/button-paypal.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                  </form>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </div>
  </div>
);
