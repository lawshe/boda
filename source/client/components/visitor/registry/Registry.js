import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import wedding from '../../../../../config/wedding.js';
import PageHeader from '../../_partials/page-header';
import glob from '../../../styles/app';
import local from './_styles';
import fxns from '../../../../utils/fxns';
import Scroll from 'react-scroll';

/**
  *
  * The registry page
  *
  * @param  none
  *
  * @return {ReactComponent}
  */

const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

const registryLinks = wedding.registry.where.map(
  (reg, index) => (
    <h4 style={{ marginBottom: '0px' }} key={`registry_${index}`}>
      <a href={reg.link} target="_BLANK">{reg.name}</a>
    </h4>
  )
);

class Registry extends React.Component {
  constructor() {
    super();
    this.state = {
      honeymoonLinksShow: false
    };
  }

  componentDidMount () {
    scrollSpy.update();
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    const showLinks = this.state.honeymoonLinksShow ? '' : glob.hidden;

    const toggleHoneymoonLinks = this.state.honeymoonLinksShow ? (
      <a href="" onClick={this.handleClick.bind(this)}>
        Click to Hide <i className="material-icons">expand_less</i>
      </a>
    ) : (
      <a href="" onClick={this.handleClick.bind(this)}>
        Click to Contribute <i className="material-icons">expand_more</i>
      </a>
    );

    return (
      <div>
        <PageHeader page="Registry" />
        <div className={`${glob.section}`}>
          <Row>
            <Col xs={10} xsOffset={1} sm={8} smOffset={2}>
              <h2 style={{ margin: '0px' }}>Your presence is all that we ask for!</h2>
              <p style={{ margin: '15px 0 0 0' }}>{wedding.registry.messageToGuests}</p>
            </Col>
          </Row>
        </div>

        <div className={`${glob.section} ${glob.sectionBlue}`} id="honeymoon">
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
              <p style={{ marginBottom: '0px' }}>{toggleHoneymoonLinks}</p>
            </Col>
          </Row>
        </div>

        <div className={`${glob.section} ${glob.sectionWhite} ${showLinks}`}>
          <Row>
            <Col xs={12}>
              <h5 style={{ marginBottom: '30px' }} id="honeymoon-links">
                If you’d like to help make our honeymoon wonderful,
                <br />there are some activities which you can contribute to
                <br />via the PayPal links below
              </h5>
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
                        <input type="image" src="https://s3-us-west-1.amazonaws.com/laholland/button-paypal.png" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                        <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                      </form>
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
        </div>

        <div className={`${glob.section}`}>
          <h3>We also have<br />a registry at:</h3>
          {registryLinks}
        </div>
      </div>
    );
  }

  handleClick(event) {
    event.preventDefault();

    if (!this.state.honeymoonLinksShow) {
      const element = document.getElementById('honeymoon');
      scroll.scrollTo(fxns.elementBottom(element));
    }

    this.setState({ honeymoonLinksShow : !this.state.honeymoonLinksShow });
  }
}

export default Registry;
