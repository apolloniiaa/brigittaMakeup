import './makeup.scss';
import React, { useState, useRef } from 'react';

const Alkalmi = () => {
  const imageContainerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = () => {
    const container = imageContainerRef.current;
    const isAtStart = container.scrollLeft === 0;
    const isAtEnd =
      container.scrollLeft + container.clientWidth >= container.scrollWidth;

    setIsAtStart(isAtStart);
    setIsAtEnd(isAtEnd);
  };

  const scroll = (direction) => {
    const container = imageContainerRef.current;
    const far = (container.clientWidth / 2) * direction;
    const pos = container.scrollLeft + far;

    container.scrollTo({ left: pos, behavior: 'smooth' });
  };

  return (
    <>
      <div className='parallax'>
        <img
          src='https://i.pinimg.com/564x/e1/4e/26/e14e26ec085a0670044af6030241c248.jpg'
          alt='Small Image'
          className='small-image'
        />
        <div className='text-container'>
          <h2>
            A start makeup here Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores, neque?
          </h2>
          <h3>This is where you can tell exactly what you can do for them</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            atque? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quas iure, natus harum aspernatur nisi ducimus blanditiis voluptas
            eos assumenda.
          </p>
        </div>
      </div>

      <div className='parallax-container'>
        <section className='text-section'>
          <h3>Alkalmi smink</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            deserunt quas architecto similique provident expedita voluptatibus
            cumque dolorum? Quo officia molestias facere enim id, cum eaque
            minus architecto rerum ex.
          </p>
        </section>

        <section className='background-section'>
          <div className='small-image'>
            <img
              src='https://i.pinimg.com/564x/e1/4e/26/e14e26ec085a0670044af6030241c248.jpg'
              alt=''
            />
          </div>
          <div className='large-image'></div>
        </section>
      </div>

      <div className='qa'>
        <div className='centered-container'>
          <img
            src='https://i.pinimg.com/564x/e1/4e/26/e14e26ec085a0670044af6030241c248.jpg'
            alt='Your Image'
            className='centered-image'
          />
          <div className='text-box'>
            <p>You're in the QA</p>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>{' '}
              <li>Lorem ipsum dolor sit amet.</li>{' '}
              <li>Lorem ipsum dolor sit amet.</li>{' '}
              <li>Lorem ipsum dolor sit amet.</li>{' '}
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='carousel'>
        <div className='wrapper'>
          <a
            className={`prev ${isAtStart ? 'disabled' : ''}`}
            onClick={() => scroll(-1)}
            style={{ visibility: isAtStart ? 'hidden' : 'visible' }}
          >
            &#10094;
          </a>
          <div
            className='image-container'
            ref={imageContainerRef}
            onScroll={handleScroll}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
              <div className='image' key={number}>
                <img
                  src='https://i.pinimg.com/564x/e1/4e/26/e14e26ec085a0670044af6030241c248.jpg'
                  alt={`Image ${number}`}
                />
              </div>
            ))}
          </div>
          <a
            className={`next ${isAtEnd ? 'disabled' : ''}`}
            onClick={() => scroll(1)}
            style={{ visibility: isAtEnd ? 'hidden' : 'visible' }}
          >
            &#10095;
          </a>
        </div>
      </div>
    </>
  );
};
export default Alkalmi;
