import React from 'react'
import learning from "../assets/Learnings.jpg"

function AboutLearning() {
    return (
        <>
            <div className='about-container' id='about'>
                <div className="about-header">
                    <span></span>
                    <h2>About VRM Learning and Development Center</h2>
                    <span></span>
                </div>
                <div>
                    <div className='about-left'>
                        <img src={learning} alt="" />
                    </div>
                    <div className='about-right'>
                        <h3>Our Story</h3>
                        <p> In honor of her late husband, Mrs. Subbulakshmi Varatharajan established the VRM Learning and Development Center. With a deep passion for leveraging cutting-edge technology, she aims to create forward-thinking educational experiences. Drawing on her 25 years of expertise in information technology, Subbulakshmi is committed to shaping the future of education.  </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutLearning;