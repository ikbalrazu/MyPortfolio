import React,{useState} from "react";
import '../styles/contactform.css'

const ContactForm = () => {

  const [email,setEmail] = useState();
  const [subject, setSubject] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  const SendMessage = () => {
    console.log(email);
    console.log(subject);
    console.log(phone);
    console.log(message);
  }

    return(
        <div className="contact__form">
        <div className="form-flex">
        <div className="form">
          <input
            type="text"
            id="email"
            className="form__input"
            autocomplete="off"
            placeholder=" "
            onChange={(e)=>setEmail(e.target.value)}
          />
          <label for="email" className="form__label">
            Email
          </label>
        </div>
        <div className="form">
          <input
            type="text"
            id="subject"
            className="form__input"
            autocomplete="off"
            placeholder=" "
            onChange={(e)=>setSubject(e.target.value)}
          />
          <label for="subject" className="form__label">
            Subject
          </label>
        </div>
        <div className="form">
          <input
            type="text"
            id="phone"
            className="form__input"
            autocomplete="off"
            placeholder=" "
            onChange={(e)=>setPhone(e.target.value)}
          />
          <label for="phone" className="form__label">
            Phone
          </label>
        </div>
        <div className="form">
          <textarea
            id="message"
            className="form__input"
            autocomplete="off"
            placeholder=" "
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
          <label for="message" className="form__label">
            Message
          </label>
        </div>
        <div className='form'>
        <button className="btn" onClick={SendMessage}>Send</button>
        </div>
        </div>
        </div>
    )
}

export default ContactForm;