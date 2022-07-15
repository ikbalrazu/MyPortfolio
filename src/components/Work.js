import React from 'react';
import '../styles/work.css';
import Project1 from '../images/projects/project-1.jpg'
import Project2 from '../images/projects/project-2.jpg'

const Work = () => {
  return(
    <>
    <div style={{textAlign:"center",marginBottom:"40px"}}>
    <h1 className='workheadline'></h1>
    </div>

      <div className='project-section'>
        {/* <h1 className='project-heading'>Some of my projects</h1> */}
        <div className='project-container'>

          <div className='project-card'>
            <img src={Project1} className='project-img' alt=''/>
            <div className='project-content'>
              <h1 className='project-title'>Project 01</h1>
              <p className='project-info'>
              CodeSandbox makes it easier to express and validate product teams' ideations with code and aims to remove hassles when setting up a development environmen
              </p>

              <div className='project-btn-grp'>
                <button className='project-btn git'>Github rep</button>
                <button className='project-btn live'>Live Demo</button>
              </div>
            
            </div>
          </div>

          <div className='project-card'>
            <img src={Project2} className='project-img' alt=''/>
            <div className='project-content'>
              <h1 className='project-title'>Project 02</h1>
              <p className='project-info'>
              CodeSandbox makes it easier to express and validate product teams' ideations with code and aims to remove hassles when setting up a development environmen
              </p>

              <div className='project-btn-grp'>
                <button className='project-btn git'>Github rep</button>
                <button className='project-btn live'>Live Demo</button>
              </div>
            </div>
          </div>

          <div className='project-card'>
            <img src={Project2} className='project-img' alt=''/>
            <div className='project-content'>
              <h1 className='project-title'>Project 03</h1>
              <p className='project-info'>
              CodeSandbox makes it easier to express and validate product teams' ideations with code and aims to remove hassles when setting up a development environmen
              </p>

              <div className='project-btn-grp'>
                <button className='project-btn git'>Github rep</button>
                <button className='project-btn live'>Live Demo</button>
              </div>
            </div>
          </div>
          
        </div>
        {/* mobile responsive */}
        <div className='project-responsive'>

        </div>
      </div>
    </>
  )
}

export default Work;
