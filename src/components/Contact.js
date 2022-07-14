import React,{useEffect} from 'react';
import '../styles/contact.css';
import location from '../images/contacts/location.png';
import email from '../images/contacts/email.png';
import phone from '../images/contacts/phone.png';
import {FaFacebookSquare,FaTwitterSquare,FaLinkedin,FaInstagramSquare,FaYoutubeSquare} from 'react-icons/fa';
import ContactForm from './ContactForm';

const Contact = () => {

  return(
    <>
    <h1 style={{color:"#ccd6f6",textAlign:"center",marginTop:"60px"}}>Contact</h1>
    <div className='container'>

      <div className='contact-info'>
        
        <h3 className="title">Let's get in touch</h3>
        

        <div className='info'>
        <div className="information">
          <img src={location} className="icon" alt="" />
          <p>Mohammadpur, Dhaka-1207, Bangladesh</p>
        </div>
        <div className="information">
          <img src={email} className="icon" alt="" />
          <p>iqbalraju123@gmail.com</p>
          </div>
          <div className="information">
          <img src={phone} className="icon" alt="" />
          <p>+8801622869685</p>
        </div>
        </div>

        <div className="social-media">
            <p>Connect with me :</p>
            <div className="social-icons">
              <a href="#">
              <FaFacebookSquare className='fa__icon'/>
              </a>
              <a href="#">
              <FaTwitterSquare className='fa__icon'/>
              </a>
              <a href="#">
              <FaLinkedin className='fa__icon'/>
              </a>
              <a href="#">
              <FaYoutubeSquare className='fa__icon'/>
              </a>
            </div>
          </div>

      </div>
      <div className='contact-form'>
        <ContactForm/>
      </div>
    </div>
    </>
  )
};


export default Contact;
