import React from "react";
import '../styles/contactform.css'

const ContactForm = () => {

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
          ></textarea>
          <label for="message" className="form__label">
            Message
          </label>
        </div>
        <div className='form'>
        <button className="btn">Send</button>
        </div>
        </div>
        </div>
    )
}

export default ContactForm;