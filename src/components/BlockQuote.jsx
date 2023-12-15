// blockQuote.jsx

import React from 'react';
import './blockQuote.scss';
import { motion } from 'framer-motion';

const BlockQuote = () => {
  return (
    <div className='blockQuote'>
      <div className='quote-container'>
        <blockquote className='quote'>
          <span className='quote-mark'> &ldquo; </span>
          Hiszem, hogy mindenki gyönyörű, az én feladatom ezt kiemelni.
          <span className='quote-mark'> &rdquo;</span>
        </blockquote>
        <p className='author'>- Brigitta</p>
      </div>
    </div>
  );
};

export default BlockQuote;
