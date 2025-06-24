import React from 'react'
import '../styles/Classes.css';
import { Header } from './Header';
import { Footer } from './Footer';

export const Classes = () => {
  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='classes'>
          <h2>Fitness Classes</h2>
          <div className='classes-content'>
            <div className='classes-data'>
              <h3>Morning Bikram Yoga<br />
                with Andrew</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,<br /><br />

                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='classes-data-left'>
              <p>Timing : 6 AM to 7 AM<br/>
              Price 34$</p>
            </div>
          </div>
          <div className='classes-content'>
            <div className='classes-data'>
              <h3>Morning Bikram Yoga<br />
                with Andrew</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,<br /><br />

                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='classes-data-left'>
              <p>Timing : 6 AM to 7 AM<br/>
              Price 34$</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
