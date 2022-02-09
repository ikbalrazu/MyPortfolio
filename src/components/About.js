import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/about.css';
import Mypicture from '../images/mypicture.jpg';

const About = () => {
  return (
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
  );
}

export default About;
