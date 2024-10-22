import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import huel from "../assets/huel.jpg";
function Hero() {
  return (
    <>
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${huel})` }}
      >
        <div className="hero-left">
          <h3>What does BioAlpine® stand for?</h3>
          <p>
            BIO means organic, and ALPINE denotes our whey protein sourced from
            the pristine Alpine region of Germany and Austria. We provide pure,
            organic whey protein concentrate from an area with the cleanest air,
            water, and soil, where every cow has a name.
          </p>
          {/* <h3>India's best technical school <br /> Discover, Learn & Grow with our resources</h3>
          <p>
            VMR Foundation provides the best technical and theory classes by providing the best mentroship sessions with Industry exprerts
          </p> */}
          <button>Learn More</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
