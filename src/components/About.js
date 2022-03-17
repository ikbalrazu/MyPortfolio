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
      <p className='contentAboutme'>
      Hello! My name is Iqbal, and I'm a Junior Front-end Developer. I enjoy creating things that live on the internet. I have a passion for developing web applications. I find myself super comfortable in React.js, Node.js, and Django. I specialize in creating interactive experiences and functional interfaces using React. I have one year of industrial knowledge also. Recently I have worked on Zoho CRM platform where I have developed a lot of widgets and extension projects with react.js and node.js.
      </p>
    </div>
    {/* <div className='progileimage'> */}
    <img className='progileimage' width="100%" height="100%" src={Mypicture}/>
    {/* </div> */}
    <div className='skills'>
      <h1 className='skillscontent'>▹Here are a Few Highlights:</h1>
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
   <p className='contentaboutme'>Hello! My name is Iqbal, and I'm a Junior Front-end Developer. I enjoy creating things that live on the internet. I have a passion for developing web applications. I find myself super comfortable in React.js, Node.js, and Django. I specialize in creating interactive experiences and functional interfaces using React. I have one year of industrial knowledge also. Recently I have worked on Zoho CRM platform where I have developed a lot of widgets and extension projects with react.js and node.js.</p>
  </div>

  <div className='highlighs-skills'>
    <p className='highlightscontent'>Here are a Few Highlights: </p>
    <div className='highlight-items'>
    <ul>
    <li>
    ▹ Interactive Front End as per the design
    </li>
    <li>▹ React</li>
    <li>▹ Node.js</li>
    <li>▹ Redux for State Mnanagement</li>
    <li>▹ Building REST API</li>
    </ul>
    </div>
  </div>

  </div>
  </>
  );
}

export default About;
