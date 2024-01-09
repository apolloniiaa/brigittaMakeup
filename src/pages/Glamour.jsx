import './makeup.scss';
import React, { useState, useRef } from 'react';
import GlamourCoverImg from '../assets/glamourCover.jpeg';
import GlamourCarousel1 from '../assets/gkmcarousel1.jpg';
import GlamourCarousel2 from '../assets/gkmcarousel2.jpg';
import GlamourCarousel3 from '../assets/gkmcarousel3.jpg';
import GlamourCarousel4 from '../assets/gkmcarousel4.jpg';
import GlamourCarousel5 from '../assets/gkmcarousel5.jpg';
import GlamourCarousel6 from '../assets/gkmcarousel6.jpeg';
import GlamourCarousel7 from '../assets/gkmcarousel7.jpeg';
import GlamourCarousel8 from '../assets/gkmcarousel8.jpeg';

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
        <img src={GlamourCoverImg} alt='Small Image' className='small-image' />
        <div className='text-container'>
          <h2>Glamour</h2>
          <p>
            Itt láthatod a jelenlegi kedvenc munkáimat a Glamour
            sminkjeimről,amire legtöbb esetben a fényes,vagy erősebb szemsmink
            jellemző.
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
              GlamourCarousel1,
              GlamourCarousel2,
              GlamourCarousel3,
              GlamourCarousel4,
              GlamourCarousel5,
              GlamourCarousel6,
              GlamourCarousel7,
              GlamourCarousel8,
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
