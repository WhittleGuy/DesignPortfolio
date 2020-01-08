import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <>
        <div className="card">
          <img src={this.props.source} alt={this.props.name} />
        </div>
      </>
    );
  }
}

export default Card;
