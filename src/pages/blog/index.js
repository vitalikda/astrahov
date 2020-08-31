import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/Layout';

class BlogIndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        {/* Hero section */}
        <section
          className='hero-wrap'
          style={{
            backgroundImage: `url(${'/img/image_2.jpg'})`,
          }}
        >
          <div className='overlay'></div>
          <div className='container'>
            <div className='row no-gutters slider-text js-fullheight align-items-center justify-content-center'>
              <div className='col-md-9 text-center'>
                <h1 className='mb-3 bread'>Статьи</h1>
                <p className='breadcrumbs'>
                  <span className='mr-2'>
                    <Link to='/'>Главная</Link>
                  </span>{' '}
                  <span>Статьи</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Blog section */}
        <section className='ftco-section bg-light'>
          <div className='container'>
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
                              ? post.frontmatter.featuredimage.childImageSharp
                                  .fluid.src
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
                          <Link to={post.fields.slug}>
                            {post.frontmatter.title}
                          </Link>
                        </h3>
                        <p>{post.excerpt}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

BlogIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default BlogIndexPage;

export const blogPageQuery = graphql`
  query blogPageQuery {
    allMarkdownRemark(
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
`;
