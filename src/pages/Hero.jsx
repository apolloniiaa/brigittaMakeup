import './hero.scss';
import { motion } from 'framer-motion';
import MaingImg from '../assets/homePage.jpg';
import { Link } from 'react-router-dom';

const bgVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const imageVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 4,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: '100%', // Indításkor jobbról indul
  },
  animate: {
    x: 0, // Középre áll meg
    transition: {
      duration: 2, // A megállási idő
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={bgVariants}
      initial='initial'
      animate='animate'
      className='hero'
      id='home'
    >
      <motion.div key='image' className='imageContainer'>
        <motion.img
          key='images'
          variants={imageVariants}
          initial='initial'
          animate='animate'
          className='imageContainer'
          transition={{ delay: 1 }}
          src={MaingImg}
          alt=''
        />
      </motion.div>

      <motion.div
        key='slider'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
        className='slidingTextContainer'
        transition={{ delay: 3 }}
      >
        <div style={{ textAlign: 'center' }}>
          <div className='title'>Németh Brigitta Nóra</div>
          <div className='subTitle'>Makeup Artist</div>
        </div>
      </motion.div>
      {/* <Link to='/'></Link> */}
    </motion.div>
  );
};

export default Hero;
