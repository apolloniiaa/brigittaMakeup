import './makeup.scss';
import React, { useState, useRef } from 'react';
import FashionCarousel1 from '../assets/fashioncarousel1.jpg';
import FashionCarousel2 from '../assets/fashioncarousel5.jpg';
import FashionCarousel3 from '../assets/fashioncarousel6.jpg';
import FashionCarousel4 from '../assets/fashioncarousel8.jpg';
import FashionCarousel5 from '../assets/fashioncarousel9.jpeg';
import FashionCarousel6 from '../assets/fashioncarousel9.jpg';

const Alkalmi = () => {
  const imageContainerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = () => {
    const container = imageContainerRef.current;
    const isAtStart = container.scrollLeft === 0;
    const isAtEnd =
      container.scrollLeft + container.clientWidth >= container.scrollWidth;

    setIsAtStart(isAtStart);
    setIsAtEnd(isAtEnd);
  };

  const scroll = (direction) => {
    const container = imageContainerRef.current;
    const far = (container.clientWidth / 2) * direction;
    const pos = container.scrollLeft + far;

    container.scrollTo({ left: pos, behavior: 'smooth' });
  };

  return (
    <>
      <div className='parallax'>
        <div className='text-container'>
          <h2>Fashion</h2>
          <p>
            Itt láthatod azokat a kedvenc fashion munkáimat,amik a divatvilág
            által inspirált munkák,melyek nem minden esetben hétköznapi
            alkotások.
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
          <img src={FashionCarousel1} alt='' wide />
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
          <img src={FashionCarousel2} alt='' big />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={FashionCarousel3} alt='' big />
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
          <img src={FashionCarousel4} alt='' tall />
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
          <img src={FashionCarousel5} alt='' wide />
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
          <img src={FashionCarousel6} alt='' tall />
        </div>
      </div>
    </>
  );
};
export default Alkalmi;
