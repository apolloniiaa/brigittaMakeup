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
      <div className='parallax-container'>
        <section className='text-section'>
          <h3>Alkalmi smink</h3>
          <p>
            Egy nő életében számos olyan esemény van, ahol fontos a jó
            megjelenés, ahol még szebbek, többek szeretnénk lenni, akár csak egy
            kicsit is. Legyen szó szülinapról, céges partyról, évfordulóról vagy
            fotózásról - egy jó smink mindig öltöztet! Célom az adottságok
            kiemelése, mindenkinél egyénre szabva. Ezáltal sosem egy vakolat
            születik, hanem egy letisztult megjelenés, ami nem változtatja meg a
            karaktered. Természetesen, ha az a cél, például egy különleges
            fotózás alkalmával, bármi kivitelezhető. Minden esetben a
            legmagasabb minőségű, professzionális termékekkel dolgozom, a smink
            garantáltan tartós lesz.
          </p>
        </section>

        <section className='background-section'></section>
      </div>

      <div className='qa'>
        <div className='centered-container'>
          <img
            src='https://i.pinimg.com/564x/e1/4e/26/e14e26ec085a0670044af6030241c248.jpg'
            alt='Your Image'
            className='centered-image'
          />
          <div className='text-box'>
            <p> Ennek díja</p>
            <ul>
              <li>14.500Ft </li>
              <li> igény esetén műszempilla kérhető felárral</li>{' '}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Alkalmi;
