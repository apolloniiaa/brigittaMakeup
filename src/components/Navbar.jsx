import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

import './navbar.scss';
import { motion } from 'framer-motion';
import SideBar from './sidebar/SideBar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <SideBar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className='social'>
          <a
            href='https://www.instagram.com/nbn_mua '
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
