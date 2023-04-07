import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import Services from "../components/Services";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="bg-[#f7e4e4]">
      <Navbar />
      <HeroSection />
      <div>
        <Services />
        <Products />
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
