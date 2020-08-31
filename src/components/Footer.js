import React from 'react';
import { Link } from 'gatsby';

import { FaTelegramPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='ftco-footer ftco-section img'>
        <div className='overlay'></div>
        <div className='container'>
          <div className='row mb-5'>
            <div className='col-lg-3 col-md-6 mb-5 mb-md-5 '>
              <div className='ftco-footer-widget mb-4'>
                <h1 className='logo'>Андрей Астахов</h1>
              </div>
            </div>
            <div className='col-lg col-md-6 mb-5 mb-md-5 '>
              <div className='ftco-footer-widget mb-4'>
                <h2 className='location'>
                  Нижняя Красносельская улица, 4, Москва
                </h2>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 mb-5 mb-md-5'>
              <div className='ftco-footer-widget mb-4'>
                <ul className='ftco-footer-social list-unstyled float-md-left float-lft'>
                  <li className=''>
                    <a href='https://t.me/andrei_astakhov_' target='_blank'>
                      <span>
                        <FaTelegramPlane />
                      </span>
                    </a>
                  </li>
                  <li className=''>
                    <a href='https://wa.me/79654177613' target='_blank'>
                      <span>
                        <FaWhatsapp />
                      </span>
                    </a>
                  </li>
                  <li className=''>
                    <a
                      href='https://instagram.com/andrei_astakhov_/'
                      target='_blank'
                    >
                      <span>
                        <FaInstagram />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <nav className='nav justify-content-center mb-3'>
                <Link to='/' className='nav-link'>
                  Главная
                </Link>
                <Link className='nav-link' to='/about'>
                  Обо мне
                </Link>
                <Link className='nav-link' to='/products'>
                  Услуги
                </Link>
                <Link className='nav-link' to='/contact/schedule'>
                  Расписание
                </Link>
                <Link className='nav-link' to='/blog'>
                  Статьи
                </Link>
                <Link className='nav-link' to='/contact'>
                  Контакты
                </Link>
                <a
                  className='nav-link'
                  href='/admin/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Кабинет
                </a>
              </nav>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <p>
                Copyright &copy; {currentYear} All rights reserved | This
                website is made with {''}
                <i
                  style={{
                    position: 'relative',
                    bottom: '2px',
                  }}
                >
                  <FaHeart />
                </i>{' '}
                by {''}
                <a href='https://vitaly.im' target='_blank'>
                  Vitaly
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
