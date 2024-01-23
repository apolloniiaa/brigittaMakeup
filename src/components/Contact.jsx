import './contact.scss';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const variants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Sending email...');

    emailjs
      .sendForm(
        'service_k0bdpki',
        'template_s4h5kjb',
        form.current,
        'SzcUArt8I-0R3yra7'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result);
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.error('Error sending email:', error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const resetForm = () => {
    // Reset form fields
    form.current.reset();
    // Clear success and error messages after a delay
    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 3000);
  };

  return (
    <div className='contact-wrapper'>
      <motion.div
        className='contact'
        variants={variants}
        initial='initial'
        whileInView='animate'
      >
        <motion.div className='textContainer' variants={variants}>
          <motion.h1>Keress Bizalommal! </motion.h1>
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
            <span>+36303422482</span>
          </motion.div>
        </motion.div>
        <div className='formContainer'>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type='text'
              required
              placeholder='Keresztnév'
              name='firstName'
            />
            <input
              type='text'
              required
              placeholder='Vezetéknév'
              name='lastName'
            />
            <input type='email' required placeholder='Email cím' name='email' />
            <textarea rows={8} placeholder='Üzenet' name='message' />
            <button>Küldés</button>
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Sajnálom, nem sikerült. Kérlek próbáld újra!
              </motion.div>
            )}
            {success && (
              <motion.div
                className='message-text'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Köszönöm, hamarosan válaszolok! ⭐️
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
