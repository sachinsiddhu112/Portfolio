import React, { useState,useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { TbBrandBooking } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { PiNotePencilLight } from "react-icons/pi";

import './Projects.css'; // Custom CSS for styling
import BookNow from "../assets/tour.jpg"
import Fitclub from "../assets/gym.jpg"
import Notes from "../assets/notes.jpg"

const projects = [
    { name: 'Digital Notes', description: 'A digital notes keeping application with data security.', live: 'https://digital-notes-jxed.vercel.app/', github: "https://github.com/sachinsiddhu112/digital-Notes", img: Notes ,tech:"MERN stack"},

    { name: 'Fitclub', description: 'A fitness advertising app to increase the revenue .', live: 'https://fitclub112.pages.dev/', github: "https://github.com/sachinsiddhu112/FitClub", img: Fitclub,tech:"Reactjs" },

    { name: 'Booknow', description: 'An online accommodation booking app for cities  mumbai,goa,delhi.', live: 'https://book-now-lake.vercel.app/', github: "https://github.com/sachinsiddhu112/BookNow", img: BookNow ,tech:"MERN stack"},
];

const ProjectsPage = () => {
    const transition = { type: 'spring', duration: 3 };
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [mobile,setMobile] = useState(false);

    useEffect(() => {
        if(window.screen.width<700){
          setMobile(true);
        }
      },[window.screen.width])

    return (
        <div className="projects" id='Projects'>
            <h2 className='p-heading'>Projects</h2>
            <div className="projects-container">
                {
                    projects.map((project,index) => (
                        <div className='project' key={index}>

                          <img className='p-img' src={project.img} alt="" />
                          <div className='p-details'>Name:{project.name}</div>
                          <div className='p-details'>Tech:{project.tech}</div>
                          <div className='p-details'>Desc:{project.description}</div>
                          <div className='p-links'>
                            <a href={project.live}>Live</a>
                            <a href={project.github}>Github</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ProjectsPage;