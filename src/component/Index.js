import React from 'react'
import '../styles/Index.css';
import '../styles/Header.css';
import { Header } from './Header';
import { Footer } from './Footer';
import logo from '../image/logo.png'
import img1 from '../image/1.jpg';
import img2 from '../image/2.jpg';
import img3 from '../image/3.jpg';
import img4 from '../image/4.jpg';
import img5 from '../image/5.jpg';
import img6 from '../image/6.jpg';
import img7 from '../image/body3.jpg';
import img8 from '../image/feed1.jpg';
import img9 from '../image/feed2.jpg';
import img10 from '../image/feed3.jpg';
import img11 from '../image/feed4.jpg';
import img12 from '../image/feed5.jpg';
import img13 from '../image/instagram-feed.png';
import { Blog } from './Blog';
import { Blogsingle } from './Blogsingle';
import { Link, NavLink } from 'react-router-dom';
export const Index = () => {
  return (
    <div>
      <div className='index'>
        <div className='header'>
          <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light pt-5">
              <div className="container-fluid">
                <NavLink className="navbar-brand m-0" to='/'>
                  <img src={logo} alt='LOGO' />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-0 mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink to='' className='nav-link'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to='/Classes' className='nav-link'>Classes</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to='/Ourgym' className='nav-link'>Our Gym</NavLink>

                    </li>
                    <li className="nav-item">
                      <NavLink to='/Gallery' className='nav-link'>Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to='/Contactus' className='nav-link'>Contact</NavLink>
                    </li>

                  </ul>

                </div>
              </div>
            </nav>

          </div>
          <hr />
          <div className='container'>
            <div className='head-content'>
              <h1>Get Fit With Our Fitnez Theme</h1>
              <p>Awesomely Coded With Great Feasibility</p>
              <Link to='/Blog'>GET STARTED </Link>
              <Link to='/Blogsingle'>PRICING</Link>
            </div>
          </div>

          <div className='head-last'>
            <div className='container'>
              <div className='head-last-content'>
                <div className='head-data'>
                  <h3>Professional</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

                </div>
                <div className='head-data'>
                  <h3>Affordable</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

                </div>
                <div className='head-data'>
                  <h3>Experienced</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='section1'>
          <div className='container'>
            <h4>Super Speciality Gym for Your Health</h4>
            <h6>Awesomely Coded With Great Feasibility</h6>
            <div className='section1-card'>
              <div className="card" id='section1-data'>
                <h5 className="card-title">Professional</h5>
                <img src={img1} className="card-img-top" alt="img1" />
                <div className="card-body">
                  <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>

                </div>
              </div>
              <div className="card" id='section1-data'>
                <h5 className="card-title">Affordable</h5>
                <img src={img2} className="card-img-top" alt="img2" />
                <div className="card-body">
                  <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>

                </div>
              </div>
              <div className="card" id='section1-data'>
                <h5 className="card-title">Experienced</h5>
                <img src={img3} className="card-img-top" alt="img3" />
                <div className="card-body">
                  <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...</p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section2'>
          <div className='container'>
            <div className='section2-one'>
              <div className='section2-data'>
                <i className="fa fa-desktop fa-2x" aria-hidden="true"></i>
                <h4>WEB DESIGN</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='section2-data'>
                <i class="fa fa-camera-retro fa-2x" aria-hidden="true"></i>
                <h4>PHOTOGRAPHY</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='section2-data'>
                <i class="fa fa-code fa-2x" aria-hidden="true"></i>
                <h4>PSD TO HTML</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <hr />
            <div className='section2-one'>
              <div className='section2-data'>
                <i class="fa fa-users fa-2x" aria-hidden="true"></i>
                <h4>MARKETING</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='section2-data'>
                <i class="fa fa-users fa-2x" aria-hidden="true"></i>
                <h4>LOGO DESIGNING</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='section2-data'>
                <i class="fa fa-users fa-2x" aria-hidden="true"></i>
                <h4>GRAPHIC DESIGN</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='section3'>
          <div className='container'>
            <h3>Read our creative articles on fitness</h3>
            <div className='section3-card'>
              <div id='section3-card-data'>
                <img src={img4} className="card-img-top" alt="img4" />


                <p>Beautiful girl having coffee at the work table in office timing...</p>
                <a href="#" className="btn">continue...</a>
              </div>

              <div id='section3-card-data'>
                <img src={img5} className="card-img-top" alt="img5" />


                <p>Girl having coffee at the work table in office timing...</p>
                <a href="#" className="btn">continue...</a>
              </div>

              <div id='section3-card-data'>
                <img src={img6} className="card-img-top" alt="img6" />


                <p>Having coffee at the work table in office timing...</p>
                <a href="#" className="btn">continue...</a>
              </div>

            </div>
          </div>
        </div>
        {/* <div className='section4'>
          <div className='section4-content'>
            <img src={img8} className='section4-img' alt='img1' />
            <img src={img9} className='section4-img' alt='img2' />
            <img src={img10} className='section4-img' alt='img3' />
            <img src={img11} className='section4-img' alt='img4' />
            <img src={img12} className='section4-img' alt='img5' />

          </div>
          <div className='section4-insta'>
            <img src={img13} className='section4-insta-img' alt='insta' />
          </div>

        </div> */}
         <div className="section4">
        <div className="section4-img-here">
          <img src={img8} alt="img1" className="section4-img" />
          <div className="overlay">
            <img src={img13} alt="overlay-img" />
          </div>
        </div>

        <div className="section4-img-here">
          <img src={img9} alt="img2" className="section4-img" />
          <div className="overlay">
            <img src={img13} alt="overlay-img" />
          </div>
        </div>

        <div className="section4-img-here">
          <img src={img10} alt="img3" className="section4-img" />
          <div className="overlay">
            <img src={img13} alt="overlay-img" />
          </div>
        </div>

        <div className="section4-img-here">
          <img src={img11} alt="img4" className="section4-img" />
          <div className="overlay">
            <img src={img13} alt="overlay-img" />
          </div>
        </div>

        <div className="section4-img-here">
          <img src={img12} alt="img5" className="section4-img" />
          <div className="overlay">
            <img src={img13} alt="overlay-img" />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>


  )
}
