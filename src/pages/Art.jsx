import './makeup.scss';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

import ArtCarousel2 from '../assets/artcarousel2.jpg';
import ArtCarousel3 from '../assets/artcarousel3.jpeg';
import ArtCarousel4 from '../assets/artcarousel4.jpeg';
import ArtCarousel5 from '../assets/artcarousel5.jpeg';
import ArtCarousel6 from '../assets/artcarousel6.jpeg';
import ArtCarousel7 from '../assets/artcarousel7.jpeg';
import ArtCarousel8 from '../assets/artcarousel8.jpeg';
import ArtCarousel9 from '../assets/artcarousel9.jpeg';

const Art = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className='parallax'>
        <div className='text-container'>
          <h2>Art</h2>
          <p>
            Itt láthatod azokat a kedvenc munkáimat, amiknél még inkább
            kiélhetem a kreativitásomat
          </p>

          <Link to='/works' className='work-btn'>
            Vissza a galériához
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
        ].map((image, index) => (
          <div
            key={index}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '5px',
            }}
          >
            <img src={image} alt={`Art smink ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Art;
