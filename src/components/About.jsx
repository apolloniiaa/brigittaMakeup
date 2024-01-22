import './about.scss';
import AboutPhoto from '../assets/about.jpeg';
import AboutPhoto1 from '../assets/about1.jpg';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='content-container'>
        <div className='title'>RÓLAM</div>
        <div className='small-image-container'>
          <img src={AboutPhoto} alt='Small Image' />

          <p>
            Szerelem, szenvedély, kitartás, kreativitás, hivatás, remény,
            húzóerő. Ezek jelentik számomra a sminkelést. Bátran kijelenthetem,
            hogy ez az életem. Ezekből következtetésképpen egyértelművé válik
            mindenki számára, hogy az én életemben ez nem csak munka. Örömmel
            mondhatom, hogy megtaláltam azt, ami boldoggá tesz.
          </p>
        </div>
      </div>
      <div className='image-container'>
        <img src={AboutPhoto1} alt='Small Image' />
        <p>
          Kislány korom óta rajongok a művészetért. Kezdetben ez a
          rajzversenyeken való részvételben nyilvánult meg nemzetközi szinten.
          Később grafikai tudásomat fejlesztettem, és végül a sminkművészet vált
          a teljes szenvedélyemmé, és ezt csinálom már 7 éve. Ez az izgalmas
          hivatás lehetőséget ad arra, hogy úgymond 3D vásznakon alkothassak.
          Mint tudjuk, minden arc más és más, így sosem születik két
          ugyanolyan...
        </p>
      </div>
    </div>
  );
};

export default About;
