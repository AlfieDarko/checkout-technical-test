import React from "react";
import bgwave from "#assets/wave.svg";
import "./styles.css";

const DripSection = () => {
  return (
    <section className="drip-container">
      <img className="drip__image" src={bgwave} alt="" />
    </section>
  );
};

export default DripSection;
