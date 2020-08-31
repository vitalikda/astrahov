import React from 'react';
import Link from 'gatsby-link';
import Layout from '../../components/Layout';

import Table from 'react-bootstrap/Table';

export default class Index extends React.Component {
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
                <h1 className='mb-3 bread'>Моё расписание</h1>
                <p className='breadcrumbs'>
                  <span className='mr-2'>
                    <Link to='/'>Главная</Link>
                  </span>{' '}
                  <span>Расписание</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Schedule section */}
        <section className='ftco-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 '>
                <div className='sched-list'>
                  <Table className='table'>
                    <thead className='thead-primary'>
                      <tr className='text-center'>
                        <th>&nbsp;</th>
                        <th> Пн </th>
                        <th> Вт </th>
                        <th> Ср </th>
                        <th> Чт </th>
                        <th> Пт </th>
                        <th> Сб </th>
                        <th> Вс </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='text-center'>
                        <td className='color'>
                          <p className='time'>9:00</p>
                        </td>

                        <td className='color-1'>
                          <h3>
                            <a href='#'>Morning Flow</a>
                          </h3>
                          <span className='at'>Advanced Sequence</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-1'>
                          <h3>
                            <a href='#'>Cardio Program</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-2'>
                          <h3>
                            <a href='#'>Body Building</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-3'>
                          <h3>
                            <a href='#'>Bicep Pro</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-1'>
                          <h3>
                            <a href='#'>Leg Strengthening</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-4'>
                          <h3>
                            <a href='#'>Muscle Relax</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-5'>
                          <h3>
                            <a href='#'>Yoga Program</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>
                      </tr>
                      {/* END TR */}

                      <tr className='text-center'>
                        <td className='color'>
                          <p className='time'>9:00</p>
                        </td>

                        <td className='color-1'></td>

                        <td className='color-2'>
                          <h3>
                            <a href='#'>Cardio Program</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-3'>
                          <h3>
                            <a href='#'>Body Building</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-3'></td>

                        <td className='color-1'>
                          <h3>
                            <a href='#'>Leg Strengthening</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-5'>
                          <h3>
                            <a href='#'>Muscle Relax</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-4'>
                          <h3>
                            <a href='#'>Yoga Program</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>
                      </tr>
                      {/* END TR */}

                      <tr className='text-center'>
                        <td className='color'>
                          <p className='time'>9:00</p>
                        </td>

                        <td className='color-3'>
                          <h3>
                            <a href='#'>Morning Flow</a>
                          </h3>
                          <span className='at'>Advanced Sequence</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-1'>
                          <h3>
                            <a href='#'>Cardio Program</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-2'>
                          <h3>
                            <a href='#'>Body Building</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-1'>
                          <h3>
                            <a href='#'>Bicep Pro</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-1'>
                          <h3>
                            <a href='#'>Leg Strengthening</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-4'>
                          <h3>
                            <a href='#'>Muscle Relax</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>

                        <td className='color-5'>
                          <h3>
                            <a href='#'>Yoga Program</a>
                          </h3>
                          <span className='at'>Weight Loss</span>
                          <p className='time'>9:00 - 10:30</p>
                          <span className='trainer'>Maricar Collins</span>
                        </td>
                      </tr>
                      {/* END TR */}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
