import React, { Component } from "react";
import { Link } from "react-router-dom";

import Spirograph from "../../images/spirograph.svg";

class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <Link className="logo-link" to="./home">
            <img className="spirograph" src={Spirograph} alt="spirograph" />
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
              <i class="fas fa-folder fa-2x"></i>
            </Link>
            <Link className="contact" id="non_mobile" to="./contact">
              <i class="fas fa-address-card fa-2x"></i>
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
