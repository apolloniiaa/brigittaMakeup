import React from 'react';
import './portfolio.scss';
import { Link } from 'react-router-dom';
import PortfolioPhoto from '../assets/portfolio2.jpg';
import PortfolioPhotoBack from '../assets/portfolioback.jpg';

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='slidingTextContainer'>PORTFOLIO</div>
      <div className='content'>
        <div className='text'>
          <p>
            ' Do it with passion or not at all. ' Ez az idézet abszolút rólam
            szól, ami annyit tesz, hogy ' Csináld szenvedéllyel, vagy sehogy.'
          </p>
        </div>
        <div className='images'>
          <img src={PortfolioPhotoBack} alt='Main Image' />
          <img src={PortfolioPhoto} alt='Main Image' />
        </div>
      </div>
      <Link to='/works'>
        <p className='work-btn'>
          Megtekintés <Link to='/works'></Link>
        </p>
      </Link>
    </div>
  );
};

export default Portfolio;
