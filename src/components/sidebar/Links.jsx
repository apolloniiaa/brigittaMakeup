// Links.jsx
import React from 'react';
import { Link } from 'react-scroll';

const Links = () => {
  const items = [
    { english: 'home', hungarian: 'Főoldal' },
    { english: 'portfolio', hungarian: 'Portfólió' },
    { english: 'about', hungarian: 'Rólam' },
    { english: 'services', hungarian: 'Szolgáltatások' },
    { english: 'contact', hungarian: 'Kapcsolat' },
  ];

  return (
    <div className='links'>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.english}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          {item.hungarian}
        </Link>
      ))}
    </div>
  );
};

export default Links;
