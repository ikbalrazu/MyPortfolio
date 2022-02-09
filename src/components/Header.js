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
import Home from './Home';

const Header = () =>{

    const [click,setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }

    return(
        <>
        <div className="navbar">
            <div className="logo">
            <Link to="/" style={{textDecoration:"none"}}>
            IQBAL
            </Link>
            </div>
            <div className='nav__ul'>
            <ul className="navbar_ul">
                <li>
                    <Link to="/about">About</Link>
                    {/* <a href="#">About</a> */}
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                    {/* <a href="#">Experience</a> */}
                </li>
                <li>
                    <Link to="#">Services</Link>
                    {/* <a href="#">Experience</a> */}
                </li>
                <li>
                    <Link to="#">Skills</Link>
                    {/* <a href="#">Experience</a> */}
                </li>
                <li>
                    <Link to="/work">Work</Link>
                    {/* <a href="#">Work</a> */}
                </li>
                <li>
                    <Link to="/work">Blog</Link>
                    {/* <a href="#">Work</a> */}
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                    {/* <a href="#">Contact</a> */}
                </li>
                <li>
                    <Link to="#" className="btn">Resume</Link>
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
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
            </IconContext.Provider>
            </div>
            {/* <Home/> */}
        </>
    )
}
export default Header;