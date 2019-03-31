/* eslint-disable */
import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './scss/products.scss';

const ProductsPage = ({
  data,
  data: {
    allDatoCmsProduct: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Page two" />
      <div className="products-page">
        <div className="jumbotron">
          <Img fluid={data.productPage.jumbotronImage.fluid} />
          <Container className="jumbotron-container">
            <h1>Products</h1>
          </Container>
        </div>
        <Container>
          <Row>
            {edges.map((product, index) => (
              <Col className="product" key={index} xs="6" md="4">
                <Link to={`/products/${product.node.pageUrl}`}>
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

export default ProductsPage;

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
          pageUrl
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
