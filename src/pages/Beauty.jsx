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
        <img src={BeautyCoverImg} alt='Small Image' className='small-image' />
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
              BeautyCarousel9,
              BeautyCarousel1,
              BeautyCarousel2,
              BeautyCarousel4,
              BeautyCarousel5,
              BeautyCarousel6,
              BeautyCarousel7,
              BeautyCarousel8,

              BeautyCarousel10,
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
