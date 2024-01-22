import './makeup.scss';

import ArtCoverImg from '../assets/artcarousel1.jpg';

import ArtCarousel2 from '../assets/artcarousel2.jpg';
import ArtCarousel3 from '../assets/artcarousel3.jpeg';
import ArtCarousel4 from '../assets/artcarousel4.jpeg';
import ArtCarousel5 from '../assets/artcarousel5.jpeg';
import ArtCarousel6 from '../assets/artcarousel6.jpeg';
import ArtCarousel7 from '../assets/artcarousel7.jpeg';
import ArtCarousel8 from '../assets/artcarousel8.jpeg';

const Art = () => {
  return (
    <>
      <div className='parallax'>
        <div className='text-container'>
          <h2>Art</h2>
          <p>
            Itt láthatod azokat a kedvenc munkáimat,amiknél méginkább kiélhetem
            a kreativitásomat
          </p>
        </div>
      </div>

      <div className='wrapper'>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={ArtCarousel2} alt='' wide />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={ArtCarousel4} alt='' big />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={ArtCarousel3} alt='' big />
        </div>

        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={ArtCarousel5} alt='' tall />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={ArtCarousel7} alt='' wide />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          {' '}
          <img src={ArtCarousel8} alt='' tall />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        >
          <img src={ArtCarousel6} alt='' tall />
        </div>
      </div>
    </>
  );
};
export default Art;
