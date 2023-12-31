// Gallery.jsx
import React from 'react';
import './gallery.scss';
import WorkImg from '../assets/fashioncarousel1.jpg';

const Gallery = () => {
  return (
    <div className='gallery' id='contact'>
      <div className='background-video'>
        <img src={WorkImg} alt='Small Image' className='small-image' />

        <div className='overlay'></div>
      </div>
      <div className='content'>
        <h1>DOLGOZZUNK EGYÜTT!</h1>
        <h1>DOLGOZZUNK EGYÜTT!</h1>
        <div className='gallery-link'>
          <a href='#'>Elérhetőség</a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
