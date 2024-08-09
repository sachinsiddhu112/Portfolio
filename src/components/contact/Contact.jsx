import React, { useRef, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import './Contact.css'; // Custom CSS for styling
import Alert from '../alert/Alert';


const ContactPage = () => {

  const form = useRef();
  const [user_email, setUserEmail] = useState("");
  const [user_name, setUserName] = useState("");
  const [user_msg, setUserMSG] = useState("");
  const [alert, setAlert] = useState(false);
  const [alert_msg, setAlertMSG] = useState("");
  const [alert_type, setAlertType] = useState("");

  //email validation.
  const validateEmail = (email) => {
    // Simple email regex pattern
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    //stop rerender
    e.preventDefault();

    //check input fields are filled 

    if (user_email.length == 0 || user_name.length == 0 || user_msg.length == 0) {
      setAlert(true);
      setAlertMSG("Check input fields");
      setAlertType('warning');
      return;
    }
    else if (!validateEmail(user_email)) {
      setAlert(true);
      setAlertMSG("Check your email");
      setAlertType('warning');
      return;
    }


    emailjs.sendForm('service_ep39m1r', 'template_xavq8qz', form.current, {
      publicKey: 'kFKJDZpRaBFqJfc3L',
    })
      .then((result) => {
        form.current = "";
        setUserEmail("");
        setUserMSG("");
        setUserName("");
        setAlert(true);
        setAlertMSG("Thanks for connecting.")
        setAlertType("success");
      }, (error) => {
        setAlert(true);
        setAlertMSG("Failed");
        setAlertType("failed")
        console.log(error)
      });
  };

  return (
    <div className="contact" id='Contact'>
      <h2 className='title'>Contact Me</h2>
      <div className='container'>
        {alert && <Alert setAlert={setAlert} msg={alert_msg} type={alert_type} />}
        <form className="contact-form" ref={form}>
          <div className='form-item'>
            <label>
              Name
            </label>
            <input type="text" name='name' value={user_name} onChange={(e) => setUserName(e.target.value)} />
          </div>

          <div className='form-item'>
            <label>
              Email
            </label>
            <input type="email" name='email' value={user_email} onChange={(e) => setUserEmail(e.target.value)} />
          </div>

          <div className='form-item textarea'>
            <label>
              Description
            </label>
            <textarea name="message" value={user_msg} onChange={(e) => setUserMSG(e.target.value)}  ></textarea>
          </div>


        </form>
        <button className='s-btn' type="submit" onClick={handleSubmit}>Send</button>
        <div className="social-media">
          <a href="https://github.com/sachinsiddhu112" target="_blank"
            rel="noopener noreferrer"><FaGithub size={30} /></a>
          <a href="https://www.linkedin.com/in/sachin-siddhu-687269248/" target="_blank"
            rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="https://www.instagram.com/sachin.siddhu.923/" target="_blank"
            rel="noopener noreferrer"><FaInstagram size={30} /></a>
        </div>
      </div>
      <div className='backgrounds'>
        <div className='bg-1'></div>
        <div className='bg-2'></div>

      </div>
    </div>
  );
}

export default ContactPage;