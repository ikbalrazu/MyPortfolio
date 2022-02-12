import React from 'react';
import { ReactTypical } from '@deadcoder0904/react-typical';
import {FaFacebookSquare,FaTwitterSquare,FaLinkedin,FaInstagramSquare,FaYoutubeSquare} from 'react-icons/fa';
import '../styles/home.css';
import About from './About';
import Experience from './Experience';
import Work from './Work';

const Home = () => {

    return(
        <>
        <div className='home-container'>
            <div className='social-parent'>
            <div className='social-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://www.facebook.com/iqbal.raju123/'>
                        <FaFacebookSquare/>
                    </a>
                    <a href='#'>
                        <FaTwitterSquare/>
                    </a>
                    <a href='#'>
                        <FaLinkedin/>
                    </a>
                    <a href='#'>
                        <FaInstagramSquare/>
                    </a>
                    <a href='#'>
                        <FaYoutubeSquare/>
                    </a>
                    
                    </div>
                </div>
            </div>
            </div>
            
        <div style={{textAlign:"center"}}>
        <p className='nameHeader' style={{color:"#64ffda",marginRight:"540px"}}>Hi, my name is</p>
        <h1 style={{color:"#ccd6f6",fontSize:"clamp(40px, 8vw, 80px)"}}>Muhammad Iqbal</h1>
        </div>
        
        <div>
        <h1 className='reactTypical'>
        <ReactTypical
        loop={Infinity}
        steps={['Software Engineer', 2000, 'Full Stack Developer', 2000, 'MERN Stack Dev', 2000]}
        wrapper="p"
        />
        </h1>
        </div>
        <p style={{color:"#f0f8ff",fontSize:"20px"}}>I'm ready for building applications with front and back end operations.</p>
        <div>
            <button className='getresume'>Get Resume</button>
        </div>
        </div>
        <About/>
        <Experience/>
        <Work/>
        </>
    )
};
export default Home;