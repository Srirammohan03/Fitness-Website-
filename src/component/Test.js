import React from 'react'
import '../styles/Test.css';
import logo from '../image/logo.png'
import { NavLink } from 'react-router';
import img1 from '../image/feed1.jpg'
import img2 from '../image/feed2.jpg'
import img3 from '../image/feed3.jpg'
import img4 from '../image/feed4.jpg'
import img5 from '../image/feed5.jpg'
import img6 from '../image/instagram-feed.png';
export const Test = () => {
  return (
    <div >

      <h1>this is test</h1>
      {/* <div className='section4'>
            <img src={img1} className='section4-img' alt='img1'/>
            <img src={img2} className='section4-img' alt='img2'/>
            <img src={img3} className='section4-img' alt='img3'/>
            <img src={img4} className='section4-img' alt='img4'/>
            <img src={img5} className='section4-img' alt='img5'/>
            
          </div>
          <div className='section4-insta'>
            <img src={img6} className='section4-insta-img' alt='insta'/>
          </div> */}
      {/* <div className="section4">
        <img src={img1} alt="img1" className="section4-img" />
        <img src={img2} className='section4-img' alt='img2' />
        <img src={img3} className='section4-img' alt='img3' />
        <img src={img4} className='section4-img' alt='img4' />
        <img src={img5} className='section4-img' alt='img5' />
        <div className="overlay">
          <img src={img6} />
        </div>
      </div> */}
      <div className="section4">
        <div className="section4-img-here">
          <img src={img1} alt="img1" className="section4-img" />
          <div className="overlay">
            <img src={img6} alt="overlay-img" />
          </div>
        </div>

        <div className="section4-img-here">
          <img src={img2} alt="img2" className="section4-img" />
          <div className="overlay">
            <img src={img6} alt="overlay-img" />
          </div>
        </div>

        <div className="section4-img-here">
          <img src={img3} alt="img3" className="section4-img" />
          <div className="overlay">
            <img src={img6} alt="overlay-img" />
          </div>
        </div>

        <div className="section4-img-here">
          <img src={img4} alt="img4" className="section4-img" />
          <div className="overlay">
            <img src={img6} alt="overlay-img" />
          </div>
        </div>

        <div className="section4-img-here">
          <img src={img5} alt="img5" className="section4-img" />
          <div className="overlay">
            <img src={img6} alt="overlay-img" />
          </div>
        </div>
      </div>



    </div>

  )
}
