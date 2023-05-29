import React from "react";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <span className="line"></span>

      <div className="container">
        <div className="card">
          <a>image goes here</a>
          <div className="clickable-links">
            <a>github</a>
            <a>youtube</a>
            <a>photos?</a>
          </div>
          <h3>DM DOCK</h3>
          <p>
            An online app for D&D Game Masters to easily access campaign details
            during game play.
          </p>
          <br />
          <p>
            Each GM is able to log into a personal account with JWT user
            authorization. This full stack application makes calls to the Open5e
            API to retrieve 1,500 different monsters for GM's to choose from,
            then save to favorites using LocalStorage. There is an option to
            save customized player details using LocalStroage CRUD. Pagination
            has been built into the app as well as a sorting feautre.
          </p>
          <div className="container-2">
            <div className="grid-item-2">
              <h4>Python</h4>
            </div>
            <div className="grid-item-2">
              <h4>Django</h4>
            </div>
            <div className="grid-item-2">
              <h4>JWT</h4>
            </div>
            <div className="grid-item-2">
              <h4>React.js</h4>
            </div>
            <div className="grid-item-2">
              <h4>JavaScript</h4>
            </div>
            <div className="grid-item-2">
              <h4>React Router</h4>
            </div>
            <div className="grid-item-2">
              <h4>Bulma.io</h4>
            </div>
          </div>
        </div>

        <div className="card">
          <a>image goes here</a>
          <div className="clickable-links">
            <a>github</a>
            <a>youtube</a>
            <a>photos?</a>
          </div>
          <h3>Restaurant Order App</h3>
          <p>
            Order App allows meal items to be added and removed from the cart.
            As items are added or removed the total in the cart is adjusted to
            reflect the updated cost.
          </p>
          <br />
          <p>
            This app uses the proper breakdown of React components to allow for
            a seamless UI. Context, Props, and Refs/Forward Refs are used to
            pass data to components. State management allows the order modal and
            the buttons to respond properly when clicked. And, useEffect allows
            components to render at the appropriate time.
          </p>
          <div className="container-2">
            <div className="grid-item-2">
              <h4>React.js</h4>
            </div>
            <div className="grid-item-2">
              <h4>JavaScript</h4>
            </div>
            <div className="grid-item-2">
              <h4>Module Stylesheet</h4>
            </div>
          </div>
        </div>

        <div className="card">
          <a>image goes here</a>
          <div className="clickable-links">
            <a>github</a>
            <a>youtube</a>
            <a>photos?</a>
          </div>
          <h3>CoffeeCompass</h3>
          <p>
            CoffeeCompass is a site for coffee connoisseur's to find coffee
            shops in the area that roast to their object preference. Find light,
            medium, and dark roasts with flavor notes that excite you!
          </p>
          <br />
          <p>
            Coffee compass is a MERN full stack application. MongoDB Atlas
            allows users to add new coffee shops to the platform. You can search
            for coffee's based on location, roast, and flavor notes.
          </p>
          <div className="container-2">
            <div className="grid-item-2">
              <h4>JavaScript</h4>
            </div>
            <div className="grid-item-2">
              <h4>MongoDB</h4>
            </div>
            <div className="grid-item-2">
              <h4>Express</h4>
            </div>
            <div className="grid-item-2">
              <h4>React.js</h4>
            </div>
            <div className="grid-item-2">
              <h4>Node.js</h4>
            </div>
            <div className="grid-item-2">
              <h4>Flexbox</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
