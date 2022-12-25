import React,{useState} from "react";
import '../styles/contactform.css';
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContactForm = () => {

  // const [email,setEmail] = useState();
  // const [subject, setSubject] = useState();
  // const [phone, setPhone] = useState();
  // const [message, setMessage] = useState();

  const ContactFormSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid"),
    subject: yup.string().required("Subject is required"),
    phone: yup.string(),
    message: yup.string()
    .required("Message is required")
    .min(10, "Message must contain at least 10 characters"),
  });

  const {register, handleSubmit, formState: { errors }, reset} = useForm({
    resolver: yupResolver(ContactFormSchema),
  })

  const SendMessage = async(data) => {
    console.log({data});
    
    console.log(data.email);
    console.log(data.subject);
    console.log(data.phone);
    console.log(data.message);

    const email = data.email;
    const subject = data.subject;
    const phone = data.phone;
    const message = data.message;

    const resdata = await axios.post("/sendmail",{email,subject,phone,message});

    console.log(resdata);

    if(resdata.data.message === "send email successfully"){
      console.log("message sent successfully!");
      reset();
    }

  }
    
  const onError = (errors) => {
    console.log(errors);
  };

    return(
        <div className="contact__form">

        <form onSubmit={handleSubmit(SendMessage)}>
        <div className="form-flex">
        <div className="form">
          <input
            {...register("email")}
            type="email"
            id="email"
            className="form__input"
            autocomplete="off"
            placeholder=" "
            // onChange={(e)=>setEmail(e.target.value)}
          />
          <label for="email" className="form__label">
            Email
          </label>
          
        </div>
        <div>
        <p style={{color:"red"}}>{errors.email?.message}</p>
        </div>
        
        <div className="form">
          <input
            {...register("subject")}
            type="text"
            id="subject"
            className="form__input"
            autocomplete="off"
            placeholder=" "
            // onChange={(e)=>setSubject(e.target.value)}
          />
          <label for="subject" className="form__label">
            Subject
          </label>
        </div>
        <div>
        <p style={{color:"red"}}>{errors.subject?.message}</p>
        </div>
        <div className="form">
          <input
            {...register("phone")}
            type="text"
            id="phone"
            className="form__input"
            autocomplete="off"
            placeholder=" "
            // onChange={(e)=>setPhone(e.target.value)}
          />
          <label for="phone" className="form__label">
            Phone
          </label>
        </div>
        <div>
        <p style={{color:"red"}}>{errors.phone?.message}</p>
        </div>
        <div className="form">
          <textarea
            {...register("message")}
            id="message"
            className="form__input"
            autocomplete="off"
            placeholder=" "
            // onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
          <label for="message" className="form__label">
            Message
          </label>
        </div>
        <div>
        <p style={{color:"red"}}>{errors.message?.message}</p>
        </div>
        <div className='form'>
        <button 
        type="submit"
        className="btn" 
        // onClick={SendMessage}
        >Send</button>
        </div>
        </div>
        </form>
        </div>
    )
}

export default ContactForm;