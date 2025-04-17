import '../styles/header.css';
import React,{useEffect, useState} from 'react';
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import {IconContext} from 'react-icons'
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';
import Skills from './Skills';
import { frontendurl } from '..';


const Header = () =>{

    window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header")
        header?.classList?.toggle("active",this.window.scrollY > 0)
    });

    const [click,setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }

    useEffect(()=>{

    },[]);

    // useEffect(() => {
    //     localStorage.setItem('theme', theme);
    //     document.body.className = theme;
    // }, [theme]);

    return(
        <>
        <div className="header navbar">
            <div className="logo">
            <a href={frontendurl} style={{textDecoration:"none"}}>
            IKBAL
            </a>
            </div>
            <div className='nav__ul'>
            <ul className="navbar_ul">
                <li>
                    <HashLink smooth to="/#aboutpage">About</HashLink>
                    {/* <a href="#">About</a> */}
                </li>
                <li>
                    <HashLink 
                    smooth
                    to="/#experiencepage">Experience</HashLink>
                    {/* <a href="#">Experience</a> */}
                </li>
                {/* <li>
                    <HashLink to="#">Services</HashLink>
                    <a href="#">Experience</a>
                </li> */}
                <li>
                    <HashLink smooth to="/#skillspage">Skills</HashLink>
                    {/* <a href="#">Experience</a> */}
                </li>
                <li>
                    <HashLink smooth to="/#work">Portfolio</HashLink>
                    {/* <a href="#">Work</a> */}
                </li>
                <li>
                    <HashLink to="/blog">Blog</HashLink>
                    {/* <a href="#">Work</a> */}
                </li>
                <li>
                    <HashLink smooth to="/#contact">Contact</HashLink>
                    {/* <a href="#">Contact</a> */}
                </li>
                {/* <li>
                <button className={`theme-toggle-button ${theme}`} onClick={toggleTheme}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
                </li> */}
                {/* <li>
                    <HashLink to="#" className="btn">Resume</HashLink>
                </li> */}
                
            </ul>
            </div>
            </div>
            {/* Device responsive navigation bar */}
            {/* <div className='nav-icon' onClick={handleClick}>
                {click ? <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
            </div> */}

            <div className='nav__toggler'>
            <IconContext.Provider value={{color:"#fff"}}>
            <div className='navbar2'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={handleClick}/>
                </Link>
            </div>
            <nav className={click ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={handleClick}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                         <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <HashLink smooth to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </HashLink>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
            </IconContext.Provider>
            </div>
            
            <section id='home'>
            <Home/>
            </section>

            <section id='aboutpage' style={{marginTop:"10px"}}>
            <h1 style={{color:"#ccd6f6",textAlign:"center",marginTop:"10px"}}>About Me</h1>
            <About/>
            </section>

            <section id='experiencepage' style={{marginTop:"10px"}}>
            <h1 style={{color:"#ccd6f6",textAlign:"center",marginTop:"10px"}}>Experience</h1>
            <Experience/>
            </section>

            <section id='skillspage' style={{marginTop:"10px"}}>
            <h1 style={{color:"#ccd6f6",textAlign:"center",marginTop:"10px"}}>Skills</h1>
            <Skills/>
            </section>
            
            <section id='work' style={{marginTop:"10px"}}>
            <h1 style={{color:"#ccd6f6",textAlign:"center",marginTop:"10px"}}>Portfolio</h1>
            <Work/>
            </section>

            <section id='contact' style={{marginTop:"10px"}}>
            <h1 style={{color:"#ccd6f6",textAlign:"center",marginTop:"60px"}}>Contact</h1>
            <Contact/>
            </section>

            <section>
            <div style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                textAlign:"center",
                marginBottom:"10px"
                // background:"#172B45"
                }}>
                <p style={{color:"#a8a8a8",padding:"6px",fontSize:"13px"}}>Copyrights © 2024 All Rights Reserved. </p>
            </div>
            </section>
            
        </>
    )
}
export default Header;