import React from "react";
import ReactDOM from "react-dom";
import DevIcon from "devicon-react-svg";

import "./Languages.css";

const Languages = () => {
  return (
    <div className="languages" id="languages">
      <div className="box">
        <h3>Languages</h3>
        <div className="container">
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/javascript/javascript-original.svg" />{" "}
            <p>JavaScript</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-plain.svg" />{" "}
            <p>Python</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/css3/css3-original.svg" />
            <p>CSS</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/html5/html5-original.svg" />
            <p>HTML</p>
          </div>
          <div className="grid-item">
            <DevIcon icon="ejs" />
            <p>EJS</p>
          </div>
        </div>

        <h3>Libraries and Frameworks</h3>
        <div className="container">
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/react/react-original.svg" />
            <p>React.js</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/nextjs/nextjs-original.svg" />
            <p>Next.js</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/nodejs/nodejs-original.svg" />
            <p>Node.js</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/django/django-plain.svg" />
            <p>Django</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/npm/npm-original-wordmark.svg" />
            <p>NPM</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/express/express-original.svg" />
            <p>Express</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/jquery/jquery-original.svg" />
            <p>Jquery</p>
          </div>
          <div className="grid-item">
            <img />
            <p>Json</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/bootstrap/bootstrap-original.svg" />
            <p>Bootstrap</p>
          </div>
          <div className="grid-item">
            <img />
            <p>Flexbox</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/bulma/bulma-plain.svg" />
            <p>Bulma.io</p>
          </div>
        </div>

        <h3>Databases etc</h3>
        <div className="container">
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/postgresql/postgresql-original.svg" />
            <p>PostgreSql</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mysql/mysql-original.svg" />
            <p>SQL</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mongodb/mongodb-original.svg" />
            <p>MongoDB</p>
          </div>
          <div className="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/git/git-original.svg" />
            <p>Git</p>
          </div>
          <div className="grid-item">
            <img />
            <p>RESTful routing</p>
          </div>
          <div className="grid-item">
            <img src="" />
            <p>FULL CRUD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
