import './makeup.scss';
import React, { useState, useRef } from 'react';
import ArtCoverImg from '../assets/artcarousel1.jpg';

import ArtCarousel2 from '../assets/artcarousel2.jpg';
import ArtCarousel3 from '../assets/artcarousel3.jpeg';
import ArtCarousel4 from '../assets/artcarousel4.jpeg';
import ArtCarousel5 from '../assets/artcarousel5.jpeg';
import ArtCarousel6 from '../assets/artcarousel6.jpeg';
import ArtCarousel7 from '../assets/artcarousel7.jpeg';
import ArtCarousel8 from '../assets/artcarousel8.jpeg';

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
        <img src={ArtCoverImg} alt='Small Image' className='small-image' />
        <div className='text-container'>
          <h2>Art</h2>
          <p>
            Itt láthatod azokat a kedvenc munkáimat,amiknél méginkább kiélhetem
            a kreativitásomat
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
              ArtCarousel2,
              ArtCarousel3,
              ArtCarousel4,
              ArtCarousel5,
              ArtCarousel6,
              ArtCarousel7,
              ArtCarousel8,
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
