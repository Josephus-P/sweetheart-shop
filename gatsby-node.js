/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const productPageTemplate = path.resolve(`src/templates/ProductPage.js`);

  return graphql(`
    {
      allDatoCmsProduct {
        edges {
          node {
            productId
            pageUrl
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create product pages.
    result.data.allDatoCmsProduct.edges.forEach(product => {
      createPage({
        path: `/products/${product.node.pageUrl}`,
        component: productPageTemplate,
        context: {
          productId: product.node.productId,
        },
      });
    });
  });
};
