import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Icon from 'react-icons-kit'
import { shoppingCart, thMenu } from 'react-icons-kit/typicons'

/* eslint-disable */
const Header = ({ siteTitle }) => (
  <Container className="header" fluid>
    <Row className="header-wrapper">
      <Col xs="2" md="3" className="header-nav-items d-none d-md-flex">
        <Link to="/">HOME</Link>
        <Link to="/products">PRODUCTS</Link>
      </Col>
      <Col xs="2" className="header-toggle d-md-none">
        <Icon className="header-toggle-icon" size={26} icon={thMenu} />
      </Col>
      <Col xs="8" md="6" className="header-title">
        <Link to="/">{siteTitle}</Link>
      </Col>
      <Col xs="2" md="3" className="header-cart">
        <a href="#" className="snipcart-checkout">
          <Icon size={30} icon={shoppingCart} />
        </a>
        <div className="snipcart-summary d-none d-md-flex">
          <span className="snipcart-total-price" />
        </div>
      </Col>
    </Row>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
