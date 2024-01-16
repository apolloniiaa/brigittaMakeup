// RootLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Links from '../components/sidebar/Links';

import Hero from '../pages/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Services from '../components/Services';
import Works from '../components/Works';
import BlockQuote from '../components/BlockQuote';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

function RootLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      <BlockQuote />
      <About />
      <Services />
      <Works />
      <Portfolio />

      <Gallery />
      <Links />
      <Footer />
      <Outlet />
    </>
  );
}

export default RootLayout;
