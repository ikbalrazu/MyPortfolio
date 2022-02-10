import React, { useEffect } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/about.css';
import Mypicture from '../images/mypicture.jpg';

const About = () => {

  // const text = document.querySelector('textp');
  // text.innerHTML = text.innerText?.split("").map(
  //   (char, i) =>
  //   `<span style="transform:rotate(${i*5}deg)">${char}</span>`
  // ).join("")

  useEffect(()=>{

  })
  return (
    <>
  <div className='profile-container'>
    <div className='aboutme'>
      <div className='aboutme-child'>
      <div className='aboutme-child1'>
        <h1 className='aboutmeheadline'></h1>
      </div>
      <div className='aboutme-child2'>
      </div>
      </div> 

    </div>
    <div className='summeryaboutme'>
     I'm Iqbal Hosain Raju. I am A Software Engineer  and also Full-Stack WebDeveloper. I have 1 Year Industrial Knowledge aslo.
    </div>
    {/* <div className='progileimage'> */}
    <img className='progileimage' width="100%" height="100%" src={Mypicture}/>
    {/* </div> */}
    <div className='skills'>
    Here are a Few Highlights:
    </div>
  </div>
  {/* mobile responsive */}
  <div className='about-responsive'>

  <div className='headline' style={{textAlign:"center"}}>
  <h1 className='aboutmeheadline2'></h1>
  </div>

  <div className='circle-image'>  
  <div className='parent'>
  <div className='circle'>
    <div className='imglogo'></div>
    {/* <div className='text'>
      <p id='textp'>Muhammad Iqbal Hossen Razu</p>
    </div> */}
  </div>
  </div>
  </div>

  <div className='aboutme-summery' style={{color:"#8892b0"}}>
   <p>hello my name is iqbal. i am a software engineer</p>
  </div>

  <div className='highlighs-skills'>
    <p>javascript python java </p>
  </div>

  </div>
  </>
  );
}

export default About;
