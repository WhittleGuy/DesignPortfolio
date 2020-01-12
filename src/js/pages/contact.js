import React, { Component } from "react";
import LineArt from "../../images/Graphics/LineArt.svg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container main-window">
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

          <form action="https://formspree.io/xdoaqlvj" method="POST">
            <div className="name">
              <input type="text" name="name" autoComplete="on" required />
              <label htmlFor="name" className="label-name">
                <span className="content-name">Name</span>
              </label>
            </div>
            <div className="email">
              <input type="email" name="_replyto" autoComplete="on" required />
              <label htmlFor="email" className="label-email">
                <span className="content-email">Email</span>
              </label>
            </div>
            <div className="message">
              <textarea name="message" required></textarea>
              <label htmlFor="message" className="label-message">
                <span className="content-message">Message</span>
              </label>
            </div>
            <div className="submit-button-field">
              <input
                className="submit-btn button__small"
                type="submit"
                value="Send"
              ></input>
            </div>{" "}
          </form>
        </div>
        <div className="right">
          <img className="LineArt half-graphic" src={LineArt} alt="Lineart" />
        </div>
      </div>
    );
  }
}

export default Contact;
