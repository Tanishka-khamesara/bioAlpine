import React from "react";
// import learning from "../assets/Learnings.jpg";
import BioAlpine from "../assets/BioAlpine.jpg";

function AboutLearning() {
  return (
    <>
      <div className="about-container" id="about">
        <div className="about-header">
          <span></span>
          <h2>What is BioAlpine® organic whey protein?</h2>
          <span></span>
        </div>
        <div>
          <div className="about-left">
            <img src={BioAlpine} alt="" />
          </div>
          <div className="about-right">
            <h3>Our Story</h3>
            <p>
              {" "}
              BioAlpine® organic whey protein is a premium whey concentrate with
              80% protein content, sourced from organic cow milk using
              cross-flow microfiltration (CFM). It contains key macro fractions
              like beta-lactoglobulin, alpha-lactalbumin, bovine serum albumin,
              and immunoglobulins, along with micro-fractions like lactoferrin
              and osteopontin. Rich in all 9 essential amino acids (EAA), it
              provides 23-25% BCAAs, making it a complete protein with a top
              PDCAAS score of 0.99-1.00. Ideal for athletes, bodybuilders, and
              anyone seeking high-quality nutrition.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutLearning;
