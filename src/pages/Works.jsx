import React from 'react';
import { Link } from 'react-router-dom';
import './works.scss';

const Works = () => {
  return (
    <div className='workee'>
      <div className='works'>
        <Card
          to='/beauty'
          title='Beauty'
          imageUrl='https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <Card
          to='/glamour'
          title='Glamour'
          imageUrl='https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <Card
          to='/wedding'
          title='Esküvői'
          imageUrl='https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <Card
          to='/fashion'
          title='Divat'
          imageUrl='https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <Card
          to='/art'
          title='Art'
          imageUrl='https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
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
