import React from 'react';
import '../styles/work.css';
import Project1 from '../images/projects/project-1.jpg'
import Project2 from '../images/projects/project-2.jpg'

const Work = () => {

  const projects = [
    {
      Project:"1",
      ProjectName:"",
      StartDate:"",
      EndDate:"",
      ProjectURL:"",
      Description:"",
      ProjectImage:""
    },
    {
      Project:"2",
      ProjectName:"",
      StartDate:"",
      EndDate:"",
      ProjectURL:"",
      Description:"",
      ProjectImage:""
    },
    {
      Project:"3",
      ProjectName:"",
      StartDate:"",
      EndDate:"",
      ProjectURL:"",
      Description:"",
      ProjectImage:""
    },
    {
      Project:"4",
      ProjectName:"",
      StartDate:"",
      EndDate:"",
      ProjectURL:"",
      Description:"",
      ProjectImage:""
    },
    {
      Project:"5",
      ProjectName:"",
      StartDate:"",
      EndDate:"",
      ProjectURL:"",
      Description:"",
      ProjectImage:""
    },
    {
      Project:"6",
      ProjectName:"",
      StartDate:"",
      EndDate:"",
      ProjectURL:"",
      Description:"",
      ProjectImage:""
    }
  ]
  return(
    <>
    <div style={{textAlign:"center",marginBottom:"40px"}}>
    <h1 className='workheadline'></h1>
    </div>

    <div className="Container">
    {/* image row start */}
    <div className="row">
        {/* image card start */}
        <div className="image">
          <img src="https://hover.blog/wp-content/uploads/2015/08/dot-online-1280x720.png" />
          <div className="details">
            <h2>
              Your <span>Title</span>
            </h2>
            <p>hello iqbal i am from bangladesh</p>
            <div className="more">
              <a href="#" className="read-more">
                Read <span>More</span>
              </a>
              <div className="icon-links">
                <a href="#">
                  <i className="fas fa-heart"></i>
                </a>
                <a href="#">
                  <i className="fas fa-heart"></i>
                </a>
                <a href="#">
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* image card end */}
      </div>
      {/* image row start */}
      </div>






     {/* old design code */}
      {/* <div className='project-section'>
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
        
        <div className='project-responsive'>

        </div>
      </div> */}
    </>
  )
}

export default Work;
