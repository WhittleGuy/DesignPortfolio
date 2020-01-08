import React, { Component } from "react";
import Project from "../components/project";

import RMVLogo from "../../images/Projects/100ppi/RMV/RMVLogo.png";
import Graphremake from "../../images/Projects/100ppi/RMV/graphremake.png";
import RMVFlyer from "../../images/Projects/100ppi/RMV/RMVFlyer.png";
import RMVPostcard from "../../images/Projects/100ppi/RMV/RMVPostcard.png";
import RMVwordmark from "../../images/Projects/100ppi/RMV/RMVwordmark.png";
import Twitter1 from "../../images/Projects/100ppi/RMV/Twitter1.png";
import Twitter2 from "../../images/Projects/100ppi/RMV/Twitter2.png";
import Twitter3 from "../../images/Projects/100ppi/RMV/Twitter3.png";

import SaltySS from "../../images/Projects/100ppi/Salty/saltyss.png";
import SaltyBRB from "../../images/Projects/100ppi/Salty/saltybrb.png";
import SaltyEndCard from "../../images/Projects/100ppi/Salty/saltyendcard.png";
import SaltyHeader from "../../images/Projects/100ppi/Salty/saltyheader.png";
import SaltyTFW from "../../images/Projects/100ppi/Salty/saltytfw.png";
import SaltyYT from "../../images/Projects/100ppi/Salty/saltyyt.png";

import Anbu from "../../images/Projects/100ppi/Misc Twitch/Anbu.png";
import Nuck from "../../images/Projects/100ppi/Misc Twitch/Nuck_Logo_New.png";
import Cam from "../../images/Projects/100ppi/Misc Twitch/twitch.png";

import Crowder from "../../images/Projects/100ppi/Personal/crowder.png";
import Eye from "../../images/Projects/100ppi/Personal/eye.png";
import Moon from "../../images/Projects/100ppi/Personal/Moon.png";
import Record from "../../images/Projects/100ppi/Personal/Record.png";

import Spirograph from "../../images/spirograph.svg";
import Logo from "../../images/BW_Logo.svg";
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
                <Project source={RMVLogo} />
                <Project source={RMVPostcard} />
                <Project source={RMVwordmark} />
                <Project source={Twitter1} />
                <Project source={Twitter2} />
                <Project source={Twitter3} />
                <Project source={Graphremake} />
                <Project source={RMVFlyer} />
              </div>
            </div>

            <div className="project">
              <h1>SaltyxB1tch</h1>
              <div className="tiles">
                <Project source={SaltySS} />
                <Project source={SaltyBRB} />
                <Project source={SaltyTFW} />
                <Project source={SaltyHeader} />
                <Project source={SaltyYT} />
                <Project source={SaltyEndCard} />
              </div>
            </div>

            <div className="project">
              <h1>Miscellaneous Twitch</h1>
              <div className="tiles">
                <Project source={Anbu} />
                <Project source={Nuck} />
                <Project source={Cam} />
              </div>
            </div>

            <div className="project">
              <h1>Personal</h1>
              <div className="tiles">
                <Project source={Crowder} />
                <Project source={Moon} />
                <Project source={Eye} />
                <Project source={Record} />
                <Project source={Logo} />
                <Project source={Spirograph} />
                <Project source={Penrose} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
