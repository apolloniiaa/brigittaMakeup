import './makeup.scss';
import React, { useState, useRef } from 'react';
import WeddingCoverImg from '../assets/weddingfomain.jpg';
import WeddingCarousel1 from '../assets/weddingcarousel1.jpeg';
import WeddingCarousel2 from '../assets/weddingcarousel2.jpeg';
import WeddingCarousel3 from '../assets/weddingcarousel3.jpeg';
import WeddingCarousel4 from '../assets/weddingcarousel4.jpeg';
import WeddingCarousel5 from '../assets/weddingcarousel5.jpeg';
import WeddingCarousel6 from '../assets/weddingcarousel6.jpg';
import WeddingCarousel7 from '../assets/weddingcarousel7.jpeg';
import WeddingCarousel8 from '../assets/weddingcarousel8.jpeg';
import WeddingCarousel9 from '../assets/weddingcarousel9.jpeg';
import WeddingCarousel10 from '../assets/weddingcarousel10.jpeg';
import WeddingCarousel11 from '../assets/weddingcarousel11.jpeg';
import WeddingCarousel12 from '../assets/weddingcarousel12.jpeg';
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
        <img src={WeddingCoverImg} alt='Small Image' className='small-image' />
        <div className='text-container'>
          <h2>Mennyaszonyi Smink</h2>
          <p>
            Itt nézheted át azokat a munkáimat,amik a jelenlegi kedvenceim a
            vendégeimről. Ha ezt az elegáns szépséget keresed,vedd fel velem a
            kapcsolatot! További részleteket a Szolgáltatások menüpontban
            találsz.
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
              WeddingCarousel1,
              WeddingCarousel2,
              WeddingCarousel3,
              WeddingCarousel4,
              WeddingCarousel5,
              WeddingCarousel6,
              WeddingCarousel7,
              WeddingCarousel8,
              WeddingCarousel9,
              WeddingCarousel10,
              WeddingCarousel11,
              WeddingCarousel12,
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
