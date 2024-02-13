import React from "react";
import HeroSection from "../HeroSection";
import Trusted from "../Trusted";
import Delivery from "../Delivery";
import Footer from "../Footer";
import FeatureProducts from "../FeatureProducts";

const Home = () => {
  const data = {
    name: "Mayank Store",
  };

  return (
    <>
      <HeroSection myData={data} />;
      <FeatureProducts />
      <Delivery />
      <Trusted />
      <Footer />
    </>
  );
};
export default Home;
