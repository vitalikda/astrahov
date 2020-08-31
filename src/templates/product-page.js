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
                backgroundImage: `url(${'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117419434_656845391590529_4049853595886823799_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=A1u7bNGkFYYAX-T854q&oh=98cb056f51ec075c3f145b44170e3c4f&oe=5F72919D'})`,
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
                backgroundImage: `url(${'https://scontent-hel2-1.cdninstagram.com/v/t51.2885-15/e35/115820923_328007528224195_6433606234252855939_n.jpg?_nc_ht=scontent-hel2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=bmLoV2pf2YUAX-HXx21&oh=bcb5679af29d051d3bfd3fefe49b7ac7&oe=5F4B7B8B'})`,
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
                backgroundImage: `url(${'https://instagram.fhel3-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/116473515_1213295329010206_4128797228406217245_n.jpg?_nc_ht=instagram.fhel3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=_z7llAoLOfQAX_IqNa8&oh=a02fbc640dc8c21bc6592b5e30a5b0c8&oe=5F7398F4'})`,
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
                backgroundImage: `url(${'https://instagram.fhel6-1.fna.fbcdn.net/v/t51.2885-15/e35/103526736_264449581298885_5661593467512079681_n.jpg?_nc_ht=instagram.fhel6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=c80z55VE1QAAX_MdiP4&oh=7a5ed7c625881efe54cb48084e00f8e9&oe=5F4B2752'})`,
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
