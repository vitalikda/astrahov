import React from 'react';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className='ftco-section'>
      <Helmet title={`Tags | ${title}`} />
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 categories'>
            <h3 className='heading-section text-center'>Теги </h3>
            {group.map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} <span>({tag.totalCount})</span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
