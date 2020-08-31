import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
// import Pricing from '../components/Pricing';
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import { IoLogoInstagram } from 'react-icons/io';

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  intro,
  // description,
}) => (
  <div>
    {/* Hero section */}
    <section
      className='hero-wrap'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div className='overlay'></div>
      <div className='container'>
        <div className='row no-gutters slider-text js-fullheight align-items-center justify-content-center'>
          <div className='col-md-9 text-center'>
            <h1 className='mb-3 bread'>{heading}</h1>
            <p className='breadcrumbs'>
              <span className='mr-2'>
                <Link to='/'>Главная</Link>
              </span>{' '}
              <span>{title}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Services section */}
    <section className='ftco-section'>
      <div className='container'>
        <div className='row justify-content-center mb-5 pb-3'>
          <div className='col-md-12 heading-section text-center'>
            <h3 className='subheading'>Услуги</h3>
            <h2 className='mb-1'>Выберите тип массажа</h2>
          </div>
        </div>
        <Features gridItems={intro.blurbs} />
      </div>
    </section>
    {/* Instagram section */}
    <section className='ftco-gallery ftco-section'>
      <div className='container'>
        <div className='row justify-content-center mb-5 pb-3'>
          <div className='col-md-7 heading-section  text-center'>
            <h3 className='subheading'>Инстаграм</h3>
            <h2 className='mb-1'>Галерея релакса</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 '>
            <a
              href='https://www.instagram.com/andrei_astakhov_/'
              target='_blank'
              className='gallery image-popup img d-flex align-items-center'
              style={{
                backgroundImage: `url(${'/img/instagram-1.jpg'})`,
              }}
            >
              <div className='icon mb-4 d-flex align-items-center justify-content-center'>
                <span className=''>
                  <IoLogoInstagram />
                </span>
              </div>
            </a>
          </div>
          <div className='col-md-3 '>
            <a
              href='https://www.instagram.com/andrei_astakhov_/'
              target='_blank'
              className='gallery image-popup img d-flex align-items-center'
              style={{
                backgroundImage: `url(${'/img/instagram-2.jpg'})`,
              }}
            >
              <div className='icon mb-4 d-flex align-items-center justify-content-center'>
                <span className=''>
                  <IoLogoInstagram />
                </span>
              </div>
            </a>
          </div>
          <div className='col-md-3 '>
            <a
              href='https://www.instagram.com/andrei_astakhov_/'
              target='_blank'
              className='gallery image-popup img d-flex align-items-center'
              style={{
                backgroundImage: `url(${'/img/instagram-3.jpg'})`,
              }}
            >
              <div className='icon mb-4 d-flex align-items-center justify-content-center'>
                <span className=''>
                  <IoLogoInstagram />
                </span>
              </div>
            </a>
          </div>
          <div className='col-md-3 '>
            <a
              href='https://www.instagram.com/andrei_astakhov_/'
              target='_blank'
              className='gallery image-popup img d-flex align-items-center'
              style={{
                backgroundImage: `url(${'/img/instagram-4.jpg'})`,
              }}
            >
              <div className='icon mb-4 d-flex align-items-center justify-content-center'>
                <span className=''>
                  <IoLogoInstagram />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            text
          }
          heading
          description
        }
      }
    }
  }
`;
