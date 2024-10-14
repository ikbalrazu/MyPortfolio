import React from "react";
import '../styles/skills.css'

const Skills = () => {

    // design html css javascript mern


    return(
        <>
            {/* <h1 style={{color:"#ccd6f6",textAlign:"center",marginTop:"60px"}}>Skills</h1> */}
        <div className="container">
        <div className="frontend-skill" data-aos="fade-right">
        <h1 className="skill-title">Frontend</h1>
        <li>
          <h3>HTML</h3>
          <span className="bar">
            <span className="html"></span>
          </span>
        </li>
        <li>
          <h3>CSS</h3>
          <span className="bar">
            <span className="css"></span>
          </span>
        </li>
        <li>
          <h3>JavsaScript</h3>
          <span className="bar">
            <span className="javascript"></span>
          </span>
        </li>
        <li>
          <h3>TypeScript</h3>
          <span className="bar">
            <span className="typescript"></span>
          </span>
        </li>
        <li>
          <h3>React JS</h3>
          <span className="bar">
            <span className="reactjs"></span>
          </span>
        </li>
        <li>
          <h3>Next JS</h3>
          <span className="bar">
            <span className="nextjs"></span>
          </span>
        </li>
        <li>
          <h3>Bootstrap</h3>
          <span className="bar">
            <span className="bootstrap"></span>
          </span>
        </li>
        <li>
          <h3>Material-UI</h3>
          <span className="bar">
            <span className="materialui"></span>
          </span>
        </li>
      </div>

      <div className="backend-skill" data-aos="fade-left">
        <h1 className="skill-title">Backend</h1>
        <li>
          <h3>Node JS</h3>
          <span className="bar">
            <span className="nodejs"></span>
          </span>
        </li>
        <li>
          <h3>Express.js</h3>
          <span className="bar">
            <span className="python"></span>
          </span>
        </li>
        <li>
          <h3>MongoDB</h3>
          <span className="bar">
            <span className="mongodb"></span>
          </span>
        </li>
        <li>
          <h3>MySQL</h3>
          <span className="bar">
            <span className="mysql"></span>
          </span>
        </li>
      </div>
      </div>
        </>
    )
}

export default Skills;