import React, { useRef } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import './Contact.css'; // Custom CSS for styling

const ContactPage = () => {

    const form = useRef({
        name:"",
        email:"",
        description:""
    });

    const handleSubmit= (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ep39m1r', 'template_xavq8qz', form.current, 'kFKJDZpRaBFqJfc3L')
          .then((result) => {
              form.current="";
          }, (error) => {
              alert(error);
          });
      };
      console.log(form)
  return (
    <div className="contact"  id='Contact'>
      <h2 className='title'>Contact Me</h2>
     <div className='container'>
      <form className="contact-form" ref={form}>
        <div className='form-item'>
        <label>
          Name
        </label>
        <input type="text"  onChange={(e) => form.current.name=e.target.value}/>
        </div>
        
        <div className='form-item'>
        <label>
          Email
        </label>
        <input type="email"  onChange={(e) => form.current.email=e.target.value}/>
        </div>
        
        <div className='form-item textarea'>
        <label>
          Description
        </label>
        <textarea  onChange={(e) => form.current.description=e.target.value}></textarea>
        </div>
       
       
      </form>
      <button className='btn' type="submit" onClick={handleSubmit}>Send</button>
      <div className="social-media">
        <a href="https://github.com/sachinsiddhu112" target="_blank" 
        rel="noopener noreferrer"><FaGithub size={30}/></a>
        <a href="https://www.linkedin.com/in/sachin-siddhu-687269248/" target="_blank"
         rel="noopener noreferrer"><FaLinkedin size={30}/></a>
        <a href="https://www.instagram.com/sachin.siddhu.923/" target="_blank"
         rel="noopener noreferrer"><FaInstagram size={30}/></a>
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