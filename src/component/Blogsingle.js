import React from 'react'
import img1 from '../image/4.jpg';
import '../styles/Blogsingle.css';

import { Header } from './Header';
import { Footer } from './Footer';
export const Blogsingle = () => {
  return (
    <div>
      <Header/>
      <div className='blogsingle'>
        <div className='container'>
          <div className='blogsingle-top'>
            <img src={img1} alt='img1' />
            <div className='blogsingle-top-left'>
              <h2>Beautiful girl having coffee at the work table in office timing...</h2>
              <p>
                Beautiful girl having coffee at the work table in office timing...
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br /><br />

                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />

                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
            </div>
          </div>
          <div id='blogsingle-content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />

              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
            <pre>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br />
              do eiusmod tempor incididunt ut labore et dolore magna<br />
              aliqua. sed do eiusmod tempor incididunt ut labore et dolore<br />
              magna aliqua..</pre>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />

              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
          </div>
          <div className='blog-social'>
            <div className='blogsingle-social'>
              <button className="fa fa-facebook me-2" aria-hidden="true"> 1.2m</button>
              <button className="fa fa-twitter me-2" aria-hidden="true"> 448.6k</button>
              <button className="fa fa-pinterest" aria-hidden="true"> 111.7k</button>
            </div>
            <p>Dec 23, 2016 Posted by <b>Bizzy</b> In :<a>Fashion</a> </p>
          </div>
          <h1>Comments Posted (34)</h1>
          <div className='blogsingle-level2'>
            <div className='blogsingle-level2-left'>
              <p><b>Andrew Suzzane</b> - 12.06.2016<br/>
                Wow...Wow.....i really like the way you write the to the articles about your photography, they are really awesome thanks a lot for sharing</p>
            </div>
            <div className='blogsingle-level2-left'>
              <p><b>Andrew Suzzane</b> - 12.06.2016<br/>
                Wow...Wow.....i really like the way you write the to the articles about your photography, they are really awesome thanks a lot for sharing</p>
            </div>
          </div>
          <h3>Write a Comment</h3>
          <form id='blogsingle-form'>
            <input type="text" name="name" className="name " placeholder="Your Name" />
            <input type="email" name="name" className="name " placeholder="Your Email Addres" /><br />
            <textarea type="textarea" name="name" className="textarea " placeholder="Type your message" />
            <a href="#">Alright Submit</a>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
