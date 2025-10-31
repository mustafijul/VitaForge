import React from 'react';
import Banner from '../components/Home/Banner';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import Testimonials from '../components/Home/Testimonials';
import CallToAction from '../components/Home/CallToAction';
import Footer from '../components/Home/Footer';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Hero></Hero>
      <Features></Features>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  );
};

export default Home;