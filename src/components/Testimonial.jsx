// import React, { useState } from 'react';
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// // import './Testimonial.css';

// function Testimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       image: 'https://i.ytimg.com/vi/KBo__6zXU6k/maxresdefault.jpg',
//       name: 'John Doe',
//       title: 'CEO, Company ABC',
//       text: 'This service was amazing! It exceeded all my expectations and I highly recommend it to anyone looking for quality work.'
//     },
//     {
//       id: 2,
//       image: 'https://endingscene.com/wp-content/uploads/2022/09/Airline-ASL-Database-Transaction-Explainer-Promotional-Video-Marketing-Motion-Graphics-Animated-Promo-Video-EndingSecne-Animation-Studio-Bangladeh.jpg',
//       name: 'Jane Smith',
//       title: 'CTO, Company XYZ',
//       text: 'The team was professional and delivered exceptional results. I am very pleased with the outcome and would use them again.'
//     },
//     {
//       id: 3,
//       image: 'https://media.licdn.com/dms/image/v2/C5612AQGf5a898pJkMA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1563437210254?e=2147483647&v=beta&t=SJ9yijVHsdnXVaMWYBzeisoCBcoaVodFXqG1nflJbuY',
//       name: 'Alice Brown',
//       title: 'Product Manager, Startup 123',
//       text: 'A wonderful experience from start to finish. The service provided was top-notch and the attention to detail was impressive.'
//     },
//     {
//       id: 4,
//       image: 'https://endingscene.com/wp-content/uploads/2022/09/Airline-ASL-Database-Transaction-Explainer-Promotional-Video-Marketing-Motion-Graphics-Animated-Promo-Video-EndingSecne-Animation-Studio-Bangladeh.jpg',
//       name: 'Michael Lee',
//       title: 'Lead Developer, Tech Solutions',
//       text: 'Great collaboration and high-quality results. I would recommend them to anyone looking for skilled professionals.'
//     },
//     {
//       id: 5,
//       image: 'https://media.licdn.com/dms/image/v2/C5612AQGf5a898pJkMA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1563437210254?e=2147483647&v=beta&t=SJ9yijVHsdnXVaMWYBzeisoCBcoaVodFXqG1nflJbuY',
//       name: 'Emily White',
//       title: 'Designer, Creative Agency',
//       text: 'A truly creative and inspiring team. The final product was better than I could have imagined!'
//     },
//     {
//       id: 6,
//       image: 'https://i.ytimg.com/vi/KBo__6zXU6k/maxresdefault.jpg',
//       name: 'David Johnson',
//       title: 'Marketing Head, Global Corp',
//       text: 'Professional, reliable, and excellent at what they do. I couldn’t be happier with the service provided.'
//     },
//     {
//       id: 7,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxc1HdYi9Xt4AlEwqF1tOjPbCzSHaUjeNjRMQRLLzr7TPYBiUeWC__-cBSbUYUuwyloZo&usqp=CAU',
//       name: 'Michael Lee',
//       title: 'Lead Developer, Tech Solutions',
//       text: 'Great collaboration and high-quality results. I would recommend them to anyone looking for skilled professionals.'
//     },
//     {
//       id: 8,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX467HB9BIhJw8FXr-_ypZ0LNR25htqYKAYc9E_IDYp25W6i34AHzzC9erJklw524jC8I&usqp=CAU',
//       name: 'Emily White',
//       title: 'Designer, Creative Agency',
//       text: 'A truly creative and inspiring team. The final product was better than I could have imagined!'
//     },
//     {
//       id: 9,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDigRaF0a7SdQIoy8T9mVehiCxiahrptUMbpC_ElqcpdY9YwUBwWQf3_tcG00WaxOdNgQ&usqp=CAU',
//       name: 'David Johnson',
//       title: 'Marketing Head, Global Corp',
//       text: 'Professional, reliable, and excellent at what they do. I couldn’t be happier with the service provided.'
//     },
//   ];

