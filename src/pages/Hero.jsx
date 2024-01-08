import './hero.scss';
import { motion } from 'framer-motion';
import MaingImg from '../assets/homePage.jpg';

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
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'mirror',
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
        Németh Brigitta Nóra <br />
        Makeup Artist
      </motion.div>
    </motion.div>
  );
};

export default Hero;
