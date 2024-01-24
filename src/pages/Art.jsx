import './makeup.scss';

import { useLocation } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ArtCarousel2 from '../assets/artcarousel2.jpg';
import ArtCarousel3 from '../assets/artcarousel3.jpeg';
import ArtCarousel4 from '../assets/artcarousel4.jpeg';
import ArtCarousel5 from '../assets/artcarousel5.jpeg';
import ArtCarousel6 from '../assets/artcarousel6.jpeg';
import ArtCarousel7 from '../assets/artcarousel7.jpeg';
import ArtCarousel8 from '../assets/artcarousel8.jpeg';
import ArtCarousel9 from '../assets/artcarousel9.jpeg';
import ShowMoreButton from '../components/ShowMoreBtn';

const Art = () => {
  const { pathname } = useLocation();
  const [visibleImages, setVisibleImages] = useState(4);
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
          <h2>Art</h2>
          <p>
            Itt láthatod azokat a kedvenc munkáimat, amiknél még inkább
            kiélhetem a kreativitásomat
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
          ArtCarousel2,
          ArtCarousel3,
          ArtCarousel4,
          ArtCarousel5,
          ArtCarousel6,
          ArtCarousel7,
          ArtCarousel8,
          ArtCarousel9,
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

export default Art;
