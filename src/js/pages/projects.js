import React, { Component } from "react";
import Project from "../components/project";
import Salty from "../../images/salty-example.jpg";
import Ps from "../../images/ps-example.jpg";
import Rmv from "../../images/RMV-example.jpg";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <Project source={Rmv} Name="30in30 Campaign" Company="Rank MI Vote" />
        <Project
          source={Ps}
          Name="Reference Website"
          Company="IT Media Services"
        />
        <Project source={Salty} Name="Stream Cards" Company="SaltyxB1tch" />
      </div>
    );
  }
}

export default Projects;
