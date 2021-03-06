import React from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar'
import Landing from '../../components/landing/Landing';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import Journey from '../../components/journey/Journey';
import Product from '../../components/product/Product';
import Footer from '../../components/footer/Footer';
import Talk from '../../components/talk/Talk';
import Values from '../../components/values/Values';
import Stats from '../../components/stats/Stats';

function Home() {
  return <div className="home">
      <Navbar/>
      <Landing/>
      <Stats/>
      <About/>
      <Values/>
      <Product/>
      <Journey/>
      <Talk/>
      <Footer/>
  </div>;
}

export default Home;
