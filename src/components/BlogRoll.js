import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
// import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className='row d-flex'>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className='col-md-4 d-flex '>
              <div className='blog-entry justify-content-end'>
                <Link
                  to={post.fields.slug}
                  className='block-20'
                  style={{
                    backgroundImage: `url(${
                      !!post.frontmatter.featuredimage.childImageSharp
                        ? post.frontmatter.featuredimage.childImageSharp.fluid
                            .src
                        : null
                    })`,
                  }}
                />
                <div className='text p-4 float-right d-block'>
                  <div className='d-flex align-items-center pt-2 mb-4'>
                    <div className='one'>
                      <span className='day'>
                        {post.frontmatter.date.split(' ')[0]}
                      </span>
                    </div>
                    <div className='two'>
                      <span className='mos'>
                        {post.frontmatter.date.split(' ')[1]}
                      </span>
                      <span className='yr'>
                        {post.frontmatter.date.split(' ')[2]}
                      </span>
                    </div>
                  </div>
                  <h3 className='heading mt-2'>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          limit: 3
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 150)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "DD MMMM YYYY", locale: "ru")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
