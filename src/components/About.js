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
      Hello! My name is Iqbal, and I'm a Junior Front-end Developer. I enjoy creating things that live on the internet. I have a passion for developing web applications. I find myself super comfortable in React.js, Node.js, and MongoDB. I specialize in creating interactive experiences and functional interfaces using React. I have three years of industrial knowledge also. Recently I have worked on Zoho CRM platform where developed many widgets and extension projects with react.js, node.js and MongoDB/ZOHO Creator.
      </p>
      <div style={{display:"flex",flexDirection:"row",marginTop:"20px",textDecoration:"none"}} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <ul style={{listStyle:"none"}}>
        <h1 className='workingon'>
          I'm Working on...
        </h1>
        <div style={{paddingTop:"5px",color:"#64ffda"}} >
        <li>▹ Node.js</li>
        <li>▹ React</li>
        <li>▹ Redux Toolkit for State Mnanagement</li>
        <li>▹ Building REST API</li>
        </div>
      </ul>
      </div>
    </div>
    <div className='progileimage' data-aos="fade-up">
    <img className='progileimage' width="100%" height="100%" src={Mypicture}/>
    </div>
    <div className='skills' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <div style={{display:"flex",flexDirection:"column"}}>
      <h1 className='skillscontent'>Education:</h1>
      <ul style={{listStyle:"none"}}>
        <div style={{paddingTop:"5px",color:"#64ffda"}}>
        <li>▹ B.Sc Software Enginner at Daffodil International University</li>
        <p> 2016 - 2020</p>
        </div>
      </ul>
      </div>
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
      <ul style={{listStyle:"none"}}>
        <h1 className='workingon'>
          I'm Working on...
        </h1>
        <div style={{paddingTop:"5px",color:"#64ffda"}}>
        <li>▹ React</li>
        <li>▹ Node.js</li>
        <li>▹ Redux for State Mnanagement</li>
        <li>▹ Building REST API</li>
        </div>
      </ul>
    </div>
    <div className='education'>
    <div style={{display:"flex",flexDirection:"column",marginTop:"10px"}}>
      <h1 className='skillscontent'>Education:</h1>
      <ul style={{listStyle:"none"}}>
        <div style={{paddingTop:"5px",color:"#64ffda",display:"flex",gap:"10px"}}>
        <li>▹ B.Sc Software Enginner at Daffodil International University</li>
        {/* <hr style={{minHeight: "100%",maxHeight:"100vh",margin:"0"}}/> */}
        <p>2016 - 2020</p>
        </div>
      </ul>
      </div>
    </div>
  </div>
  </>
  );
}

export default About;
