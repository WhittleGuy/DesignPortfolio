import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="left">
          <div className="contact-text">
            <h1>Contact Me</h1>
            <p>
              I enjoy working with others to realize their vision, whether that
              be through design, photography, music, live audio, or office work.
              <br />
              <br />
              Do you have a concept that needs a fresh set of eyes, some honing
              in, or a new design? Do you have an event that would be a lot
              better if you just had a big sound system? Either way, I would
              love to help with your project.
              <br />
              <br />
              You can contact me by email at brandon.w.whittle@gmail.com. I look
              forward to hearing from you!
            </p>
          </div>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}

export default Contact;
