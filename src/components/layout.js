import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import Footer from './footer';
import objectFitImages from 'object-fit-images';
import './layout.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'typeface-charm';
import 'typeface-overlock';

class Layout extends Component {
  componentDidMount() {
    objectFitImages();
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header siteTitle={data.site.siteMetadata.title} />
            {this.props.children}
            <Footer />
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
