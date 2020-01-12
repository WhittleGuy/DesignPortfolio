import React, { Component } from "react";

class TwitterTag extends Component {
  render() {
    return (
      <>
        <a
          className="button__twitter"
          href={"https://twitter.com/" + this.props.user}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </>
    );
  }
}

export default TwitterTag;
