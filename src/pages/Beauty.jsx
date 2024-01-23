import { Link } from 'react-router-dom';
import ShowMoreButton from '../components/ShowMoreBtn'; // Importáltam a ShowMoreButton komponenst
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './makeup.scss';
import BeautyCarousel1 from '../assets/bjtcarousel1.jpeg';
import BeautyCarousel2 from '../assets/bjticarousel2.jpeg';
import BeautyCarousel4 from '../assets/bjticarousel4.jpeg';
import BeautyCarousel5 from '../assets/bjticarousel5.jpg';
import BeautyCarousel6 from '../assets/bjticarousel6.jpeg';
import BeautyCarousel7 from '../assets/bjticarousel7.jpeg';
import BeautyCarousel8 from '../assets/bjticarousel8.jpeg';
import BeautyCarousel9 from '../assets/bjticarousel9.jpeg';
import BeautyCarousel10 from '../assets/bjticarousel10.jpeg';

const Beauty = () => {
  const { pathname } = useLocation();
  const [visibleImages, setVisibleImages] = useState(4);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleToggleImages = () => {
    if (showMore) {
      const increment = window.innerWidth >= 768 ? 3 : 4;
      setVisibleImages((prevVisibleImages) => prevVisibleImages + increment);
    } else {
      setVisibleImages(9);
      setShowMore(false);
    }
    setShowMore(!showMore);
  };

  return (
    <>
      <div className='parallax'>
        <div className='text-container'>
          <h2>Beauty</h2>
          <p>
            Itt nézheted át azokat a munkáimat, amik jelenleg a kedvenceim a
            Beauty sminkjeim közül. Ezekre a finom elegancia és fényes bőrkép a
            jellemző, ahol lágyan dolgozom. A legapróbb részlet is ugyanolyan
            fontos, mint az összes többi.
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
          BeautyCarousel1,
          BeautyCarousel2,
          BeautyCarousel4,
          BeautyCarousel10,
          BeautyCarousel2,
          BeautyCarousel8,
          BeautyCarousel6,
          BeautyCarousel7,
          BeautyCarousel5,
          BeautyCarousel9,
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
      {visibleImages < 10 && (
        <ShowMoreButton onClick={handleToggleImages}>
          {visibleImages < 9 ? 'Mutass többet' : 'Mutass kevesebbet'}
        </ShowMoreButton>
      )}
    </>
  );
};
export default Beauty;
