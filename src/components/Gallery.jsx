// Gallery.jsx
import React from 'react';
import './gallery.scss';
import video from '../assets/video.mp4';

const Gallery = () => {
  return (
    <div className='gallery' id='contact'>
      <div className='background-video'>
        {/* <video autoPlay muted loop>
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video> */}
        <img
          src='https://i.pinimg.com/564x/e1/4e/26/e14e26ec085a0670044af6030241c248.jpg'
          alt='Small Image'
          className='small-image'
        />

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
