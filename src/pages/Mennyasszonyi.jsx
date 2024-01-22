import './makeup.scss';
import React, { useState, useRef } from 'react';

const Mennyasszonyi = () => {
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
          <h3>Mennyasszonyi smink</h3>
          <p className='weeding-text'>
            Az esküvői sminket egy próbasmink előzi meg, ahol mindent
            részletesen egyeztetünk. A próbasmink elkészítésénél többek között
            szó esik a csokor és menyasszonyi ruha színéről, a dekorról, a
            bőrtípus meghatározásáról, és a bőrápolási szokásokról, arc- és
            szemformáról. Ezek alapján alakítom a menyasszonyi sminket a hozott
            elképzeléshez, hogy minden harmonizáljon. Egy esküvőn gyakran
            túlcsordulnak az érzelmek, ezért a tartósság az egyik legfontosabb
            szempont. Ennek érdekében vízálló anyagokkal, technikával dolgozom,
            aminek az elkészítése időigényesebb, mint egy alkalmi sminknél.
            Minden esetben a legmagasabb minőségű termékekkel dolgozom. A
            próbasmink nálam készül, az esküvő napján természetesen kiszállást
            is vállalok felárral. Az esküvő napján koszorúslányoknak,
            családtagoknak és a vendégeknek is vállalom a sminkjük elkészítését.
          </p>
          <p className='weeding-text'>
            {' '}
            Különböző csomagok érhetőek el: a mennyasszonyi csomag tartalmazza a
            próbasminket és az aznapi sminket műszempillával.
          </p>
          <p className='weeding-text'>
            A kombinált csomag tartalmazza a mennyasszonyi csomagot, illetve
            három fő elkészítését.
          </p>
          <p className='weeding-text'>
            A kombinált csomag2 tartalmazza a mennyasszonyi csomagot,illetve öt
            fő feletti elkészítését, ezen felül megbeszélés tárgya.
          </p>
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
            <ul>
              <li>Menyasszonyi csomag: -50.000 Ft</li>
              <li className='display-emoji'>Kombinált csomag: -89.000 Ft</li>
              <li className='display-emoji'>Kombinált csomag2: -120.000 Ft</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mennyasszonyi;
