import React from "react";
// import learning from "../assets/Learnings.jpg";
import BioAlpine from "../assets/BioAlpine.jpg"

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
              BioAlpine® organic whey protein is a very high-quality whey
              protein concentrate with 80% protein content extracted from
              organic cow milk through cross-flow microfiltration (CFM). It has
              four macro fractions known as beta-lactoglobulin (β-LG),
              alpha-lactalbumin (α-LA), bovine serum albumin (BSA), and
              immunoglobulins (IGs), and micro-fractions known as lactoferrin,
              protease peptone 3 (PP3), osteopontin, glycomacropeptide (GMP),
              lactoperoxidase, and lysozyme. Each macro and micro fraction has
              its biological significance in human health. It is a valuable
              source of all the 9 essential (EAA) with 23-25% of branched-chain
              amino acids (BCAAs) and 11 non-essential amino acids making it a
              complete protein with a high Protein Digestibility Corrected Amino
              Acid Score (PDCAAS) of 0.99-1.00 (Highest among all the proteins).
              This makes BioAlpine’s Organic whey protein an excellent choice
              for athletes, bodybuilders, and people in all walks of life.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutLearning;
