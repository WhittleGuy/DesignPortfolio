import React, { Component } from "react";
import TwitterTag from "./twitter";
import Card from "./card";

class Client extends Component {
  render() {
    return (
      <>
        <div className="client">
          <div className="client-header">
            <h3 className="client-name">{this.props.client}</h3>
            {this.props.user.length > 0 ? (
              <TwitterTag user={this.props.user} />
            ) : null}
          </div>
          <div className="client-projects">
            {this.props.exhibits.map((exhibit, index) => (
              <Card source={exhibit} name={"client_" + index} />
            ))}
          </div>
          <div className="client-disclaimer">
            <p>{this.props.disclaimer}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Client;
