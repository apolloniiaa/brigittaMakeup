import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Fotozas = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className='parallax-container'>
        <section className='text-section'>
          <h3>Fotózás / Forgatás</h3>
          <p>
            Számos produkcióban dolgoztam már sorozatoktól kezdve a
            videoklipeken át a márkafotózásig. Ezek során volt lehetőségem több
            ismert személlyel, színésszel,énekessel együtt dolgozni, mint
            például Ónodi Eszter, Weisz Fanni, Hajdu Steve, Varga Miklós, Nagy
            Feró, Pataky Attila, Sasvári Sándor…stb.Mindegyik más és más, legyen
            szó filmforgatásról, reklámról vagy videoklipről.Igények, kérések
            alapján dolgozom. Ide tartoznak a céges -, és kampányfotózások is.
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
            <p> Díja</p>
            <ul>
              <li>
                Egyéni árazást alkalmazok, amely a időtartam és a modellek száma
                szerint változik. Az árak meghatározásához minden esetben
                előzetes egyeztetés szükséges.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Fotozas;
