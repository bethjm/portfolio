import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Languages from "./components/Languages";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Languages />
    </div>
  );
}

export default App;
