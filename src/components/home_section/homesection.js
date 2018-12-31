import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Container, Row, Col } from 'reactstrap'
import './homesection.scss'

const HomeSection = ({ index, image, header, desc }) => {
  let imageClass
  let descClass
  if (index % 2 === 0) {
    imageClass = 'section-image order-1 align-items-center'
    descClass = 'section-desc order-2'
  } else {
    imageClass = 'section-image order-1 order-lg-2 align-items-center'
    descClass = 'section-desc order-2 order-lg-1'
  }
  return (
    <Container className="section">
      <Row className="section-wrapper">
        <Col xs="12" lg="6" className={imageClass}>
          <Img fluid={image} />
        </Col>
        <Col xs="12" lg="6" className={descClass}>
          <h2>{header}</h2>
          <p>{desc}</p>
        </Col>
      </Row>
    </Container>
  )
}

HomeSection.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  index: PropTypes.number,
}

export default HomeSection
