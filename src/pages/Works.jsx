import React from 'react';
import { Link } from 'react-router-dom';
import './works.scss';
import BeautyCoverImg from '../assets/beautyCover.jpg';
import GlamourCoverImg from '../assets/glamourCover.jpeg';
import WeddingCoverImg from '../assets/weddingfomain.jpg';
import FashionCoverImg from '../assets/fashionCover.jpg';
import ArtCoverImg from '../assets/artcarousel3.jpeg';

const Works = () => {
  return (
    <div className='workee'>
      <div className='works'>
        <Card to='/beauty' title='Beauty' imageUrl={BeautyCoverImg} />
        <Card to='/glamour' title='Glamour' imageUrl={GlamourCoverImg} />
        <Card to='/wedding' title='Esküvői' imageUrl={WeddingCoverImg} />
        <Card to='/fashion' title='Divat' imageUrl={FashionCoverImg} />
        <Card to='/art' title='Art' imageUrl={ArtCoverImg} />
      </div>
    </div>
  );
};

const Card = ({ to, title, imageUrl }) => {
  return (
    <Link to={to} className='card'>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </Link>
  );
};

export default Works;
