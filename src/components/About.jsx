// about.jsx

import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='content-container'>
        <div className='title'>RÓLAM</div>
        <div className='small-image-container'>
          <img
            src='https://images.pexels.com/photos/7121392/pexels-photo-7121392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Small Image'
          />
          <p>
            Szerelem,szenvedély,kitartás,kreativitás,hivatás,remény,húzóerő…ezt
            jelenti számomra sminkelni. Bátran kijelenthetem,hogy ez az életem.
            Ezekből következtetésképpen egyértelművé válhat mindenki
            számára,hogy az én életemben ez nem csak munka. Örömmel
            mondhatom,hogy megtaláltam azt,ami boldoggá tesz.
          </p>
        </div>
      </div>
      <div className='image-container'>
        <img
          src='https://images.pexels.com/photos/16241275/pexels-photo-16241275/free-photo-of-distorted-portrait-of-brunette-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='About Me'
        />
        <p>
          Kislány korom óta rajongom a művészetért,ez kezdetben nemzetközi
          rajzversenyeken nyilvánult meg,később grafikai tudásomat
          fejlesztettem,végül a sminkelés vált teljes szenvedélyemmé,mindennek
          már 7éve. Izgalmas hivatás ez,hiszen úgymond 3D vásznakon alkothatok
          és mint tudjuk,minden arc más és más,így sosem születik két ugyan
          olyan..
        </p>
      </div>
    </div>
  );
};

export default About;
