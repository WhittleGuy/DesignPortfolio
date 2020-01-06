import React, { Component } from "react";

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
            <a className="button" href="https://www.google.com">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
