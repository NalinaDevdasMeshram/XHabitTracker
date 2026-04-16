import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import CardSection from "../components/CardSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <CardSection />
    </div>
  );
};

export default Home;
