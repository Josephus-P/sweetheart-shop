import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Icon from 'react-icons-kit';
import { bag, naviconRound, closeRound } from 'react-icons-kit/ionicons';

/* eslint-disable */
class Header extends Component {
  constructor(props) {
    super(props);
    this.navScroll = this.navScroll.bind(this);
    this.state = {
      mobileToggle: false,
      navBgToggle: false,
    };
  }

  mobileToggleHandler = () => {
    this.setState({ mobileToggle: !this.state.mobileToggle });
  };

  componentDidMount() {
    if (typeof window !== undefined) {
      document.addEventListener('scroll', this.navScroll);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.navScroll);
  }

  navScroll = () => {
    if (window.scrollY > 0 && !this.state.navBgToggle) {
      this.setState({ navBgToggle: true });
    } else if (window.scrollY === 0) {
      this.setState({ navBgToggle: false });
    }
  };

  render() {
    const navScrollColor = 'header-scroll-font-color';
    const scrollToggle = this.state.navBgToggle;

    return (
      <Container
        className="header"
        style={scrollToggle ? { backgroundColor: 'white' } : {}}
        fluid
      >
        <Row className="header-wrapper">
          <Col xs="2" md="3" className="header-nav-items d-none d-md-flex">
            <Link className={scrollToggle ? navScrollColor : ''} to="/">
              HOME
            </Link>
            <Link className={scrollToggle ? navScrollColor : ''} to="/products">
              PRODUCTS
            </Link>
          </Col>
          <Col
            xs="2"
            className="header-toggle d-md-none"
            onClick={this.mobileToggleHandler}
          >
            <Icon
              className="header-toggle-icon"
              size={26}
              icon={this.state.mobileToggle ? closeRound : naviconRound}
            />
          </Col>
          <Col xs="8" md="6" className="header-title">
            <Link className={scrollToggle ? navScrollColor : ''} to="/">
              {this.props.siteTitle}
            </Link>
          </Col>
          <Col xs="2" md="3" className="header-cart">
            <a href="#" className="snipcart-checkout">
              <Icon
                className={scrollToggle ? navScrollColor : ''}
                size={26}
                icon={bag}
              />
            </a>
            <div className="snipcart-summary d-none d-md-flex">
              <span
                className="snipcart-total-price"
                style={scrollToggle ? { color: '#fbafd5' } : {}}
              />
            </div>
          </Col>
        </Row>
        <Row
          className={
            this.state.mobileToggle ? 'header-mobile d-md-none' : 'd-none'
          }
        >
          <Col className="header-mobile-wrapper d-flex" xs="12">
            <Link to="/">HOME</Link>
            <Link to="/products">PRODUCTS</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
