import './makeup.scss';
import React, { useState, useRef } from 'react';

import GlamourCarousel1 from '../assets/gkmcarousel1.jpg';
import GlamourCarousel2 from '../assets/gkmcarousel2.jpg';
import GlamourCarousel3 from '../assets/gkmcarousel3.jpg';
import GlamourCarousel4 from '../assets/gkmcarousel4.jpg';
import GlamourCarousel5 from '../assets/gkmcarousel5.jpg';
import GlamourCarousel6 from '../assets/gkmcarousel6.jpeg';
import GlamourCarousel7 from '../assets/gkmcarousel7.jpeg';
import GlamourCarousel8 from '../assets/gkmcarousel8.jpeg';

const Alkalmi = () => {
  return (
    <>
      <div className='parallax'>
        <div className='text-container'>
          <h2>Glamour</h2>
          <p>
            Itt láthatod a jelenlegi kedvenc munkáimat a Glamour
            sminkjeimről,amire legtöbb esetben a fényes,vagy erősebb szemsmink
            jellemző.
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
          <img src={GlamourCarousel1} alt='' wide />
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
          <img src={GlamourCarousel2} alt='' big />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={GlamourCarousel3} alt='' big />
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
          <img src={GlamourCarousel4} alt='' tall />
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
          <img src={GlamourCarousel5} alt='' wide />
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
          <img src={GlamourCarousel6} alt='' tall />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={GlamourCarousel7} alt='' tall />
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
          <img src={GlamourCarousel8} alt='' wide />
        </div>
      </div>
    </>
  );
};
export default Alkalmi;
