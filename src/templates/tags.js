import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <span className='mr-3'>
            <IoIosArrowDroprightCircle />
          </span>
          {post.node.frontmatter.title}
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `# ${tag} - ${totalCount} `;

    return (
      <Layout>
        <section className='ftco-section'>
          <Helmet title={`${tag} | ${title}`} />
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='heading-section'>
                  <h2 class='mb-4'>{tagHeader}</h2>
                </div>
                <ul className='mb-5 do-list'>{postLinks}</ul>
                <p>
                  <Link className='btn btn-light p-3 px-4' to='/tags/'>
                    Открыть все теги
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className='section'>
          <Helmet title={`${tag} | ${title}`} />
          <div className='container content'>
            <div className='columns'>
              <div
                className='column is-10 is-offset-1'
                style={{ marginBottom: '6rem' }}
              >
                <h3 className='title is-size-4 is-bold-light'>{tagHeader}</h3>
                <ul className='taglist'>{postLinks}</ul>
                <p>
                  <Link to='/tags/'>Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
