import React from 'react'

import '../styles/Gallery.css';
import img1 from '../image/1.jpg';
import img2 from '../image/7.jpg';
import img3 from '../image/8.jpg';
import img4 from '../image/2.jpg';
import img5 from '../image/9.jpg';
import img6 from '../image/1.jpg';
import img7 from '../image/1.jpg';
import img8 from '../image/7.jpg';
import img9 from '../image/8.jpg';
import { Header } from './Header';
import { Footer } from './Footer';
export const Gallery = () => {
  return (
    <div>
      <Header/>
      <div className='gallery'>
        <div className='container'>
          <h2>Our Gallery</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          <div className='ourgym-gallery'>
            <img src={img1} alt='img1' />
            <img src={img2} alt='img2' />
            <img src={img3} alt='img3' />
            <img src={img4} alt='img4' />
            <img src={img5} alt='img5' />
            <img src={img6} alt='img6' />
            <img src={img7} alt='img7' />
            <img src={img8} alt='img8' />
            <img src={img9} alt='img9' />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
