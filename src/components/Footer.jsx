// Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'; // Használd a free-brands-svg-icons csomagot

import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='icons'>
        {/* Instagram icon */}
        {/* <FontAwesomeIcon icon={faInstagram} className='icon' /> */}
        {/* Facebook icon */}
        <FontAwesomeIcon icon={faFacebook} className='icon' />
        <FontAwesomeIcon icon={faInstagram} className='icon' />
        <FontAwesomeIcon icon={faLinkedin} className='icon' />
        {/* LinkedIn icon */}
        {/* <FontAwesomeIcon icon={faLinkedin} className='icon' />
        {/* Email icon */}
      </div>
      <div className='copy'>
        <p>&copy; 2023 All Rights Reserved. Crafted by Divine Inborn Studio</p>
        <p>BrigittaNora Makeup Artist</p>
      </div>
    </div>
  );
};

export default Footer;
