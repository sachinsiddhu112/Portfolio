import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';//framer-motion for smooth animations.

import { FaGithub } from "react-icons/fa";
import { AiFillChrome } from "react-icons/ai";

import './Projects.css'; // Custom CSS for styling
//projects images.
import fitclubImg from "../assets/gym.jpg"
import notesImg from "../assets/notes.jpg"
import tourImg from "../assets/tour.jpg";
import homyzImg from "../assets/homyz.jpg";
import profileImg from "../assets/profileB.gif"
import bookingImg from "../assets/booking.gif";

//all projects.
const projects = [
    { name: 'Fitclub', description: [" Developed a website using ReactJS ,provides comprehensive information on exercise routines, diet plans, and service plans","Integrated EmailJS for real-time notifications to the owner regarding new customer registrations, helping to manage the gym more efficiently and provide better services to customers"], live: 'https://fitclub112.pages.dev/', github: "https://github.com/sachinsiddhu112/FitClub", img: fitclubImg, tech: "Reactjs" },
    {
        name: "Travel", description: ["A beautifully crafted static website created using only React.", "Designed with modern travelers in mind, this site provides an engaging and immersive experience for its usersThe website is fully responsive, ensuring a smooth browsing experience across all devices and screen sizes.","A clean and intuitive navigation system allows users to effortlessly find the information they need.","Subtle animations and transitions enhance user interaction without compromising performance. "], live: "https://travel-1of.pages.dev/", github: "https://github.com/sachinsiddhu112/Travel", img: tourImg, tech: "Reactjs"
    },
    {
        name: "Homyz", description: ["A sleek and modern static website built with React, designed to help you find the perfect real estate property.","Showcase properties with stunning image sliders that highlight the best features of each listing.","Easily filter and sort properties with intuitive dropdown menus tailored to your preferences.","Experience seamless transitions and animations that enhance your browsing experience without slowing down performance."], live: "https://homeyz-2pk.pages.dev/", github: "https://github.com/sachinsiddhu112/Homyz", img: homyzImg, tech: "Reactjs"
    },
    { name: 'Digital Notes', description: ['Developed a high-performance web application utilizing the MERN stack to enhance daily life efficiency and user productivity.','Implemented API endpoints for managing notes. Maintained real-time status tracking for all notes,providing users with immediate updates and comprehensive status visibility.','Leveraged the Context API for state management, eliminating prop drilling .','Secured user accounts with authentication using JWT ,ensuring robust data privacy andsecurity, and reducing unauthorized access incidents .'], live: 'https://digital-notes-jxed.vercel.app/', github: "https://github.com/sachinsiddhu112/digital-Notes", img: notesImg, tech: "MERN stack" },
    {
        name: "Aspireit", description: ["UserAuth is a straightforward and efficient web application built with the MERN stack (MongoDB, Express, React, Node.js) that provides essential user authentication features.","Designed with simplicity and security in mind, UserAuth allows users to easily sign up, log in, and manage their profiles.","Once logged in, users can view and update their profile information.","The profile page provides a clean and simple interface for managing personal details.","Built-in security measures, such as password hashing and form validation, ensure that user data is handled with care."], live: "https://aspireit-jtqs.vercel.app/", github: "https://github.com/sachinsiddhu112/Aspireit", img: profileImg, tech: "MERN stck"
    },

    { name: 'Booknow', description: ['An online accommodation booking app for cities  mumbai,goa,delhi.','Enabled users to efficiently search and filter accommodations by city, type, and available dates for enhancing user experience.','Developed a robust account registration and login system ensuring data security, and integrated Razorpay in test mode for seamless and secure payment processing.','Optimized application performance by up to 20 percent through the strategic use of React hooks and web optimization techniques, such as minimizing render-blocking and parser-blocking resources.'], live: 'https://book-now-lake.vercel.app/', github: "https://github.com/sachinsiddhu112/BookNow", img: bookingImg, tech: "MERN stack" },
];

