import './services.scss';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div className='services' id='services'>
      <motion.div className='textContainer'>
        <p>
          Lorem, ipsum dolor sit amet consectetur
          <br />
          adipisicing elit.
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer'>Szolgáltatások</motion.div>
      <motion.div className='listContainer'>
        <div className='box'>
          <img
            src='https://images.pexels.com/photos/7121392/pexels-photo-7121392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <p>Alkalmi Smink</p>
        </div>
        <div className='box'>
          <img
            src='https://images.pexels.com/photos/7121392/pexels-photo-7121392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <p>Mennyasszonyi Smink </p>
        </div>
        <div className='box'>
          <img
            src='https://images.pexels.com/photos/7121392/pexels-photo-7121392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <p>Fotózás/ Forgatás</p>
        </div>
        <div className='box'>
          <img
            src='https://images.pexels.com/photos/7121392/pexels-photo-7121392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <p>Önsminkelő oktatás</p>
        </div>
        <div className='box'>
          <img
            src='https://images.pexels.com/photos/7121392/pexels-photo-7121392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <p>Lorem ipsum dolor </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
