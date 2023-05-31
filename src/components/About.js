import React from "react";
import beth from "./images/linkinphoto.jpeg";

import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={beth} alt="photo of Beth sitting on a mountain top" />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            As a software engineer with a background in personal training, I
            bring a unique perspective to complex problem solving. My experience
            in applying biomechanics to personal training ignited my passion for
            analytical and empathetic approaches to challenges, which inspired
            me to pursue software engineering.
          </p>
          <p>
            My commitment to lifelong learning and collaboration has propelled
            me to constantly seek new ways to innovate and contribute to shared
            goals. With a dedication to excellence and a passion for knowledge,
            I am eager to join a team that shares my values to contribute my
            skills and drive success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
