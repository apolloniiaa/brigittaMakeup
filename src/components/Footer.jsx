import './footer.scss';
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footerRow'>
          <div className='footerCopyright'>
            Brigitta Nóra Makeup Artist &copy; 2024
            <span>Crafted with passion by Divine Inborn Studio.</span>
          </div>
        </div>
      </div>
      <div className='footerIcons'>
        <a
          href='https://www.instagram.com/nbn_mua?fbclid=IwAR0ryDSd02aqJn6F0kd1EV6vivnSskMH2KR7HcHQjbhNFcr4vs3YzE4I7r8 '
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram className='icon' />
        </a>
        <a
          href='https://www.facebook.com/brigitta.n.nemeth'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaFacebook className='icon' />
        </a>
        <a
          href='mailto:nemeth.brigittanora@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaEnvelope className='icon' />
        </a>

        <a
          href='https://www.linkedin.com/in/janos-balogh-83a21521b/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className='icon' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
