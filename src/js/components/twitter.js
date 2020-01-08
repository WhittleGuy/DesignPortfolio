import React, { Component } from "react";

class TwitterTag extends Component {
  render() {
    return (
      <>
        <div className="twitter-container">
          <a
            className="twitter"
            href={"https://twitter.com/" + this.props.user}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </>
    );
  }
}

export default TwitterTag;
