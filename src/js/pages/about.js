import React, { Component } from "react";
import Timeline from "../../images/Graphics/Timeline.svg";
import Penrose from "../../images/Graphics/Penrose.svg";

class About extends Component {
  render() {
    return (
      <div className="about-container">
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
          <img className="penrose" src={Penrose} alt="Penrose" />
          <a
            className="twitter-timeline"
            data-width="800"
            data-height="500"
            data-theme="dark"
            href="https://twitter.com/WhittleGuyyy?ref_src=twsrc%5Etfw"
          >
            Tweets by WhittleGuyyy
          </a>{" "}
          async src="https://platform.twitter.com/widgets.js" charset="utf-8"
        </div>
      </div>
    );
  }
}

export default About;
