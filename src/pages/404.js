import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    {/* Hero section */}
    <section
      className='hero-wrap'
      style={{
        backgroundImage: `url(${'/img/bg_3.jpg'})`,
      }}
    >
      <div className='overlay'></div>
      <div className='container'>
        <div className='row no-gutters slider-text js-fullheight align-items-center justify-content-center'>
          <div className='col-md-9 text-center'>
            <h1 className='mb-3 bread'>Страница не найдена (404)</h1>
            <p className='breadcrumbs'>
              <span className='mr-2'>
                <Link to='/'>На главную</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
