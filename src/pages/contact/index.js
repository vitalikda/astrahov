import React from 'react';
import { Link } from 'gatsby';
import { navigate } from 'gatsby-link';

import Layout from '../../components/Layout';

import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  render() {
    return (
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
                <h1 className='mb-3 bread'>Контактная информация</h1>
                <p className='breadcrumbs'>
                  <span className='mr-2'>
                    <Link to='/'>Главная</Link>
                  </span>{' '}
                  <span>Контакты</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact section */}
        <section className='ftco-section contact-section'>
          <div className='container'>
            <div className='row block-9'>
              {/* Contact information */}
              <div className='col-md-4 contact-info  bg-light p-4'>
                <div className='row'>
                  <div className='col-md-12 mb-4'>
                    <h2 className='h4'>Информация</h2>
                  </div>
                  <div className='col-md-12 mb-3'>
                    <p>
                      Нижняя Красносельская улица, 4, Москва, Россия, 107140
                    </p>
                  </div>
                  <div className='col-md-12 mb-3'>
                    <p>
                      <a href='tel://1234567920'>+ 1235 2355 98</a>
                    </p>
                  </div>
                  <div className='col-md-12 mb-3'>
                    <p>
                      <a href='mailto:info@yoursite.com'>info@yoursite.com</a>
                    </p>
                  </div>
                  <div className='col-md-12 mb-3'>
                    <p>
                      <a href='#'>yoursite.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-1'></div>
              {/* Contact form */}
              <div className='col-md-6 '>
                <form
                  className='contact-form'
                  name='contact'
                  method='post'
                  action='/contact/thanks/'
                  data-netlify='true'
                  data-netlify-honeypot='bot-field'
                  onSubmit={this.handleSubmit}
                >
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='имя'
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          className='form-control'
                          placeholder='электронная почта'
                          type={'email'}
                          name={'email'}
                          onChange={this.handleChange}
                          id={'email'}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      placeholder='сообщение'
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                      cols='30'
                      rows='7'
                    />
                  </div>
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type='hidden' name='form-name' value='contact' />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name='bot-field' onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className='form-group'>
                    <button className='btn btn-primary py-3 px-5' type='submit'>
                      Отправить
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Map */}
        <YMaps id='map' className='map'>
          <Map
            defaultState={{
              center: [55.778801, 37.6668],
              zoom: 16,
              controls: [],
              behaviors: 'rightMouseButtonMagnifier',
            }}
            width='100%'
            height={400}
          >
            <Placemark
              defaultGeometry={[55.778801, 37.6668]}
              options={{ iconColor: '#90d1a6' }}
            />
            <ZoomControl options={{ float: 'right' }} />
          </Map>
        </YMaps>
      </Layout>
    );
  }
}
