import React, { Component } from "react";
import Project from "../components/project";

import Artboard1 from "../../images/Projects/100ppi/Artboard1.png";
import Artboard2 from "../../images/Projects/100ppi/Artboard2.png";
import Artboard3 from "../../images/Projects/100ppi/Artboard3.png";
import Artboard4 from "../../images/Projects/100ppi/Artboard4.png";
import Artboard5 from "../../images/Projects/100ppi/Artboard5.png";
import Artboard6 from "../../images/Projects/100ppi/Artboard6.png";
import Artboard7 from "../../images/Projects/100ppi/Artboard7.png";
import Artboard8 from "../../images/Projects/100ppi/Artboard8.png";
import Artboard9 from "../../images/Projects/100ppi/Artboard9.png";
import Artboard10 from "../../images/Projects/100ppi/Artboard10.png";
import Artboard11 from "../../images/Projects/100ppi/Artboard11.png";
import Artboard12 from "../../images/Projects/100ppi/Artboard12.png";
import Artboard13 from "../../images/Projects/100ppi/Artboard13.png";
import Artboard14 from "../../images/Projects/100ppi/Artboard14.png";
import Artboard15 from "../../images/Projects/100ppi/Artboard15.png";
import Spirograph from "../../images/spirograph.svg";
import Logo from "../../images/BW_Logo.svg";
import Sines from "../../images/Sines.svg";
import Penrose from "../../images/Penrose.svg";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <div className="left">
          <div className="project-text">
            <h1>Projects</h1>
            <p>
              As my industry sectors have varied, so have my hobbies. This means
              that my projects are all a little different. While some are more
              difficult or exciting than others, all of them have been a joy to
              work on.
              <br />
              <br />
              From branding, marketing, and business documentation to art and
              photography for their own sake, I have played many roles. I hope
              you enjoy some of my efforts.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="project-panels">
            <div className="project">
              <h1>Rank MI Vote</h1>
              <div className="tiles">
                <Project source={Artboard8} />
                <Project source={Artboard4} />
                <Project source={Artboard3} />
                <Project source={Artboard5} />
                <Project source={Artboard10} />
                <Project source={Artboard9} />
                <Project source={Artboard1} />
                <Project source={Artboard2} />
              </div>
            </div>
            <div className="project">
              <h1>SaltyxB1tch</h1>
              <div className="tiles">
                <Project source={Artboard13} />
                <Project source={Artboard14} />
                <Project source={Artboard15} />
                <Project source={Artboard12} />
              </div>
            </div>
            <div className="project">
              <h1>Personal</h1>
              <div className="tiles">
                <Project source={Artboard6} />
                <Project source={Artboard7} />
                <Project source={Artboard11} />
                <Project source={Spirograph} />
                <Project source={Logo} />
                <Project source={Penrose} />
                <Project source={Sines} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
