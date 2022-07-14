import '../styles/header.css';
//import '../styles/sidebar.css'
import React,{useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons';
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

const Header = () =>{


    window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header")
        header.classList.toggle("active",this.window.scrollY > 0)
    });

    const [click,setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }

    return(
        <>
        <div className="header navbar">
            <div className="logo">
            <Link to="/" style={{textDecoration:"none"}}>
            IQBAL
            </Link>
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
                <li>
                    <HashLink to="#">Services</HashLink>
                    {/* <a href="#">Experience</a> */}
                </li>
                <li>
                    <HashLink to="#">Skills</HashLink>
                    {/* <a href="#">Experience</a> */}
                </li>
                <li>
                    <HashLink to="/#work">Work</HashLink>
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
                <li>
                    <HashLink to="#" className="btn">Resume</HashLink>
                {/* <a href="#" className="btn">Resume</a> */}
                </li>
                
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
            <section>
            <Home/>
            </section>

            <section id='aboutpage'>
            <About/>
            </section>

            <section id='experiencepage'>
            <Experience/>
            </section>
            
            <section id='work'>
            <Work/>
            </section>

            <section id='contact'>
            <Contact/>
            </section>
            
        </>
    )
}
export default Header;