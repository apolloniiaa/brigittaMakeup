// portfolio.jsx

import React from 'react';
import './portfolio.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '220%',
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};
const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='slidingTextContainer'>PORTFOLIO</div>
      <div className='content'>
        <div className='text'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            justo nec urna ultricies sollicitudin. Quisque fermentum, odio at
            sagittis volutpat, turpis.
          </p>
        </div>
        <div className='images'>
          <img
            src='https://images.pexels.com/photos/7121392/pexels-photo-7121392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Main Image'
          />
          <img
            src='https://images.pexels.com/photos/5390667/pexels-photo-5390667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Small Image'
          />
        </div>
      </div>
      <Link to='/works'>
        <p className='work-btn'>
          View My Portfolio <Link to='/works'></Link>
        </p>
      </Link>
    </div>
  );
};

export default Portfolio;
