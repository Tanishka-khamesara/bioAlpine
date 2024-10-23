import React from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa'; // Add these for action icons
import pr from "../assets/Pr.png";
import pr2 from "../assets/pr2.png";
import pr3 from "../assets/pr3.png";
import pr4 from "../assets/pr4.png";
import pr5 from "../assets/pr5.png";
import pr6 from "../assets/pr6.png";
import pr7 from "../assets/pr7.png"; 
import pr8 from "../assets/pr8.png"; 
import pr9 from "../assets/pr9.png"; 

const products = [
  { img: pr, description: "Blueberry", name: "Blueberry" },
  { img: pr2, description: "vanilla", name: "Vanilla" },
  { img: pr3, description: "Cafe Mocha", name: "Cafe Mocha" },
  { img: pr4, description: "Expresso Roast", name: "Expresso Roast" },
  { img: pr5, description: "Mango", name: "Mango" },
  { img: pr6, description: "Strawberry", name: "Strawberry" },
  { img: pr7, description: "Thai Coconut", name: "Thai Coconut" },
  { img: pr8, description: "Unflavoured", name: "Unflavoured" },
  { img: pr9, description: "Alpine Milk Chocolate", name: "Alpine Milk Chocolate" },
];

function Programs() {
  return (
    <div className="programs-container" id='courses'>
      <div className='courses-header'>
        <h1>Our Flavours of Proteins</h1>
      </div>
      <div className="programs-main">
        <div className="image-gallery">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.img} alt={`product-${index + 1}`} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="icon-actions">
                  <button className="action-button"><FaCartPlus /></button>
                  <button className="action-button"><FaHeart /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;
