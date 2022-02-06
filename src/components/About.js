import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,COl} from 'react-bootstrap';
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
      Summery about me
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
