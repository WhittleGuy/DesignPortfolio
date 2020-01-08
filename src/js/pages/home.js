import React, { Component } from "react";
import Sines from "../../images/Graphics/Sines.svg";
import Resume from "../../images/Whittle, Brandon - Resume.pdf";

class Home extends Component {
  render() {
    return (
      <div className="home-container main-window">
        <div>
          <h1>
            Hello!
            <br />
            I'm Brandon Whittle,
            <br />
            professional shitshow.
          </h1>
          <p className="subtitle">
            Graphic Designer / Audio Engineer / Media Producer
          </p>

          <div className="external-links">
            <a
              className="button"
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a className="button" href="#/contact">
              Contact Me
            </a>
          </div>
        </div>

        <img className="sines bottom-graphic" src={Sines} alt="Sines" />
      </div>
    );
  }
}

export default Home;
