import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import VideoBuyerSection from "../components/VideoBuyerSection";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <VideoBuyerSection />
    </div>
  );
};

export default Home;
