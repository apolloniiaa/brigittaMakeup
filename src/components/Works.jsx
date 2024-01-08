// works.jsx

import React from 'react';
import './works.scss';

const Works = () => {
  return (
    <div className='section-container' id='works'>
      <div className='works-container'>
        <div className='image-container'></div>
        <div className='text-container'>
          <p>
            Az alkotásaimat mindenkinél egyénre szabom, hogy minden illeszkedjen
            formailag és színvilágilag, hiszen a Te arcodból is csak egy van.
          </p>
        </div>
      </div>

      <div className='works-container2'>
        <div className='text-container2'>
          <p>Minden az apró részleteken múlik.</p>
        </div>
        <div className='image-container2'></div>
      </div>

      <div className='works-container3'>
        <div className='image-container3'></div>
        <div className='text-container3'>
          <p>
            Bármilyen smink elkészítésére rendelkezésre állok, legyen az
            kreatív, ahol szárnyalhat a fantáziánk vagy akár csak egy
            hétköznapi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
