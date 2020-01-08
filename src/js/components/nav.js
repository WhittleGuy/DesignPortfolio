import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/BW_Logo.svg";

class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <Link className="logo-link" to="./home">
            <img className="logo" src={Logo} alt="logo" />
          </Link>

          <div className="nav-links">
            <Link className="home" id="non_mobile" to="./home">
              <i class="fas fa-home fa-2x"></i>
            </Link>
            <Link className="about" id="non_mobile" to="./about">
              <i class="fas fa-user fa-2x"></i>
            </Link>
            <Link className="skills" id="non_mobile" to="./skills">
              <i class="fas fa-cog fa-2x"></i>
            </Link>
            <Link className="projects" id="non_mobile" to="./projects">
              <i class="fas fa-palette fa-2x"></i>
            </Link>
            <Link className="contact" id="non_mobile" to="./contact">
              <i class="fas fa-address-card fa-2x"></i>
            </Link>
          </div>

          <div className="outside-links">
            <a
              href="https://github.com/WhittleGuy"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.twitter.com/whittleguyyy"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;