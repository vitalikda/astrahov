import React from 'react';
import { Link } from 'gatsby';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';

import { FaBars } from 'react-icons/fa';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      classNav: '',
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 200) {
      this.setState({ classNav: ' scrolled awake' });
    } else {
      this.setState({ classNav: '' });
    }
  }

  render() {
    return (
      <div>
        <BsNavbar
          expand='lg'
          onScroll={this.handleScroll}
          className={`ftco-navbar-light ${this.state.classNav}`}
        >
          <Container>
            <BsNavbar.Brand href='/'>Андрей Астахов</BsNavbar.Brand>
            <BsNavbar.Toggle aria-controls='basic-navbar-nav'>
              <span>
                <FaBars />
              </span>{' '}
              Меню
            </BsNavbar.Toggle>
            <BsNavbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <Nav.Item>
                  <Link className='nav-link' activeClassName='active' to='/'>
                    Главная
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    className='nav-link'
                    activeClassName='active'
                    to='/products'
                  >
                    Услуги
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    className='nav-link'
                    activeClassName='active'
                    to='/contact/schedule'
                  >
                    Расписание
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    className='nav-link'
                    activeClassName='active'
                    to='/about'
                  >
                    Обо мне
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    className='nav-link'
                    activeClassName='active'
                    to='/blog'
                  >
                    Статьи
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    className='nav-link'
                    activeClassName='active'
                    to='/contact'
                  >
                    Контакты
                  </Link>
                </Nav.Item>
              </Nav>
            </BsNavbar.Collapse>
          </Container>
        </BsNavbar>
      </div>
    );
  }
}

export default Navbar;
