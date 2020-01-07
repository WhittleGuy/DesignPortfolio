import React, { Component } from "react";
import Sines from "../../images/Sines.svg";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="greeting">
          <h1 className="heading">
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
            <a className="button" href="https://www.google.com">
              Resume
            </a>
            <a className="button" href="#/contact">
              Contact Me
            </a>
          </div>
        </div>

        <img className="sines" src={Sines} alt="Sines" />
      </div>
    );
  }
}

export default Home;
