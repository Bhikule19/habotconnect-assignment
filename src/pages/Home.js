import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import VideoBuyerSection from "../components/VideoBuyerSection";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <VideoBuyerSection />
      <CTA />
      <Offer />
      <Footer />
    </div>
  );
};

export default Home;
