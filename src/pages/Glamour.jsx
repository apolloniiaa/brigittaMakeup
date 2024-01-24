// Glamour.jsx

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ShowMoreButton from '../components/ShowMoreBtn';

import GlamourCarousel1 from '../assets/gkmcarousel1.jpg';
import GlamourCarousel2 from '../assets/gkmcarousel2.jpg';
import GlamourCarousel3 from '../assets/gkmcarousel3.jpg';
import GlamourCarousel4 from '../assets/gkmcarousel4.jpg';
import GlamourCarousel5 from '../assets/gkmcarousel5.jpeg';
import GlamourCarousel6 from '../assets/gkmcarousel6.jpeg';
import GlamourCarousel7 from '../assets/gkmcarousel7.jpeg';
import GlamourCarousel8 from '../assets/gkmcarousel8.jpeg';
import GlamourCarousel9 from '../assets/gkmcarousel9.jpg';

const Glamour = () => {
  const { pathname } = useLocation();
  const [visibleImages, setVisibleImages] = useState(3);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleToggleImages = () => {
    const increment = window.innerWidth >= 768 ? 3 : 4;
    const newVisibleImages = visibleImages + increment;

    if (newVisibleImages >= 9) {
      setVisibleImages(9);
    } else {
      setVisibleImages(newVisibleImages);
    }
  };

  return (
    <>
      <div className='parallax'>
        <div className='text-container'>
          <h2>Glamour</h2>
          <p>
            Itt láthatod a jelenlegi kedvenc munkáimat a Glamour sminkjeimről,
            amire legtöbb esetben a fényes, vagy erősebb szemsmink jellemző.
          </p>
          <Link to='/works'>
            <p className='work-btn'>
              Vissza a Gallériához <Link to='/works'></Link>
            </p>
          </Link>
        </div>
      </div>

      <div className='wrapper'>
        {[
          GlamourCarousel1,
          GlamourCarousel2,
          GlamourCarousel3,
          GlamourCarousel4,
          GlamourCarousel5,
          GlamourCarousel6,
          GlamourCarousel7,
          GlamourCarousel8,
          GlamourCarousel9,
        ]
          .slice(0, visibleImages)
          .map((image, index) => (
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

      {visibleImages < 9 && (
        <ShowMoreButton onClick={handleToggleImages}>
          {visibleImages < 8 ? 'Mutass többet' : 'Mutass kevesebbet'}
        </ShowMoreButton>
      )}
    </>
  );
};
export default Glamour;
