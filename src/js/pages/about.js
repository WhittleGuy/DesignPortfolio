import React, { Component } from "react";
import Timeline from "../../images/Graphics/Timeline.png";
import Penrose from "../../images/Graphics/Penrose.svg";

class About extends Component {
  render() {
    return (
      <div className="about-container main-window">
        <div className="left">
          <div className="about-text">
            <h1>About</h1>
            <p>
              Jack of all trades. Freelance graphic designer for online
              personalities, political movements, etc.
              <br />
              <br />
              An organized mess who loves solving problems, learning new
              material, and teaching others. Supporter of the environment,
              plant-based diets, animals, music, and sci-fi novels.
              <br />
              <br />
              Interested in entry-level graphic design, live events, and working
              with ambitious people.
            </p>
          </div>
          <img className="timeline" src={Timeline} alt="timeline" />
        </div>
        <div className="right">
          <img className="penrose half-graphic" src={Penrose} alt="Penrose" />
        </div>
      </div>
    );
  }
}

export default About;
