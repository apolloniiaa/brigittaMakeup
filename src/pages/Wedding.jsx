import './makeup.scss';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'; // Import useEffect

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

import Navbar from '../components/Navbar';
const Wedding = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className='parallax'>
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

      <div className='wrapper'>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={WeddingCarousel1} alt='' wide />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={WeddingCarousel2} alt='' big />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={WeddingCarousel3} alt='' big />
        </div>

        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={WeddingCarousel4} alt='' tall />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={WeddingCarousel5} alt='' wide />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={WeddingCarousel6} alt='' tall />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={WeddingCarousel7} alt='' tall />
        </div>

        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={WeddingCarousel8} alt='' wide />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={WeddingCarousel9} alt='' big />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={WeddingCarousel10} alt='' big />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={WeddingCarousel11} alt='' big />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={WeddingCarousel12} alt='' big />
        </div>
      </div>
    </>
  );
};
export default Wedding;
