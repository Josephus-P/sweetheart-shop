import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './scss/products.scss';

const SecondPage = props => {
  console.log(props.location.pathname);
  return (
    <Layout>
      <SEO title="Page two" />
      <Container className="products-page" />
    </Layout>
  );
};

export default SecondPage;
