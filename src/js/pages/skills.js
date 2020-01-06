import React, { Component } from "react";
import Spirograph from "../../images/spirograph.svg";

class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <div className="left">
          <div className="skills-text">
            <h1>Skills</h1>
            <p>
              I enjoy pursuing various hobbies, which means I have aquired a
              large set of skills. I am an expert at exactly zero of them, but
              can certainly get the job done. <br />
              <br />I have made multiple websites for both personal and
              professional use, created technical documentation detailing the
              processes of IT Media Services at university, and created graphics
              for personal projects, as well as for influencers on the web.{" "}
              <br />
              <br />
              My main strength is having the ability and desire to learn. No
              matter the task, I love sitting down, thinking through, and
              realizing the process to accomplish a goal.
            </p>
            <h3>Hard Skills</h3>
            <ul>
              <li>
                <i className="fab fa-adobe" /> Adobe Illustrator
              </li>
              <li>
                <i className="fab fa-adobe" /> Adobe Photoshop
              </li>
              <li>
                <i className="fab fa-react" /> React
              </li>
              <li>
                <i className="fab fa-html5" /> HTML5
              </li>
              <li>
                <i className="fab fa-sass" /> CSS3 / SASS
              </li>
              <li>
                <i className="fab fa-google" /> Google Docs / Drive
              </li>
            </ul>
            <h3>Soft Skills</h3>
            <ul>
              <li>
                <i className="fa fa-users" /> Team Player
              </li>
              <li>
                <i className="far fa-comment" /> Public Speaking
              </li>
              <li>
                <i className="far fa-file-alt" /> Technical Documentation
              </li>
              <li>
                <i className="fa fa-feather-alt" /> Adaptability
              </li>
              <li>
                <i className="far fa-lightbulb" /> Critical Thinking
              </li>
              <li>
                <i className="fa fa-graduation-cap" /> Willingness to Learn
              </li>
              <li>
                <i className="fa fa-user-check" /> Customer Service
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <img src={Spirograph} alt="Spirograph"/>
        </div>
      </div>
    );
  }
}

export default Skills;
