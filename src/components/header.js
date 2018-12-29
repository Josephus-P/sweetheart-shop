import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Icon from 'react-icons-kit'
import { shoppingCart, thMenu } from 'react-icons-kit/typicons'
import 'typeface-charm'

/* eslint-disable */
const Header = ({ siteTitle }) => (
  <Container className="header" fluid>
    <Row className="header-wrapper">
      <Col xs="3" className="header-nav-items d-none d-md-flex">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </Col>
      <Col xs="3" className="header-toggle d-md-none">
        <Icon size={26} icon={thMenu} />
      </Col>
      <Col xs="6" className="header-title">
        <Link to="/">{siteTitle}</Link>
      </Col>
      <Col xs="3" className="header-cart">
        <a href="#" className="snipcart-checkout">
          <Icon size={30} icon={shoppingCart} />
        </a>
        <div className="snipcart-summary d-none d-md-flex">
          Items: <span className="snipcart-total-items" />
          Total: <span className="snipcart-total-price" />
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
