import { Link } from 'react-router-dom';
import './gallery.scss';

const Gallery = () => {
  return (
    <div className='gallery' id='contact'>
      <div className='background-img'>
        <div className='overlay'></div>
      </div>

      <div className='content'>
        <h1>KERESS BIZALOMMAL!</h1>
        <h1>KERESS BIZALOMMAL!</h1>
        <div className='gallery-link'>
          <Link to='/contact'>
            <p className='work-btn'>
              Kapcsolat <Link to='/contact'></Link>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
