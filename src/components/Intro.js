import "./Intro.css";
import YoutubeVideo from "./Videos/Video.js";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="content">
        <div className="content-1">
          <h1>Beth Mills</h1>
          <h3>Full Stack Developer</h3>
        </div>
        <div className="content-2">
          <YoutubeVideo />
        </div>
      </div>
    </div>
  );
};

export default Intro;
