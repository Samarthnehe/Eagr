import React from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar'
import Landing from '../../components/landing/Landing';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';

function Home() {
  return <div className="home">
      <Navbar/>
      <Landing/>
      <About/>
      <Contact/>
  </div>;
}

export default Home;
