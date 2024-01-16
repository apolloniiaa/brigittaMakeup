import './services.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WeddingCarousel1 from '../assets/fashioncarousel6.jpg';

const Services = () => {
  return (
    <section className='container'>
      <h1>Szolgáltatások</h1>

      <section className='card__container'>
        <div className='card__bx' style={{ '--clr': ' #f4e2d2' }}>
          <div className='card__data'>
            <div className='card__icon'>
              <img
                src={WeddingCarousel1}
                style={{ width: '200px', height: '90px', objectFit: 'cover' }}
              />
            </div>
            <div className='card__content'>
              <Link to='/alkalmi'>Alkalmi Smink</Link>
            </div>
          </div>
        </div>
        <div className='card__bx' style={{ '--clr': ' #f4e2d2' }}>
          <div className='card__data'>
            <div className='card__icon'>
              <img
                src={WeddingCarousel1}
                style={{ width: '200px', height: '90px', objectFit: 'cover' }}
              />
            </div>
            <div className='card__content'>
              <Link to='/fotozas'>Fotózás/Forgatás</Link>
            </div>
          </div>
        </div>
        <div className='card__bx' style={{ '--clr': ' #f4e2d2' }}>
          <div className='card__data'>
            <div className='card__icon'>
              <img
                src={WeddingCarousel1}
                style={{ width: '200px', height: '90px', objectFit: 'cover' }}
              />
            </div>
            <div className='card__content'>
              <Link to='/mennyasszonyi'>Mennyasszonyi Smink</Link>
            </div>
          </div>
        </div>
        <div className='card__bx' style={{ '--clr': ' #f4e2d2' }}>
          <div className='card__data'>
            <div className='card__icon'>
              <img
                src={WeddingCarousel1}
                style={{ width: '200px', height: '90px', objectFit: 'cover' }}
              />
            </div>
            <div className='card__content'>
              <Link to='/onsminkelo'>Önsminkelő Oktatás</Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
