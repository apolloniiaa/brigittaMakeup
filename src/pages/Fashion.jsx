// FashionCarousel.jsx

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './makeup.scss';
import ShowMoreButton from '../components/ShowMoreBtn'; // Importáltam a ShowMoreButton komponenst

import FashionCarousel1 from '../assets/fashioncarousel1.jpg';
import FashionCarousel2 from '../assets/fashioncarousel5.jpg';
import FashionCarousel3 from '../assets/fashioncarousel6.jpg';
import FashionCarousel4 from '../assets/fashioncarousel8.jpg';
import FashionCarousel5 from '../assets/fashioncarousel9.jpeg';
import FashionCarousel6 from '../assets/fashioncarousel9.jpg';

const FashionCarousel = () => {
  const { pathname } = useLocation();
  const [visibleImages, setVisibleImages] = useState(4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleShowMore = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 4);
  };

  return (
    <>
      <div className='parallax'>
        <div className='text-container'>
          <h2>Fashion</h2>
          <p>
            Itt láthatod azokat a kedvenc fashion munkáimat, amik a divatvilág
            által inspirált munkák, melyek nem minden esetben hétköznapi
            alkotások.
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
          FashionCarousel1,
          FashionCarousel2,
          FashionCarousel3,
          FashionCarousel4,
          FashionCarousel5,
          FashionCarousel6,
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
      {visibleImages < 6 && <ShowMoreButton onClick={handleShowMore} />}{' '}
      {/* Itt változtam, hogy 7 legyen a határ */}
    </>
  );
};

export default FashionCarousel;
