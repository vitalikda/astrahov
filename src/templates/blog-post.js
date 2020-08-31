import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import BlogRoll from '../components/BlogRoll';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  featuredimage,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      {helmet || ''}
      {/* Hero section */}
      <section
        className='hero-wrap'
        style={{
          backgroundImage: `url(${
            !!featuredimage.childImageSharp
              ? featuredimage.childImageSharp.fluid.src
              : featuredimage
          })`,
        }}
      >
        <div className='overlay'></div>
        <div className='container'>
          <div className='row no-gutters justify-content-center mb-5 pb-3'>
            <div className='heading-section text-center'>
              <h2 className='mb-3'>{title}</h2>
            </div>
          </div>
        </div>
      </section>
      {/* Page content */}
      <section className='ftco-section'>
        <div className='container'>
          <div className='row no-gutters'>
            <PostContent className='content' content={content} />
            <div className='tag-widget post-tag-container mb-5 mt-5'>
              {tags && tags.length ? (
                <div className='tagcloud'>
                  {tags.map((tag) => (
                    <span key={tag + `tag`}>
                      <Link
                        to={`/tags/${kebabCase(tag)}/`}
                        className='tag-cloud-link'
                      >
                        {tag}
                      </Link>
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      {/* Latest posts section */}
      <section className='ftco-section bg-light'>
        <div className='container'>
          <div className='row justify-content-center mb-5 pb-3'>
            <div className='col-md-7 heading-section  text-center'>
              <h2 className='mb-1'>Последние статьи</h2>
            </div>
          </div>
          <BlogRoll />
        </div>
      </section>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | Статьи'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        date(formatString: "DD MMMM YYYY", locale: "ru")
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
  }
`;
