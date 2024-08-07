import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-scroll";
import { motion, useReducedMotion } from 'framer-motion';
import { HiBars3BottomRight } from "react-icons/hi2";
import { Typewriter } from "react-simple-typewriter";

import './Home.css'; // Custom CSS for styling
import Pic from "../assets/picAvatar.jpg"
import PicWithoutBg from "../assets/withoutBgPic.png"

const HomePage = () => {

  const [openMenu, setMenuOpened] = useState(false);
  const [mobile, setMobile] = useState(false);
  

  useEffect(() => {
    if (window.screen.width < 700) {
      setMobile(true);
    }
  }, [window.screen.width]);


  
  return (
    <div className="home" id='Home'>
      <nav className="navbar">
        {mobile && !openMenu && <button className='nav-btn' onClick={() => setMenuOpened(true)} ><HiBars3BottomRight /></button>}
        <ul className={`list `}>
          <motion.li 
            initial={{ position: "relative", right: "-260px" }}
            animate={openMenu ? { right: "0px" } : ""}
            transition={{duration:1, type: 'tween' }}
            className='list_item'>
            <Link onClick={() => setMenuOpened(false)}
              to='Home'
              activeClass='active'
              span={true}
              smooth={true}>Home</Link></motion.li>

          <motion.li className='list_item'
            initial={{ position: "relative", right: "-260px" } }
            animate={openMenu ? { right: "0px" } :{}}
            transition={{ duration:1.5, type: 'tween' }}>
            <Link onClick={() => setMenuOpened(false)}
              to='Skills'
              activeClass='active'
              span={true}
              smooth={true}>Skills</Link></motion.li>
          <motion.li className='list_item'
            initial={{ position: "relative", right: "-260px" } }
            animate={openMenu ? { right: "0px" } : ""}
            transition={{ duration:2, type: 'tween' }}>
            <Link onClick={() => setMenuOpened(false)}
              to='Projects'
              activeClass='active'
              span={true}
              smooth={true}>Projects</Link></motion.li>
          <motion.li className='list_item'
            initial={{ position: "relative", right: "-260px" }}
            animate={openMenu ? { right: "0px" } : ""}
            transition={{ duration:2.5, type: 'tween' }}>
            <Link onClick={() => setMenuOpened(false)}
              to='Contact'
              activeClass='active'
              span={true}
              smooth={true}>Contact Me</Link></motion.li>

        </ul>
      </nav>
      <div className="hero">
        <div className="hero-left">
          <h3 className='h-heading'>Hi,I'm Sachin Siddhu</h3>
          <h1 className='title'>I'm a 
           <span
          
           >
          <Typewriter 
            words={[' Frontend Developer.', ' Fullstack Developer.']}
            loop={5}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
            >
             </Typewriter> 
           </span>
          </h1>
          <p className='h-description'>
          I am a recent graduate from HBTU Kanpur, where I earned a degree in Information Technology. I developed a strong foundation in software development and successfully completed multiple personal projects, the best of which are showcased on my portfolio website.I had the opportunity to complete my first internship as a Fullstack Developer at Navodita Infotech. I am now actively seeking job opportunities or internships in the field of software development, particularly as a Fullstack (MERN stack) Developer or a Frontend Developer.
          <div className='p-bg'></div>
          </p>
        </div>
        <div className="hero-right">
          <img src={PicWithoutBg} alt="Developer" />
          <div className='h-bg-1'></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;