//   const handleNext = () => {
//     if (currentIndex + 3 < testimonials.length) {
//       setCurrentIndex(currentIndex + 3);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex - 3 >= 0) {
//       setCurrentIndex(currentIndex - 3);
//     }
//   };

//   return (
//     <>
//       <div className='testimonial-container'>
//         <div className='testimonial-header'>
//           <h1>Placement and Training activities for colleges across India</h1>
//         </div>
//         <div className="all-testimonials">
//           <button onClick={handlePrev} disabled={currentIndex === 0} className="nav-button"><ArrowCircleLeftIcon /></button>
//           <div className="testimonial-row">
//             {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
//               <div key={testimonial.id} className="testimonial-slide">
//                 <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
//                 <div className="testimonial-content">
//                   <h3 className="testimonial-name">{testimonial.name}</h3>
//                   <p className="testimonial-title">{testimonial.title}</p>
//                   <p className="testimonial-text">"{testimonial.text}"</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="testimonial-navigation">

//             <button onClick={handleNext} disabled={currentIndex + 3 >= testimonials.length} className="nav-button"><ArrowCircleRightIcon /></button>
//           </div>
//         </div>

//       </div>

//     </>

//   );
// }

// export default Testimonial;

import React, { useState, useEffect, useRef } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalTime = 3000; // 3 seconds for each slide
  const totalSlides = 6; // Total number of unique testimonials
  const testimonialContainerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "How do you identify the organic whey protein?",
      text: `Our Organic whey proteins are identified by the green EU Organic label. For further information on the same, please visit the official website of the European Commission – Agriculture and Rural Development. You can also find our company’s organic certificate on the website under the ‘Quality’ page.`,
    },
    {
      id: 2,

      name: "Why GMOs are bad?",

      text: `GMOs are responsible for Antibiotic Resistance (AR). The antibacterial resistance genes of the GMOs are resistant to antibiotics which could pass on to humans making them antibiotic-resistant and thus becoming more prone to infections. Also, if these genes are taken up by the disease-causing microbes in the human intestine, cause diseases that cannot be treated with existing antibiotics. GMOs have the potential to trigger allergic reactions as they contain genes from an allergen. Glyphosate is a major GMO that impairs the cytochrome P450 enzymes and as a result, causes celiac disease. GMOs have also given rise to pesticide-resistant superweeds which require even more toxic pesticides to kill and even then, they survive the new pesticides and pass their resistant genes to the next generation. `,
    },
    {
      id: 3,

      name: "What makes Organic different in terms of quality?",
      text: `Low SCC: Somatic cell count (SCC) is the most significant parameter of cow health. SCC surpassing 4,00,000 cells per ml signifies gland inflammation and thus the low quality of milk and a high chance of infections. Organic milk typically has an SCC of 1,00,000 cells per ml or even less.

Better nutritional profile: Organic milk contains high levels of retinol and beta-carotene acting as a precursor for vitamin A. It also has a higher concentration of vitamin E essential to prevent oxidative damage in cells and conjugated linoleic acid (CLA), a heart-healthy fatty acid for cardiovascular health. Additionally, spending more time at pastures induces the synthesis of vitamin D3 from 7-dehydrosterol by UV rays which is essential for calcium and phosphorus metabolism for teeth and bone mineralization.

No Heavy metals: The heavy metals (lead, chromium, mercury, cadmium) that cause toxic effects even at lower concentrations are absent in organic milk due to the prohibited use of fertilizers and antibiotics.

Better taste profile: Organic protein has a better, unique, and clean taste profile due to the green agricultural practices followed during production and processing. It has a creamier texture and greater ‘grass’ flavour notes.`,
    },
    {
      id: 4,
      name: "What makes Organic whey protein expensive as compared to the conventional proteins?",
      text: "The expensive nature of Organic whey proteins is due to the high production and operational costs incurred for feed, labor, animal welfare, and maintenance because it must adhere to strict organic standards. Because organic milk farming prohibits the use of artificial growth hormones and antibiotics, the milk yield is low as compared to conventional milk farming, leading to high costs. While emphasizing environmentally sustainable practices for protecting biodiversity in organic milk farming, more resources in terms of time and money are required. The companies that produce organic milk spend a lot of money on organic certification fees, inspections, and compliance with regulations. Since the supply is limited and consumer demand is increasing due to the increased awareness about organic products and health, this hypes up the organic whey protein prices.",
    },
    {
      id: 5,
      name: "What is SCC or Somatic cell count and how it affects the milk quality?",
      text: `Somatic cell count is the ultimate milk quality parameter. Somatic cells are milk-secreting epithelial cells that have been shed from the lining of the gland and white blood cells that have entered the mammary gland in response to injury or infection. SCC consists of 75% leucocytes (neutrophils, macrophages, erythrocytes) and 25% epithelial cells.

For healthy udder, SCC is less than 1 Lakh. More than that, it indicates infection. High infection and thus SCC of milk increases the risk of spread of diseases such as tuberculosis, sore throat, Q-fever, brucellosis, and leptospirosis. The endotoxins produced by pathogenic bacteria can cause poisoning cases in humans when transferred through milk. These also produce a variety of inflammatory mediators such as cytokines and chemokine.

Organic milk from the European Union, especially the Alpine region (Germany, Austria, and Switzerland) has a low SCC (1,50,000 to 4,00,000) as compared to milk from other countries where the SCC levels are 7,50,000 or more.`,
    },
    {
      id: 6,
      name: "What are artificial growth hormones?",
      text: "rBGH and rBST are synthetic (man-made) hormones that are marketed to increase milk production in cows. These hormones stimulate the cow’s milk production by increasing levels of IGF-1. Due to the increased IGF-1 levels in milk, the following health concerns arise such as acne, endocrine disorders (PCOS/PCOD), obesity, cancer, cardiovascular diseases, neurodegenerative diseases, allergies, and autoimmune disorders.",
    },
    {
      id: 7,
      name: "Does BioAlpine’s Organic whey protein contain additives?",
      text: `BioAlpine’s Organic whey protein contains 100% organic ingredients with the highest quality parameters and does not contain anything that is not needed by your body. Unlike other whey proteins in the market, we stand apart for not using any artificial or even natural colors, flavours, sweeteners, thickeners, anti-caking agents, acidity regulators, emulsifiers, and digestive enzymes.`,
    },
    {
      id: 8,
      name: "Does BioAlpine’s Organic whey protein contain allergens?",
      text: `Since whey proteins are made from cow’s milk, they will come under the category of allergens. The major allergens present in all the variants of BioAlpine’s Organic whey protein are milk and lactose. In addition to this, our Italian Hazelnut Chocolate contains hazelnut powder which also comes under the category of allergen. The three major allergens – milk, lactose, and nuts are specified on the label under the ‘allergen statement’ heading followed by the word ‘contains’.`,
    },
    {
      id: 9,
      name: "Does BioAlpine’s Organic whey protein contain added sugars?",
      text: `BioAlpine’s Organic whey protein has a maximum of 11 grams of total carbohydrates which 100% constitutes the milk sugar, lactose which is naturally present in milk. So, it contains zero added sugars in the form of sucrose or cane sugar.`,
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials]; // Duplicate the testimonials array

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleTransitionEnd = () => {
    // If we've reached the end of the first duplicate, reset without transition
    if (currentIndex >= testimonials.length) {
      testimonialContainerRef.current.style.transition = "none";
      setCurrentIndex(0); // Reset to original slides
      setTimeout(() => {
        testimonialContainerRef.current.style.transition =
          "transform 0.5s ease-in-out"; // Restore the transition
      }, 0);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, intervalTime);

    return () => clearInterval(slideInterval); // Clean up interval
  }, []);

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h1>FAQ'S</h1>
      </div>
      <div className="all-testimonials">
        <div
          ref={testimonialContainerRef}
          className="testimonial-row"
          style={{
            transform: `translateX(-${
              (currentIndex % testimonials.length) * (100 / 3)
            }%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <div className="testimonial-content">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
