import React from 'react'
import '../styles/Blog.css';
import img1 from '../image/4.jpg';
import img2 from '../image/5.jpg';
import img3 from '../image/6.jpg';
import { Header } from './Header';
import { Footer } from './Footer';
export const Blog = () => {
  return (
    <div>
     <Header/>
      <div className='blog'>
        <div className='container'>
          <h2>Read our creative articles on fitness</h2>
          <div className='blog-cards'>
            <div className="card" id='card-data' >
              <img src={img1} className="card-img-top" alt="img1" />
              <div className="card-body">
                <h5 className="card-title">Beautiful girl having coffee at the work table in office timing...</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn">continue...</a>
              </div>
            </div>

            <div className="card" id='card-data'>
              <img src={img2} className="card-img-top" alt="img2" />
              <div className="card-body">
                <h5 className="card-title">Girl having coffee at the work table in office timing...</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn">continue...</a>
              </div>
            </div>
            <div className="card" id='card-data'>
              <img src={img3} className="card-img-top" alt="img3" />
              <div className="card-body">
                <h5 className="card-title">Having coffee at the work table in office timing...</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn">continue...</a>
              </div>
            </div>
            <div className="card" id='card-data' >
              <img src={img1} className="card-img-top" alt="img1" />
              <div className="card-body">
                <h5 className="card-title">Beautiful girl having coffee at the work table in office timing...</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn">continue...</a>
              </div>
            </div>

            <div className="card" id='card-data'>
              <img src={img2} className="card-img-top" alt="img2" />
              <div className="card-body">
                <h5 className="card-title">Girl having coffee at the work table in office timing...</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn">continue...</a>
              </div>
            </div>

            <div className="card" id='card-data'>
              <img src={img3} className="card-img-top" alt="img3" />
              <div className="card-body">
                <h5 className="card-title">Having coffee at the work table in office timing...</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn">continue...</a>
              </div>
            </div>
            <div className="card" id='card-data' >
              <img src={img1} className="card-img-top" alt="img1" />
              <div className="card-body">
                <h5 className="card-title">Beautiful girl having coffee at the work table in office timing...</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn">continue...</a>
              </div>
            </div>

            <div className="card" id='card-data'>
              <img src={img2} className="card-img-top" alt="img2" />
              <div className="card-body">
                <h5 className="card-title">Girl having coffee at the work table in office timing...</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn">continue...</a>
              </div>
            </div>

            <div className="card" id='card-data'>
              <img src={img3} className="card-img-top" alt="img3" />
              <div className="card-body">
                <h5 className="card-title">Having coffee at the work table in office timing...</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn">continue...</a>
              </div>
            </div>

          </div>
          <nav aria-label="Page navigation example">
            <ol className="pagination justify-content-center m-0">
              <li className="page-item  m-0" id='blog-page'>
                <a className="page-link" href="#" aria-disabled="true">1</a>
              </li>
              <li className="page-item m-0" id='blog-page'><a className="page-link" href="#">2</a></li>
              <li className="page-item m-0" id='blog-page'><a className="page-link" href="#">3</a></li>
              <li className="page-item m-0" id='blog-page'><a className="page-link" href="#">4</a></li>
              <li className="page-item m-0" id='blog-page'><a className="page-link" href="#">5</a></li>
             
            </ol>
          </nav>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
