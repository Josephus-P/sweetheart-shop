/* eslint-disable */
import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout';

const ProductPage = ({
  data: {
    allDatoCmsProduct: { edges },
  },
}) => {
  return (
    <Layout>
      <Container>
        <Row>
          {edges.map((product, index) => (
            <Col className="product" key={index} xs="6" md="4">
              <Img fluid={product.node.images[0].fluid} />
              <p>{product.node.title}</p>
              <span>{product.node.price}</span>
              <button
                className="snipcart-add-item"
                data-item-id={product.node.productId}
                data-item-name={product.node.title}
                data-item-price={product.node.price}
                data-item-url={`https://sweetheartshop.netlify.com/products/${
                  product.node.pageUrl
                }`}
                data-item-description={product.node.description}
              >
                Add to Cart
              </button>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductQuery($productId: Int!) {
    allDatoCmsProduct(filter: { productId: { eq: $productId } }) {
      edges {
        node {
          productId
          pageUrl
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
