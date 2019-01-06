import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container } from 'reactstrap';
import Img from 'gatsby-image';
import HomeSection from '../components/home_section/homesection';
import './scss/home.scss';

/* eslint-disable */
const IndexPage = ({ data: { home } }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="home-page">
        <div className="jumbotron">
          <Img fluid={home.jumbotronImage.fluid} />
          <Container className="jumbotron-container">
            <h1>{home.jumbotronText}</h1>
            <p>{home.jumbotronSubText}</p>
            <Link className="home-shop-btn" to="/products">
              SHOP OUR PRODUCTS
            </Link>
          </Container>
        </div>
        {home.content.map((block, index) => (
          <HomeSection
            key={index}
            index={index}
            header={block.title}
            desc={block.description}
            image={block.image.fluid}
          />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    home: datoCmsHomePage {
      jumbotronText
      jumbotronSubText
      jumbotronImage {
        fluid(maxHeight: 400) {
          ...GatsbyDatoCmsFluid
        }
      }
      content {
        ... on DatoCmsSection {
          title
          description
          image {
            fluid(imgixParams: { auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;
