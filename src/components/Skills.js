import React from "react";
import '../styles/skills.css'

const Skills = () => {

    // design html css javascript mern


    return(
        <>
            <h1 style={{color:"#ccd6f6",textAlign:"center",marginTop:"60px"}}>Skills</h1>
            <div className="skill">
        {/* <h1>my skills</h1> */}
        <li>
          <h3>html</h3>
          <span className="bar">
            <span className="html"></span>
          </span>
        </li>
        <li>
          <h3>css</h3>
          <span className="bar">
            <span className="css"></span>
          </span>
        </li>
        <li>
          <h3>php</h3>
          <span className="bar">
            <span className="php"></span>
          </span>
        </li>
        <li>
          <h3>javascript</h3>
          <span className="bar">
            <span className="javascript"></span>
          </span>
        </li>
      </div>
        </>
    )
}

export default Skills;