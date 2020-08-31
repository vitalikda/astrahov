import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import Testimonials from '../components/Testimonials';

import { IoIosCheckmarkCircle, IoLogoInstagram } from 'react-icons/io';
import {
  GiHeartOrgan,
  GiLotus,
  GiMeditation,
  GiAquarium,
} from 'react-icons/gi';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
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
        <div className='row no-gutters slider-text js-fullheight align-items-center justify-content-start'>
          <div className='col-md-8'>
            <h1 className='typewrite mb-3'>{heading}</h1>
            <h2 className='mb-5'>{subheading}</h2>
            <p>
              <Link to='#' className='btn btn-primary p-3 px-4'>
                Записаться
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Intro section */}
    <section
      className='ftco-section ftco-intro'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp
            ? mainpitch.image.childImageSharp.fluid.src
            : mainpitch.image
        })`,
      }}
    >
      <div className='container'>
        <div className='row justify-content-end'>
          <div className='col-md-6'>
            <div className='heading-section '>
              <h2 className='mb-4'>{mainpitch.title}</h2>
            </div>
            <p className=''>{mainpitch.description}</p>
            <ul className='mt-5 do-list'>
              <li className=''>
                <a href='#'>
                  <span className='mr-3'>
                    <IoIosCheckmarkCircle />
                  </span>
                  Повышает умственные способности
                </a>
              </li>
              <li className=''>
                <a href='#'>
                  <span className='mr-3'>
                    <IoIosCheckmarkCircle />
                  </span>
                  Помогает лучше дышать
                </a>
              </li>
              <li className=''>
                <a href='#'>
                  <span className='mr-3'>
                    <IoIosCheckmarkCircle />
                  </span>
                  Улучшает твою силу
                </a>
              </li>
              <li className=''>
                <a href='#'>
                  <span className='mr-3'>
                    <IoIosCheckmarkCircle />
                  </span>
                  Помогает вам сосредоточиться
                </a>
              </li>
              <li className=''>
                <a href='#'>
                  <span className='mr-3'>
                    <IoIosCheckmarkCircle />
                  </span>
                  Помогает придать смысл вашему дню
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* Benefits section */}
    <section className='ftco-section ftco-section-services bg-light'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='services'>
              <div className='icon d-flex justify-content-center align-items-center'>
                <span>
                  <GiHeartOrgan />
                </span>
              </div>
              <div className='text mt-4'>
                <h3>Здоровый образ жизни</h3>
                <p>
                  Рядом с ними протекает небольшая речка Дуден, снабжающая его
                  необходимыми регелиалами. Это райская страна
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='services'>
              <div className='icon d-flex justify-content-center align-items-center'>
                <span>
                  <GiLotus />
                </span>
              </div>
              <div className='text mt-4'>
                <h3>Баланс тела и разума</h3>
                <p>
                  Рядом с ними протекает небольшая речка Дуден, снабжающая его
                  необходимыми регелиалами. Это райская страна
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='services'>
              <div className='icon d-flex justify-content-center align-items-center'>
                <span>
                  <GiMeditation />
                </span>
              </div>
              <div className='text mt-4'>
                <h3>Практика медитации</h3>
                <p>
                  Рядом с ними протекает небольшая речка Дуден, снабжающая его
                  необходимыми регелиалами. Это райская страна
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='services'>
              <div className='icon d-flex justify-content-center align-items-center'>
                <span>
                  <GiAquarium />
                </span>
              </div>
              <div className='text mt-4'>
                <h3>Эдеология</h3>
                <p>
                  Рядом с ними протекает небольшая речка Дуден, снабжающая его
                  необходимыми регелиалами. Это райская страна
                </p>
              </div>
            </div>
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
    {/* Latest posts section */}
    <section className='ftco-section bg-light'>
      <div className='container'>
        <div className='row justify-content-center mb-5 pb-3'>
          <div className='col-md-7 heading-section  text-center'>
            <h3 className='subheading'>Статьи</h3>
            <h2 className='mb-1'>Последние статьи</h2>
          </div>
        </div>
        <BlogRoll />
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

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        subheading
        mainpitch {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
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
