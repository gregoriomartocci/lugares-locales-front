import React from "react";
import "../App.css";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

export default function Places() {
  return (
    <div>
      <>
        <h1 className="places">Lugares</h1>
        <Cards />
        <Footer />
      </>
    </div>
  );
}
