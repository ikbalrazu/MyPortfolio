import React from 'react';
import '../styles/work.css';
import Project1 from '../images/projects/project-1.jpg'
import Project2 from '../images/projects/project-2.jpg'
import Image1 from '../components/work/image/image1.PNG'

const Work = () => {

  const projects = [
    {
      Project:"1",
      ProjectName:"Personal Chat",
      StartDate:"Jul 2022",
      EndDate:"Present",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js",
      Backend:"Node.js | Socket.io | MongoDB"
    },
    {
      Project:"1",
      ProjectName:"Investment Portal",
      StartDate:"Jul 2022",
      EndDate:"Present",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js",
      Backend:"Node.js | Zoho Creator"
    },
    {
      Project:"2",
      ProjectName:"Portfolio - muhammadiqbal",
      StartDate:"Apr 2022",
      EndDate:"Present",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js",
      Backend:"Node.js"
    },
    {
      Project:"3",
      ProjectName:"Zoho CRM - Widget | Twilio Bulk SMS",
      StartDate:"Feb 2022",
      EndDate:"Mar 2022",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js | Bootstrap 5",
      Backend:"Node.js"
    },
    {
      Project:"4",
      ProjectName:"Zoho CRM - Extension | Email & Phone validation and verify",
      StartDate:"Dec 2021",
      EndDate:"Jan 2022",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js",
      Backend:""
    },
    {
      Project:"5",
      ProjectName:"Zoho CRM - Extension | Find Address From Google Map",
      StartDate:"Oct 2021",
      EndDate:"Nov 2021",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js",
      Backend:""
    },
    {
      Project:"6",
      ProjectName:"Zoho CRM - Duplicate Merge",
      StartDate:"Sep 2021",
      EndDate:"Oct 2021",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"React.js",
      Backend:""
    },
    {
      Project:"7",
      ProjectName:"E-commerce",
      StartDate:"Feb 2020",
      EndDate:"Jul 2020",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"Django ",
      Backend:"Django"
    },
    {
      Project:"8",
      ProjectName:"MyGroup",
      StartDate:"Sep 2019",
      EndDate:"Jan 2020",
      ProjectURL:"",
      Description:"",
      ProjectImage:"",
      Frontend:"Django ",
      Backend:"Django"
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
          {/* <img src="https://hover.blog/wp-content/uploads/2015/08/dot-online-1280x720.png" /> */}
          <img src={Image1} />
          <div className="details">
            <h2>
              <span>Investment Portal</span>
            </h2>
            {/* <p>hello iqbal i am from bangladesh</p> */}
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
