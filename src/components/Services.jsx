import './services.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <motion.div className='services' id='services'>
      <motion.div className='titleContainer'>Szolgáltatások</motion.div>
      <motion.div className='listContainer'>
        <Link to='/alkalmi' className='box'>
          <img
            src='https://images.pexels.com/photos/7121392/pexels-photo-7121392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />

          <p className='work-btn'>
            Alkalmi Smink <Link to='/alkalmi'></Link>
          </p>
        </Link>

        <Link to='/mennyasszonyi' className='box'>
          <img
            src='https://images.pexels.com/photos/7121392/pexels-photo-7121392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />

          <p className='work-btn'>
            Mennyasszonyi Smink <Link to='/alkalmi'></Link>
          </p>
        </Link>

        <Link to='/fotozas' className='box'>
          <img
            src='https://images.pexels.com/photos/7121392/pexels-photo-7121392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />

          <p className='work-btn'>
            Fotózás/Forgatás <Link to='/fotozas'></Link>
          </p>
        </Link>

        <Link to='/onsminkelo' className='box'>
          <img
            src='https://images.pexels.com/photos/7121392/pexels-photo-7121392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <p className='work-btn'>Önsminkelő oktatás</p>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Services;
