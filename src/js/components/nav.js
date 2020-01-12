import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Resume from "../../images/Whittle, Brandon - Resume.pdf";

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
            <NavLink className="home" id="non_mobile" to="./home">
              Home
            </NavLink>
            <NavLink className="about" id="non_mobile" to="./about">
              About
            </NavLink>
            <NavLink className="skills" id="non_mobile" to="./skills">
              Skills
            </NavLink>
            <NavLink className="projects" id="non_mobile" to="./projects">
              Projects
            </NavLink>
            <NavLink className="contact" id="non_mobile" to="./contact">
              Contact
            </NavLink>
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
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <i class="fa fa-dumpster-fire"></i>
            </a>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
