import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import Img from 'gatsby-image'
import Icon from 'react-icons-kit'
import { socialInstagram, socialFacebook } from 'react-icons-kit/ionicons'

/* eslint-disable */
const Footer = ({ year }) => (
  <StaticQuery
    query={graphql`
      query logo {
        logo: datoCmsLogo {
          image {
            fixed(width: 200, imgixParams: { auto: "compress" }) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Container className="footer" fluid>
          <Row className="footer-wrapper">
            <Col className="footer-divider" xs="12">
              <div className="left-divider" />
              <Img fixed={data.logo.image.fixed} />
              <div className="right-divider" />
            </Col>
            <Col className="py-5" xs="12">
              <a
                href="https://www.facebook.com/sweetheartsoap/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5"
              >
                <Icon size={30} icon={socialFacebook} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="px-5"
              >
                <Icon size={30} icon={socialInstagram} />
              </a>
            </Col>
            <Col className="py-5" xs="12">
              <p>
                &copy; {year}, Sweetheart Beauty and Soap | Built by{' '}
                <a
                  href="https://www.linkedin.com/in/josueperalta"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#D12495' }}
                >
                  J. Peralta
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

Footer.propTypes = {
  year: PropTypes.number,
}

export default Footer
