import '../styles/header.css';
import React,{useState} from 'react';

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
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
                <a href="#" className="btn">Resume</a>
            </ul>
            <div className='nav-icon' onClick={handleClick}>
                <i className={click ? "#" : "+"}></i>
                {click ? <i>#</i> : <i>+</i>}
            </div>
            </div>
                
        </div>
    )
}
export default Header;