import React from 'react';
import PropTypes from 'prop-types';
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const FeatureGrid = ({ gridItems }) => (
  <div className='row no-gutters'>
    {gridItems.map((item) => (
      <div key={item.text} className='col-md-6 col-lg-4'>
        <div className='package-program'>
          <a
            href='#'
            className='img d-flex justify-content-center align-items-center'
            style={{
              backgroundImage: `url(${
                !!item.image.childImageSharp
                  ? item.image.childImageSharp.fluid.src
                  : item.image
              })`,
            }}
          >
            <div className='text p-5 text-center'>
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          </a>
        </div>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
