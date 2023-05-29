import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h3>Contact Information</h3>
        <p>Email: bethmills.pn@gmail.com</p>

        <div className="clickable-links">
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/linkedin/linkedin-original.svg" />
            <h4>LinkedIn</h4>
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/github/github-original.svg"
              href="https://github.com/bethjm"
            />
            <h4>GitHub</h4>
          </div>

          <div>
            <img />
            <h4>Resume</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
