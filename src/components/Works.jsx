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
            Az alkotásaimban igyekszem harmonizálni a formák és színek között,
            hogy minden részlet tökéletesen illeszkedjen egymáshoz, és
            létrehozzon egy egyedi, emlékezetes élményt.
          </p>
        </div>
      </div>

      <div className='works-container2'>
        <div className='text-container2'>
          <p>
            Minden részletre odafigyelek, hogy egy teljes, összehangolt művet
            alkothassak.
          </p>
        </div>
        <div className='image-container2'></div>
      </div>

      <div className='works-container3'>
        <div className='image-container3'></div>
        <div className='text-container3'>
          <p>
            A formák és színek harmóniáját keresem, hogy minden részlet
            tökéletesen illeszkedjen egymáshoz. Az alkotásaim célja egyedi és
            emlékezetes élményt nyújtani, ahol a természetes szépség és az
            esztétikai harmónia dominálnak
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
