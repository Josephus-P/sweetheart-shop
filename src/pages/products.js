/* eslint-disable */
import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './scss/products.scss';

const SecondPage = ({
  data,
  data: {
    allDatoCmsProduct: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Page two" />
      <div className="products-page" fluid>
        <div className="jumbotron">
          <Img fluid={data.productPage.jumbotronImage.fluid} />
          <Container className="jumbotron-container">
            <h1>Products</h1>
          </Container>
        </div>
        <Container>
          <Row>
            <Col className="categories" xs="12">
              <div className="category-container">
                <p style={{ display: 'inline-block' }}>Categories: </p>
                <span>All</span>
                <span>Bath Bombs</span>
                <span>Soap</span>
              </div>
            </Col>
            {edges.map((product, index) => (
              <Col className="product" key={index} xs="6" md="4">
                <Link to={product.node.title}>
                  <Img fluid={product.node.images[0].fluid} />
                </Link>
                <p>{product.node.title}</p>
                <span>{product.node.price}</span>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default SecondPage;

export const productPageQuery = graphql`
  query ProductPageQuery {
    productPage: datoCmsProductPage {
      jumbotronImage {
        fluid(maxHeight: 600) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    allDatoCmsProduct {
      edges {
        node {
          productId
          price
          description
          images {
            fluid(maxHeight: 700) {
              ...GatsbyDatoCmsFluid
            }
          }
          title
          category
        }
      }
    }
  }
`;
