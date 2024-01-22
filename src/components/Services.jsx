import './services.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Alkalmi from '../assets/bjticarousel8.jpeg';
import Fotozas from '../assets/bjuticarousel3.JPG';
import Mennyasszonyi from '../assets/weddingcarousel5.jpeg';
import Onsminkelo from '../assets/bjticarousel4.jpeg';

const Services = () => {
  return (
    <section className='container'>
      <h1>Szolgáltatások</h1>

      <section className='card__container'>
        <div className='card__bx' style={{ '--clr': ' #f4e2d2' }}>
          <div className='card__data'>
            <div className='card__icon'>
              <img
                src={Alkalmi}
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
                src={Fotozas}
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
                src={Mennyasszonyi}
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
                src={Onsminkelo}
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
