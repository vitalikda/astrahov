import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { v4 } from 'uuid';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaQuoteLeft } from 'react-icons/fa';

class Testimonials extends React.Component {
  render() {
    const { data } = this.props;
    const testimonials =
      data.allMarkdownRemark.edges[0].node.frontmatter.testimonials;
    var settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
      ],
    };

    return (
      <div className='row'>
        <div className='col-md-12'>
          <Slider className='carousel-testimony' {...settings}>
            {testimonials &&
              testimonials.map((testimonial) => (
                <div key={v4()} className='item'>
                  <div className='testimony-wrap p-4 pb-5'>
                    <div className='text'>
                      <div className='line pl-5'>
                        <p className='mb-4 pb-1'>{testimonial.quote}</p>
                        <span className='quote d-flex align-items-center justify-content-center'>
                          <FaQuoteLeft />
                        </span>
                      </div>
                      <div className='d-flex align-items-center'>
                        <div
                          className='user-img'
                          style={{
                            backgroundImage: `url(${
                              !!testimonial.image.childImageSharp
                                ? testimonial.image.childImageSharp.fluid.src
                                : null
                            })`,
                          }}
                        ></div>
                        <div className='ml-4'>
                          <p className='name'>{testimonial.author}</p>
                          <span className='position'>
                            {testimonial.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    );
  }
}

Testimonials.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query TestimonialsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "index-page" } } }
        ) {
          edges {
            node {
              frontmatter {
                testimonials {
                  author
                  image {
                    childImageSharp {
                      fluid(maxWidth: 240, quality: 64) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  position
                  quote
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <Testimonials data={data} />}
  />
);
