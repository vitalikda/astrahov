import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Testimonials from '../components/Testimonials';

import { IoLogoInstagram } from 'react-icons/io';

export const AboutPageTemplate = ({
  image,
  title,
  heading,
  paragraph,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
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
                <span>{heading}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Quote section */}
      <section class='ftco-section d-md-flex bg-light'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-10 text-center'>
              <h2>{paragraph}</h2>
            </div>
          </div>
        </div>
      </section>
      {/* Page content */}
      <section className='ftco-section'>
        <div className='container'>
          <div className='row'>
            <PageContent className='content' content={content} />
          </div>
        </div>
      </section>
      {/* Testimonials section */}
      <section className='ftco-section testimony-section'>
        <div className='container'>
          <div className='row justify-content-center mb-5 pb-3'>
            <div className='col-md-7 heading-section text-center'>
              <h3 className='subheading'>Отзывы</h3>
              <h2 className='mb-1'>Довольные клиенты</h2>
            </div>
          </div>
          <Testimonials />
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
    </>
  );
};

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        paragraph={post.frontmatter.paragraph}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        paragraph
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
