import "./Intro.css";
import React from "react";

// const videosrc = "https://www.youtube.com/watch?v=hMgJNbKhi3E";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="content">
        <div className="content-1">
          <h1>Beth Mills</h1>
          <h3>Full Stack Developer</h3>
        </div>
        <div className="content-2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hMgJNbKhi3E"
            title="Youtube Player"
            frameborder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
