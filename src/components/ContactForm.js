import React,{useState,useRef} from "react";
import '../styles/contactform.css';
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Vortex } from 'react-loader-spinner';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display:"flex",
  justifyContent:"center",
  width:"100px"
};

const ContactForm = () => {

  const [msg,setMSG] = useState();
  const [loader,setLoader] = useState(false);

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
    // console.log({data});
    
    // console.log(data.email);
    // console.log(data.subject);
    // console.log(data.phone);
    // console.log(data.message);

    setLoader(true);

    const email = data.email;
    const subject = data.subject;
    const phone = data.phone;
    const message = data.message;

    const resdata = await axios.post("/sendmail",{email,subject,phone,message});

    //console.log(resdata);

    if(resdata.data.message === "send email successfully"){
      setLoader(false);
      console.log("message sent successfully!");
      setMSG("true")
      reset();
    }else{
      setLoader(false);
      setMSG("false");
    }

  }

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
        <p className="validerror">{errors.email?.message}</p>
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
        <p className="validerror">{errors.subject?.message}</p>
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
        <p className="validerror" style={{color:"red"}}>{errors.phone?.message}</p>
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
        <p className="messageError">{errors.message?.message}</p>
        </div>
        <div className='form'>
        <button 
        type="submit"
        className="btn" 
        // onClick={SendMessage}
        >Send</button>
        </div>
        
        </div>
        <div style={{
          // border:"1px solid red",
          marginLeft:"20px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
          }}>
        <Vortex
          visible={loader}
          height="50"
          width="50"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['#0a192f','#0a192f','#0a192f','#0a192f']}
        />
          {msg === "true" &&(
            <p style={{color:"green"}}>Message Send Successfully. Thanks</p>
          )}

          {msg === "false" &&(
              <p style={{color:"red"}}>Incorrect Email Address. Plz try again!</p>
          )}
        </div>
        
        </form>
        
        
        </div>
    )
}

export default ContactForm;