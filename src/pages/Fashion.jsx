// FashionCarousel.jsx

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './makeup.scss';

import FashionCarousel1 from '../assets/fashioncarousel1.jpg';
import FashionCarousel8 from '../assets/fashioncarousel2.jpg';
import FashionCarousel9 from '../assets/fashioncarousel3.jpg';
import FashionCarousel10 from '../assets/fashioncarousel4.jpg';
import FashionCarousel2 from '../assets/fashioncarousel5.jpg';
import FashionCarousel3 from '../assets/fashioncarousel6.jpg';
import FashionCarousel4 from '../assets/fashioncarousel8.jpg';
import FashionCarousel5 from '../assets/fashioncarousel9.jpg';
import FashionCarousel6 from '../assets/fashioncarousel10.jpg';
import FashionCarousel7 from '../assets/fashioncarousel11.jpg';
import FashionCarousel11 from '../assets/fashioncarousel12.jpeg';

const FashionCarousel = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className='parallax'>
        <div className='text-container'>
          <h2>Fashion</h2>
          <p>
            Itt láthatod azokat a kedvenc fashion munkáimat, amik a divatvilág
            által inspirált munkák, melyek nem minden esetben hétköznapi
            alkotások.
          </p>
          <Link to='/works'>
            <p className='work-btn'>
              Vissza a galériához <Link to='/works'></Link>
            </p>
          </Link>
        </div>
      </div>
      <div className='wrapper'>
        {[
          FashionCarousel1,
          FashionCarousel2,
          FashionCarousel3,
          FashionCarousel4,
          FashionCarousel5,
          FashionCarousel6,
          FashionCarousel7,
          FashionCarousel8,
          FashionCarousel9,
          FashionCarousel10,
          FashionCarousel11,
        ].map((image, index) => (
          <div
            key={index}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '5px',
            }}
          >
            <img src={image} alt='' />
          </div>
        ))}
      </div>
    </>
  );
};

export default FashionCarousel;