const ProjectsPage = () => {
    const [project_hover, setProject_Hover] = useState(false);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {

    }, [])
    console.log(project_hover)

    return (
        <div className="projects" id='Projects'>
            <h2 className='p-heading'>Projects</h2>
            <div className="projects-container">

                <motion.div
                    initial={{ opacity: 0, transform: "translateY(-20px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(10px)" }}
                    whileHover={{ transform: "translateX(-10px)" }}
                    transition={{ duration: 3, type: "spring" }}
                    className='project'>
                    <div className='project default-content' >
                        <img className='p-img' src={projects[0].img} alt="" />
                        <div className='p-details'>
                            <div className='p-name'>{projects[0].name}</div>
                            <div className='p-links'>
                                <a href={projects[0].github}><FaGithub size={20} /></a>
                                <a href={projects[0].live}><AiFillChrome size={23} /></a>
                            </div>
                        </div>
                        <div className='p-desc'>{projects[0].description[0].substring(0, 30)}<strong>...</strong></div>
                    </div>
                    <div className=' hover-content'>
                        <div className='p-links'>
                            <a href={projects[0].github}><FaGithub size={20} /></a>
                            <a href={projects[0].live}><AiFillChrome size={23} /></a>
                        </div>
                        <div className='p-desc'>
                        {projects[0].description.map((desc,ind) => (
                                <div style={{marginBottom:"5px"}} key={ind}><strong>{ind}.</strong>{desc}</div>
                            ))}
                        </div>
                    </div>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(-20px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(10px)" }}
                    whileHover={{ transform: "translateX(-10px)" }}
                    transition={{ duration: 3, type: "spring" }}
                    className='project'>
                    <div className='project default-content' >
                        <img className='p-img' src={projects[1].img} alt="" />
                        <div className='p-details'>
                            <div className='p-name'>{projects[1].name}</div>
                            <div className='p-links'>
                                <a href={projects[1].github}><FaGithub size={20} /></a>
                                <a href={projects[1].live}><AiFillChrome size={23} /></a>
                            </div>
                        </div>
                        <div className='p-desc'>{projects[1].description[0].substring(0, 30)}<strong>...</strong></div>
                    </div>
                    <div className=' hover-content'>
                        <div className='p-links'>
                            <a href={projects[1].github}><FaGithub size={20} /></a>
                            <a href={projects[1].live}><AiFillChrome size={23} /></a>
                        </div>
                        <div className='p-desc'>
                        {projects[1].description.map((desc,ind) => (
                                 <div style={{marginBottom:"5px"}} key={ind}><strong>{ind}.</strong>{desc}</div>
                            ))}
                        </div>
                    </div>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(-20px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(10px)" }}
                    whileHover={{ transform: "translateX(-10px)" }}
                    transition={{ duration: 3, type: "spring" }}
                    className='project'>
                    <div className='project default-content' >
                        <img className='p-img' src={projects[2].img} alt="" />
                        <div className='p-details'>
                            <div className='p-name'>{projects[2].name}</div>
                            <div className='p-links'>
                                <a href={projects[2].github}><FaGithub size={20} /></a>
                                <a href={projects[2].live}><AiFillChrome size={23} /></a>
                            </div>
                        </div>
                        <div className='p-desc'>{projects[2].description[0].substring(0, 30)}<strong>...</strong></div>
                    </div>
                    <div className='hover-content'>
                        <div className='p-links'>
                            <a href={projects[2].github}><FaGithub size={20} /></a>
                            <a href={projects[2].live}><AiFillChrome size={23} /></a>
                        </div>
                        <div className='p-desc'>
                        {projects[2].description.map((desc,ind) => (
                                 <div style={{marginBottom:"5px"}} key={ind}><strong>{ind}.</strong>{desc}</div>
                            ))}
                        </div>
                    </div>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(-20px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(10px)" }}
                    whileHover={{ transform: "translateX(-10px)" }}
                    transition={{ duration: 3, type: "spring" }}
                    className='project'>
                    <div className='project default-content' >
                        <img className='p-img' src={projects[3].img} alt="" />
                        <div className='p-details'>
                            <div className='p-name'>{projects[3].name}</div>
                            <div className='p-links'>
                                <a href={projects[3].github}><FaGithub size={20} /></a>
                                <a href={projects[3].live}><AiFillChrome size={23} /></a>
                            </div>
                        </div>
                        <div className='p-desc'>{projects[3].description[0].substring(0, 30)}<strong>...</strong></div>
                    </div>
                    <div className='hover-content' >
                        <div className='p-links'>
                            <a href={projects[3].github}><FaGithub size={20} /></a>
                            <a href={projects[3].live}><AiFillChrome size={23} /></a>
                        </div>
                        <div className='p-desc'>
                            {projects[3].description.map((desc,ind) => (
                                 <div style={{marginBottom:"5px"}} key={ind}><strong>{ind}.</strong>{desc}</div>
                            ))}
                        </div>
                    </div>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(-20px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(10px)" }}
                    whileHover={{ transform: "translateX(-10px)" }}
                    transition={{ duration: 3, type: "spring" }}
                    className='project'>
                    <div className='project default-content' >
                        <img className='p-img' src={projects[4].img} alt="" />
                        <div className='p-details'>
                            <div className='p-name'>{projects[4].name}</div>
                            <div className='p-links'>
                                <a href={projects[4].github}><FaGithub size={20} /></a>
                                <a href={projects[4].live}><AiFillChrome size={23} /></a>
                            </div>
                        </div>
                        
                        <div className='p-desc'>{projects[4].description[0].substring(0, 30)}<strong>...</strong></div>
                    </div>
                    <div className='hover-content'>
                        <div className='p-links'>
                            <a href={projects[4].github}><FaGithub size={20} /></a>
                            <a href={projects[4].live}><AiFillChrome size={23} /></a>
                        </div>
                        <div className='p-desc'>
                        {projects[4].description.map((desc,ind) => (
                                 <div style={{marginBottom:"5px"}} key={ind}><strong>{ind}.</strong>{desc}</div>
                            ))}
                        </div>
                    </div>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(-20px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(10px)" }}
                    whileHover={{ transform: "translateX(-10px)" }}
                    transition={{ duration: 3, type: "spring" }}
                    className='project'>
                    <div className='project default-content' >
                        <img className='p-img' src={projects[5].img} alt="" />
                        <div className='p-details'>
                            <div className='p-name'>{projects[5].name}</div>
                            <div className='p-links'>
                                <a href={projects[5].github}><FaGithub size={20} /></a>
                                <a href={projects[5].live}><AiFillChrome size={23} /></a>
                            </div>
                        </div>
                        <div className='p-desc'>{projects[5].description[0].substring(0, 30)}<strong>...</strong></div>
                    </div>
                    <div className=' hover-content'>
                        <div className='p-links'>
                            <a href={projects[5].github}><FaGithub size={20} /></a>
                            <a href={projects[5].live}><AiFillChrome size={23} /></a>
                        </div>
                        <div className='p-desc'>
                        {projects[5].description.map((desc,ind) => (
                                 <div style={{marginBottom:"5px"}} key={ind}><strong>{ind}.</strong>{desc}</div>
                            ))}
                        </div>
                    </div>

                </motion.div>

            </div>
        </div>
    );
}

export default ProjectsPage;