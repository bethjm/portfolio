import React from "react";
import site from "./images/world-wide-web.png";
import foodapp from "./images/foodapp.png";
import dmdock from "./images/dmdock.png";
import woods from "./images/lostinwoods.png";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <span className="line"></span>

      <div className="container">
        <div className="card">
          <img src={dmdock} alt="a photo of DMDock Monster API" />
          <div className="clickable-links">
            <a href="https://github.com/bethjm/dmdock-front-end.git">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/github/github-original.svg" />
            </a>
            <a href="https://www.loom.com/share/79a18aa78f994443b3b9c99917aa87a3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="youtube"
              >
                <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="image"
              >
                <path d="M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a2.81,2.81,0,0,0,.49-.05l.3-.07.07,0h0l.05,0,.37-.14.13-.07c.1-.06.21-.11.31-.18a3.79,3.79,0,0,0,.38-.32l.07-.09a2.69,2.69,0,0,0,.27-.32l.09-.13a2.31,2.31,0,0,0,.18-.35,1,1,0,0,0,.07-.15c.05-.12.08-.25.12-.38l0-.15A2.6,2.6,0,0,0,22,19V5A3,3,0,0,0,19,2ZM5,20a1,1,0,0,1-1-1V14.69l3.29-3.3h0a1,1,0,0,1,1.42,0L17.31,20Zm15-1a1,1,0,0,1-.07.36,1,1,0,0,1-.08.14.94.94,0,0,1-.09.12l-5.35-5.35.88-.88a1,1,0,0,1,1.42,0h0L20,16.69Zm0-5.14L18.12,12a3.08,3.08,0,0,0-4.24,0l-.88.88L10.12,10a3.08,3.08,0,0,0-4.24,0L4,11.86V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM13.5,6A1.5,1.5,0,1,0,15,7.5,1.5,1.5,0,0,0,13.5,6Z"></path>
              </svg>
            </a>
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
          <img src={foodapp} alt="a photo of Beth's food app project" />
          <div className="clickable-links">
            <a href="https://github.com/bethjm/FoodOrderApp.git">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/github/github-original.svg" />
            </a>
            <a href="https://www.loom.com/share/5703f9eeea374bf3a957191f06b5a25d">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="youtube"
              >
                <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"></path>
              </svg>
            </a>
            <a href="https://foodapp-bethjmdev.netlify.app/">
              <img src={site} alt="globe signifying world wide web" />
            </a>
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
          <img src={woods} alt="a photo of DMDock Monster API" />
          <div className="clickable-links">
            <a href="https://github.com/Brett-Abramson/project_3_frontend">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/github/github-original.svg" />
            </a>
            <a href="https://www.loom.com/share/4a9cb9ff498d404d8b9e682739e0b3ee">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="youtube"
              >
                <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"></path>
              </svg>
            </a>
            <a href="https://lost-in-the-woods.herokuapp.com/">
              <img src={site} alt="globe signifying world wide web" />
            </a>
          </div>
          <h3>Lost In The Woods</h3>
          <p>
            Lost In The Woods is an app for outdoors people to search for hiking
            and camping spots in their area. Hikers are able to add in new hikes
            for others to enjoy and comment on others submissions.
          </p>
          <br />
          <p>
            Lost In The Woods is a MERN full stack application. MongoDB Atlas
            allows users to add hikes to the platform and comment on others
            submissions. You can search for hikes bas on challenge rating and
            location.
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
