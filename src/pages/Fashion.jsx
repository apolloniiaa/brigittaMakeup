import './makeup.scss';
import React, { useState, useRef } from 'react';
import FashionCoverImg from '../assets/fashionCover.jpg';
import FashionCarousel1 from '../assets/fashioncarousel1.jpg';
import FashionCarousel4 from '../assets/fashioncarousel5.jpg';
import FashionCarousel5 from '../assets/fashioncarousel6.jpg';
import FashionCarousel6 from '../assets/fashioncarousel8.jpg';
import FashionCarousel7 from '../assets/fashioncarousel9.jpeg';
import FashionCarousel9 from '../assets/fashioncarousel9.jpg';

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
        <img src={FashionCoverImg} alt='Small Image' className='small-image' />
        <div className='text-container'>
          <h2>Fashion</h2>
          <p>
            Itt láthatod azokat a kedvenc fashion munkáimat,amik a divatvilág
            által inspirált munkák,melyek nem minden esetben hétköznapi
            alkotások.
          </p>
        </div>
      </div>

      <div className='carousel'>
        <div className='wrapper'>
          <a
            className={`prev ${isAtStart ? 'disabled' : ''}`}
            onClick={() => scroll(-1)}
            style={{ visibility: isAtStart ? 'hidden' : 'visible' }}
          >
            &#10094;
          </a>
          <div
            className='image-container'
            ref={imageContainerRef}
            onScroll={handleScroll}
          >
            {[
              FashionCarousel1,
              FashionCarousel4,
              FashionCarousel5,
              FashionCarousel9,
              FashionCarousel6,
              FashionCarousel7,
            ].map((image, index) => (
              <div className='image' key={index}>
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: '400px',
                    height: '500px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            ))}
          </div>
          <a
            className={`next ${isAtEnd ? 'disabled' : ''}`}
            onClick={() => scroll(1)}
            style={{ visibility: isAtEnd ? 'hidden' : 'visible' }}
          >
            &#10095;
          </a>
        </div>
      </div>
    </>
  );
};
export default Alkalmi;
