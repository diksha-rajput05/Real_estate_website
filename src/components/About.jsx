import React from 'react';
import aboutimage from '../images/about.png'

function About() {
    return(
      <div className = 'about'>
          <div className = 'about-model'>
          <img src={aboutimage} alt = 'about image'/></div>
          <div className = 'about-text'>
            <h2>We are the best <br/>Real Estate Company</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asperiores, odit dolore consequatur atque nemo, magni est, veritatis dolorem quo cum praesentium? Incidunt, accusantium voluptate.
            </p>
            <button>View More Details</button>
          </div>
      </div>

    )
}

export default About;