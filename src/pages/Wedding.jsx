// Wedding.jsx

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './makeup.scss';
import ShowMoreButton from '../components/ShowMoreBtn'; // Importáld a ShowMoreButton komponenst
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
import { Link } from 'react-router-dom';

const Wedding = () => {
  const { pathname } = useLocation();
  const [visibleImages, setVisibleImages] = useState(4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleToggleImages = () => {
    const increment = window.innerWidth >= 768 ? 3 : 4;
    const newVisibleImages = visibleImages + increment;

    if (newVisibleImages >= 12) {
      setVisibleImages(12);
    } else {
      setVisibleImages(newVisibleImages);
    }
  };

  return (
    <>
      <div className='parallax'>
        <div className='text-container'>
          <h2>Mennyaszonyi Smink</h2>
          <p>
            Itt nézheted át azokat a munkáimat, amik a jelenlegi kedvenceim a
            vendégeimről. Ha ezt az elegáns szépséget keresed, vedd fel velem a
            kapcsolatot! További részleteket a Szolgáltatások menüpontban
            találsz.
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

      {visibleImages < 12 && (
        <ShowMoreButton onClick={handleToggleImages}>
          {visibleImages < 11 ? 'Mutass többet' : 'Mutass kevesebbet'}
        </ShowMoreButton>
      )}
    </>
  );
};

export default Wedding;
