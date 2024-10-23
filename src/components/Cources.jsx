import React from "react";
// import './Courses.css'; // Assuming you're using an external CSS file

function Courses() {
  return (
    <>
      <div className="cources-container">
        <div className="course-main">
          <div className="courses-header">
            <h1>What does it mean to be Organic?</h1>
          </div>

          <div className="courses-details">
            <div className="course-1">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.A6G3gha-Ur0jKcLhMQ-wEQHaDr&pid=Api&P=0&h=180"
                alt=""
              />
              <h3>Non-GMO feed</h3>
              <p>
                The cows are fed 100% organic, non-GMO feed, with at least 60%
                roughage, including hay in winter and green forage in summer.
                They graze freely on pastures, primarily low and tall grasses,
                and legumes.
              </p>
            </div>
            <div className="course-2">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.5xOX4L1Hc2loeHH2M44JVQHaE7&pid=Api&P=0&h=180"
                alt=""
              />
              <h3>Free-Range</h3>
              <p>
                Cows are pasture-fed for over 180 days with access to outdoor
                spaces, allowing them to roam freely and engage in natural
                behaviors, instead of being confined.
              </p>
            </div>
            <div className="course-3">
              <img
                src="https://media.istockphoto.com/id/1477219382/vector/no-added-hormones-label-hormone-free-icon-natural-organic-certificated-product-sign-healthy.jpg?s=1024x1024&w=is&k=20&c=wEilJkf2zi89RsSDHPGV3sLFS4rtNd2_RrWQWis2ZA4="
                alt=""
              />
              <h3>No Growth Hormones</h3>
              <p>
                It prohibits the use of synthetic medications, including
                hormones like rBGH and rBST, as well as excessive antibiotics
                and steroids for treating animals.
              </p>
            </div>
            <div className="course-4">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.ra_gilKZwLLUnvQubxQj7QAAAA&pid=Api&P=0&h=180"
                alt=""
              />
              <h3>Animal welfare</h3>
              <p>
                Organic cows spend at least 120 days grazing on pasture and,
                when indoors, have clean bedding, proper temperatures, and
                well-ventilated air, reducing stress and improving milk quality.
              </p>
            </div>
            <div>
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.JlZDcrGcWd3bwTtF4VT33AHaEs&pid=Api&P=0&h=180"
                alt=""
              />
              <h3>Ecological</h3>
              <p>
                Organic pasture-based systems produce lower greenhouse gas
                emissions, including methane and carbon dioxide
              </p>
            </div>
            <div>
              <img
                src="https://health2016.globalchange.gov/sites/default/files/styles/large_figure/public/figure/f1-cropped_18.png?itok=C1DzSHeF"
                alt=""
              />
              <h3>Sustainable</h3>
              <p>
                Organic milk farming limits the number of cows, using fewer
                land, water, and food resources, resulting in a lower carbon
                footprint and making organic protein more sustainable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
