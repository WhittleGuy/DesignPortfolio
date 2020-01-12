import React, { Component } from "react";
import Client from "../components/client";

//!RMV ASSETS
import RMVLogo from "../../images/Projects/RMV/RMVLogo.png";
import GraphRemake from "../../images/Projects/RMV/graphremake.png";
import RMVFlyer from "../../images/Projects/RMV/RMVFlyer.png";
import RMVPostcard from "../../images/Projects/RMV/RMVPostcard.png";
import RMVWordmark from "../../images/Projects/RMV/RMVwordmark.png";
import Twitter1 from "../../images/Projects/RMV/Twitter1.png";
import Twitter2 from "../../images/Projects/RMV/Twitter2.png";
import Twitter3 from "../../images/Projects/RMV/Twitter3.png";

//! ITMS ASSETS
import Home from "../../images/Projects/ITMS/home.JPG";
import Staff from "../../images/Projects/ITMS/staff.JPG";
import Rooms from "../../images/Projects/ITMS/rooms.JPG";

//! SALTY ASSETS
import SaltySS from "../../images/Projects/Salty/saltyss.png";
import SaltyBRB from "../../images/Projects/Salty/saltybrb.png";
import SaltyEndCard from "../../images/Projects/Salty/saltyendcard.png";
import SaltyHeader from "../../images/Projects/Salty/saltyheader.png";
import SaltyTFW from "../../images/Projects/Salty/saltytfw.png";
import SaltyYT from "../../images/Projects/Salty/saltyyt.png";

//! MISC TWITCH ASSETS
import Anbu from "../../images/Projects/Misc Twitch/Anbu.png";
import Nuck from "../../images/Projects/Misc Twitch/Nuck_Logo_New.png";
import Cam from "../../images/Projects/Misc Twitch/twitch.png";

//! PERSONAL ASSETS
import Crowder from "../../images/Projects/Personal/crowder.png";
import Eye from "../../images/Projects/Personal/eye.png";
import Moon from "../../images/Projects/Personal/Moon.png";
import Record from "../../images/Projects/Personal/Record.png";
import Spirograph from "../../images/Graphics/spirograph.svg";
import Logo from "../../images/BW_Logo.svg";
import Penrose from "../../images/Graphics/Penrose.svg";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container main-window">
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
            <Client
              client="Rank MI Vote"
              user="RankMIVote"
              exhibits={[
                RMVLogo,
                RMVPostcard,
                RMVWordmark,
                Twitter1,
                Twitter2,
                Twitter3,
                GraphRemake,
                RMVFlyer
              ]}
              disclaimer=""
            />

            <Client
              client="ITMS"
              user=""
              exhibits={[Home, Staff, Rooms]}
              disclaimer=""
            />

            <Client
              client="SaltyxB1tch"
              user="SaltyxBish"
              exhibits={[
                SaltySS,
                SaltyBRB,
                SaltyEndCard,
                SaltyHeader,
                SaltyTFW,
                SaltyYT
              ]}
              disclaimer="DISCLAIMER: Depictions of Salty, Lily, and Kermit were created by @porkchop_xoxo."
            />
            <Client
              client="Miscellaneous Twitch"
              user=""
              exhibits={[Anbu, Nuck, Cam]}
              disclaimer=""
            />
            <Client
              client="Personal"
              user="WhittleGuyyy"
              exhibits={[Crowder, Moon, Eye, Penrose, Logo, Spirograph, Record]}
              disclaimer=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
