/**
 * @file Dynamic imports for gatsby-image
 * @author Alwyn Tan
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const Image = ({ alt, filename, style }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) {
        return null;
      }

      return (
        <Img alt={alt} fluid={image.node.childImageSharp.fluid} style={style} />
      );
    }}
  />
);

Image.propTypes = {
  alt: PropTypes.string,
  filename: PropTypes.string,
  style: PropTypes.object,
};

export default Image;
