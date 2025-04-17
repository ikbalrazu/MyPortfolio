import React,{useState} from 'react';
import '../styles/work.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { projects } from '../ProjectsData/ProjectsData.js';

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
            <div key={index} className='card' data-aos="fade-up-right">
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
                <div key={index} className="each-slide-effect">
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
