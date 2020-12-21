import React from "react";
import "../App.css";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div>
      <h1 className="about-us">Quienes Somos?</h1>

      <Cards />
      <Footer />
    </div>
  );
}
