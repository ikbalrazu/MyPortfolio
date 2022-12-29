import React,{useState} from 'react';
import '../styles/work.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { projects } from '../ProjectsData/ProjectsData.js';


// const projects = [
//   {
//     Project:"1",
//     ProjectName:"MyGroup",
//     StartDate:"Sep 2019",
//     EndDate:"Jan 2020",
//     ProjectURL:"",
//     Description:"",
//     ProjectImage:"",
//     Frontend:"Django ",
//     Backend:"Django"
//   },
//   {
//     Project:"2",
//     ProjectName:"E-commerce",
//     StartDate:"Feb 2020",
//     EndDate:"Jul 2020",
//     ProjectURL:"https://loopbari.herokuapp.com",
//     Description:"",
//     ProjectImage:"",
//     Frontend:"Django ",
//     Backend:"Django",
//     Images:[]
//   },
//   {
//     Project:"3",
//     ProjectName:"Zoho CRM - Duplicate Merge",
//     StartDate:"Sep 2021",
//     EndDate:"Oct 2021",
//     ProjectURL:"",
//     Description:"",
//     ProjectImage:"",
//     Frontend:"React.js",
//     Backend:""
//   },
//   {
//     Project:"4",
//     ProjectName:"Zoho CRM - Extension | Find Address From Google Map",
//     StartDate:"Oct 2021",
//     EndDate:"Nov 2021",
//     ProjectURL:"",
//     Description:"",
//     ProjectImage:"",
//     Frontend:"React.js",
//     Backend:""
//   },
//   {
//     Project:"5",
//     ProjectName:"Zoho CRM - Extension | Email & Phone validation and verify",
//     StartDate:"Dec 2021",
//     EndDate:"Jan 2022",
//     ProjectURL:"",
//     Description:"",
//     ProjectImage:"",
//     Frontend:"React.js",
//     Backend:""
//   },
//   {
//     Project:"6",
//     ProjectName:"Zoho CRM - Widget | Twilio Bulk SMS",
//     StartDate:"Feb 2022",
//     EndDate:"Mar 2022",
//     ProjectURL:"",
//     Description:"",
//     ProjectImage:"",
//     Frontend:"React.js | Bootstrap 5",
//     Backend:"Node.js"
//   },
//   {
//     Project:"7",
//     ProjectName:"Portfolio - muhammadiqbal",
//     StartDate:"Apr 2022",
//     EndDate:"Present",
//     ProjectURL:"",
//     Description:"",
//     ProjectImage:"",
//     Frontend:"React.js",
//     Backend:"Node.js"
//   },
//   {
//     Project:"8",
//     ProjectName:"Investment Portal",
//     StartDate:"Jul 2022",
//     EndDate:"Present",
//     ProjectURL:"",
//     Description:"",
//     ProjectImage:"",
//     Frontend:"React.js",
//     Backend:"Node.js | Zoho Creator"
//   },
//   {
//     Project:"9",
//     ProjectName:"P-Chat",
//     StartDate:"Jul 2022",
//     EndDate:"Present",
//     ProjectURL:"",
//     Description:"",
//     ProjectImage:"",
//     Frontend:"React.js",
//     Backend:"Node.js | Socket.io | MongoDB"
//   },
// ]

const Work = () => {
  const [visible, setVisible] = useState(4)

  const SeeMoreCards = () => {
    //console.log(projects.length);
    setVisible(projects.length);
  }

  const SeeLessCards = () => {
    //console.log(projects.length);
    setVisible(4);
  }

  return(
    <>
    <div className='App'>
    <div className='container'>
        {[...projects]?.reverse().slice(0,visible).map((project,index)=>{
          return(
            <div className='card' data-aos="fade-up-right">
              <div data-aos="zoom-in">
              <h1 className='projecttitle'>{project?.ProjectName}</h1>
              </div>
              <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <p className='projectplatform'>{project?.Frontend} | {project?.Backend}</p>
              </div>
              
              <br/>
              <div className='showimg' data-aos="fade-up-left">
              <Slide  autoplay={false}>
              {project?.Images?.map((slideImage,index)=>(
                <div className="each-slide-effect">
                <div
                  style={{
                    height:"355px",
                    'backgroundImage': `url(${slideImage?.url})`,
                    borderRadius:"10px",
                    backgroundSize:"409px 360px",
                    backgroundRepeat:"no-repeat"
                  }}
    
                >
                  {/* <span>
                    Slide 1
                  </span> */}
                </div>
              </div>
              ))}
              </Slide>
              </div>

              <div className='card-btn'>
              <a href={project?.ProjectURL} target="_blank">
              <button className='cardbottombtn'>Show Project</button>
              </a>
              <button className='cardbottombtn'>Details</button>
              </div>
            </div>
          )
        })}

    </div>
    <div className='showmore'>
      {visible > 4 &&(
        <button className='showbtn' onClick={SeeLessCards}>See Less</button>
      )}

      {visible <= 4 &&(
        <button className='showbtn' onClick={SeeMoreCards}>See More</button>
      )}
      
      
    </div>
    </div>
    </>
  )
}

export default Work;
