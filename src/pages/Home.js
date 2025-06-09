import React from "react";
import Navbar from "../components/common/Navbar";
import MainSlider from "../components/sliders/MainSlider";
import Categories from "../components/common/Categories";
import DiscountSlider from "../components/sliders/DiscountSlider";
import CompanyLogoSlider from "../components/sliders/CompanyLogoSlider";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <MainSlider />
      <Categories />
      <DiscountSlider />
      <CompanyLogoSlider />
      <Footer />
    </>
  );
};

export default Home;
