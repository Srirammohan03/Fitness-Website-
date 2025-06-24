import React from 'react'

import '../styles/Contactus.css'
import { Header } from './Header'
import { Footer } from './Footer'
export const Contactus = () => {
  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='contactus'>
          <h2>Contact Us</h2>
          <p className='contactus-para'>Lorem Ipsum is simply dummy text of the printing and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and scrambled it to make a type specimen book.</p>
          <div className='contact-content'>
            <div className='contact-left'>

              <input type="text" name="name" className="name " placeholder="Your Name" />
              <input type="text" name="name" className="name " placeholder="Your Email Addres" />
              <br />
              <textarea type="text" name="name" className="textarea " placeholder="Type your message" />

              <a href="#">SUBMIT</a>
            </div>
            <div className='contact-right'>
              <p>Lorem Ipsum is simply dummy text of<br />
                the printing and typesetting industry.<br />
                Lorem Ipsum</p>
                <b><i class="fa fa-phone-square" aria-hidden="true"></i> 800 1234 5678</b><br />
                <b><i class="fa fa-envelope-open" aria-hidden="true"></i>info@yourwebsite.com</b><br />
                <b><i class="fa fa-globe" aria-hidden="true"></i>ww.website.com</b>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
