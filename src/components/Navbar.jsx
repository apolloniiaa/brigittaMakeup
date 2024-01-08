import './navbar.scss';
import { motion } from 'framer-motion';
import SideBar from './sidebar/SideBar';
import LinkedinIcon from '../assets/linkedin.svg';
import FbIcon from '../assets/fb.svg';
import TikTokIcon from '../assets/tiktok.svg';
import EmailIcon from '../assets/email.svg';
import InstagramIcon from '../assets/instagram.svg';

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
          <a href=''>
            <img src={LinkedinIcon} alt='' />
          </a>
          <a href=''>
            <img src={FbIcon} alt='' />
          </a>
          <a href=''>
            <img src={EmailIcon} alt='' />
          </a>
          <a href=''>
            <img src={TikTokIcon} alt='' />
          </a>
          <a href=''>
            <img src={InstagramIcon} alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
