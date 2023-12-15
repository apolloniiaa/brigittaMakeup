import './navbar.scss';
import { motion } from 'framer-motion';
import SideBar from './sidebar/SideBar';
import { Link, useLocation } from 'react-router-dom';

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
            <img
              src='https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png'
              alt=''
            />
          </a>
          <a href=''>
            <img
              src='https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png'
              alt=''
            />
          </a>
          <a href=''>
            <img
              src='https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png'
              alt=''
            />
          </a>
          <a href=''>
            <img
              src='https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png'
              alt=''
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
