import './makeup.scss';
import React, { useState, useRef } from 'react';
import BeautyCoverImg from '../assets/beautyfirstbalfent.jpg';
import BeautyCarousel1 from '../assets/bjtcarousel1.jpeg';
import BeautyCarousel2 from '../assets/bjticarousel2.jpeg';
import BeautyCarousel4 from '../assets/bjticarousel4.jpeg';
import BeautyCarousel5 from '../assets/bjticarousel5.jpg';
import BeautyCarousel6 from '../assets/bjticarousel6.jpeg';
import BeautyCarousel7 from '../assets/bjticarousel7.jpeg';
import BeautyCarousel8 from '../assets/bjticarousel8.jpeg';
import BeautyCarousel9 from '../assets/bjticarousel9.jpeg';
import BeautyCarousel10 from '../assets/bjticarousel10.jpeg';
import Navbar from '../components/Navbar';

const Beauty = () => {
  return (
    <>
      <Navbar />

      <div className='parallax'>
        <div className='text-container'>
          <h2>Beauty</h2>
          <p>
            Itt nézheted át azokat a munkáimat,amik jelenleg a kedvenceim a
            Beauty sminkjeim közül. Ezekre a finom elegancia és fényes bőrkép a
            jellemző,ahol lágyan dolgozom. A legapróbb részlet is ugyan olyan
            fontos,mint az összes többi.
          </p>
        </div>
      </div>
      <div className='wrapper'>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={BeautyCarousel1} alt='' wide />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={BeautyCarousel4} alt='' big />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={BeautyCarousel10} alt='' big />
        </div>

        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={BeautyCarousel2} alt='' tall />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={BeautyCarousel8} alt='' wide />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={BeautyCarousel6} alt='' tall />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={BeautyCarousel7} alt='' tall />
        </div>

        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={BeautyCarousel5} alt='' wide />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={BeautyCarousel9} alt='' big />
        </div>
      </div>
    </>
  );
};
export default Beauty;
