import React from 'react'
import '../styles/Header.css';
import logo from '../image/logo.png'

import { NavLink } from 'react-router-dom';
import { Index } from './Index';
export const Header = () => {
  return (
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
                  <NavLink to='/' className='nav-link'>Home</NavLink>
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
        </div>
      </div>
    </div>
  )
}
