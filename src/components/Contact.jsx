import './contact.scss';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <motion.div
        className='contact'
        variants={variants}
        initial='initial'
        whileInView='animate'
      >
        <motion.div className='textContainer' variants={variants}>
          <motion.h1>Dolgozzunk együtt! </motion.h1>
          <motion.div className='item' variants={variants}>
            <h2>Email</h2>
            <span>nemeth.brigittanora@gmail.com</span>
          </motion.div>
          <motion.div className='item' variants={variants}>
            <h2>Cím</h2>
            <span>Budapest, Magyarország</span>
          </motion.div>
          <motion.div className='item' variants={variants}>
            <h2>Telefonszám</h2>
            <span>06304654677</span>
          </motion.div>
        </motion.div>
        <div className='formContainer'>
          <form action=''>
            <input type='text' required placeholder='Keresztnév' />
            <input type='text' required placeholder='Vezetéknév' />
            <input type rows={8} placeholder='Üzenet' />
            <button>Küldés</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
export default Contact;
