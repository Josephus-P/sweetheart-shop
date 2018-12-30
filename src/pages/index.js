import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from 'reactstrap'
import Img from 'gatsby-image'
import './scss/home.scss'

const IndexPage = ({ data: { home } }) => {
  console.log(home.jumbotronImage.fluid)
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="jumbotron">
        <Img fluid={home.jumbotronImage.fluid} />
        <Container className="jumbotron-container">
          <h1>{home.jumbotronText}</h1>
          <Link className="home-shop-btn" to="/products">
            SHOP OUR PRODUCTS
          </Link>
        </Container>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    home: datoCmsHomePage {
      jumbotronText
      jumbotronImage {
        fluid(maxHeight: 400, imgixParams: { auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
