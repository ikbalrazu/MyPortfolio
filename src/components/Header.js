import '../styles/header.css';
import React,{useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () =>{

    const [click,setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    return(
        <div className="navbar">
            <div className="logo">
            IQBAL
            </div>
            <div>
            <ul className="navbar_ul">
                <li>
                    <Link to="/">About</Link>
                    {/* <a href="#">About</a> */}
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                    {/* <a href="#">Experience</a> */}
                </li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
                <a href="#" className="btn">Resume</a>
            </ul>
            <div className='nav-icon' onClick={handleClick}>
                {/* <i className={click ? "#" : "+"}></i> */}
                {click ? <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
            </div>
            </div>
                
        </div>
    )
}
export default Header;