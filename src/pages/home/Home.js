import React from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar'
import Landing from '../../components/landing/Landing';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import Journey from '../../components/journey/Journey';
import Product from '../../components/product/Product';

function Home() {
  return <div className="home">
      <Navbar/>
      <Landing/>
      <About/>
      <Product/>
      <Journey/>
      <Contact/>
  </div>;
}

export default Home;
