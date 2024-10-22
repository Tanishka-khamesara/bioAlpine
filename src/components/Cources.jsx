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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFZM_cKihfTCYoPUqT6TI8m3-7SQMQE-puw&s"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmR3l9TlDC2bK5h-0Iplz3SK55Dw-FhBFmYA&s"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvxvV450mt6W4n4ZOKt9h9pcnhI2ppjeO-iw&s"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSDpLusv6MTRwdrrl9aOcF90xMnJFGbFh8SV6smKb3ZeDl5NUxhabo7xa1WqmGxQZcAtg&usqp=CAU"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGkC-fSX68VK8rqMQLXRjUu0vZd2wwGkHQaA&s"
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
                src="https://www.aluminati.net/wp-content/uploads/2023/05/Screenshot-2023-05-17-091542-e1684311559909.jpg"
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
