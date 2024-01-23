import './makeup.scss';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'; // Import useEffect
const Onsminkelo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className='parallax-container'>
        <section className='text-section'>
          <h3>Önsminkelő oktatás</h3>
          <p>
            A bőrtípusodtól kezdve az arcápoláson keresztül a szemformádig
            mindent meghatározunk. Mint tudjuk,minden arc más és más,így
            személyre szabva, a te arcformádhoz,stílusodhoz illően tanítalak meg
            arra,ami egy jó sminkhez szükséges. Önbizalmat ad és sokkal
            gyorsabban,átláthatóbban fogod tudni magadnak készíteni a
            mindennapokban,vagy akár alkalmakra,mindemellett olyan
            szépészeti,bőrápolási trükkökkel látlak el,amiket szintén később is
            tudsz alkalmazni. Kérlek, az oktatásra hozd magaddal a neszesszered
            - benne minden olyan smink és bőrápolási termékkel, amelyeket a
            mindennapok során használsz!
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
            <p> Ennek díja</p>
            <ul>
              <li> 3,5 óra - 35.000Ft </li>
              <li> Csoportos oktatás esetén 30.000Ft /fő</li>{' '}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Onsminkelo;
