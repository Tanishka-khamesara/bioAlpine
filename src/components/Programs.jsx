import React from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa'; // Add these for action icons
import pr from "../assets/pr.png";
import pr2 from "../assets/pr2.png";
import pr3 from "../assets/pr3.png";
import pr4 from "../assets/pr4.png";
import pr5 from "../assets/pr5.png";
import pr6 from "../assets/pr6.png";
import pr7 from "../assets/pr7.png"; 
import pr8 from "../assets/pr8.png"; 
import pr9 from "../assets/pr9.png"; 

const products = [
  { img: pr, description: "Product 1", name: "Product 1" },
  { img: pr2, description: "Product 2", name: "Product 2" },
  { img: pr3, description: "Product 3", name: "Product 3" },
  { img: pr4, description: "Product 4", name: "Product 4" },
  { img: pr5, description: "Product 5", name: "Product 5" },
  { img: pr6, description: "Product 6", name: "Product 6" },
  { img: pr7, description: "Product 7", name: "Product 7" },
  { img: pr8, description: "Product 8", name: "Product 8" },
  { img: pr9, description: "Product 9", name: "Product 9" },
];

function Programs() {
  return (
    <div className="programs-container" id='courses'>
      <div className='courses-header'>
        <h1>Our Products</h1>
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
