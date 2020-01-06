import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="photo-container">
            <img src={this.props.source} alt={this.props.Name} />
          </div>
          <div className="info-container">
            <h1>{this.props.Company}</h1>
            <h3>{this.props.Name}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default Project;
