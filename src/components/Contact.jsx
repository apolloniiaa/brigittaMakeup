import './contact.scss';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Navbar from '../components/Navbar';

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

  return (
    <>
      {' '}
      <Navbar />
      <div className='contact-wrapper'>
        <div className='contact' initial='initial' whileInView='animate'>
          <div className='textContainer'>
            <h1>Keress Bizalommal! </h1>
            <div className='item'>
              <h2>Email</h2>
              <span>nemeth.brigittanora@gmail.com</span>
            </div>
            <div className='item'>
              <h2>Cím</h2>
              <span>Budapest, Magyarország</span>
            </div>
            <div className='item'>
              <h2>Telefonszám</h2>
              <span>+36303422482</span>
            </div>
          </div>
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
              <input
                type='email'
                required
                placeholder='Email cím'
                name='email'
              />
              <textarea rows={8} placeholder='Üzenet' name='message' />
              <button>Küldés</button>
              {error && (
                <div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Sajnálom, nem sikerült. Kérlek próbáld újra!
                </div>
              )}
              {success && (
                <div
                  className='message-text'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Köszönöm, hamarosan válaszolok! ⭐️
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
