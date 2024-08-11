import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';


import './Skills.css'; // Custom CSS for styling

// Skills images ,not used in current version.
import CSS from "../assets/css.png"
import Javascript from "../assets/javascript.png"
import HTML from "../assets/html.png"
import Reactj from "../assets/react.png"
import Tailwind from "../assets/tailwind.png"
import Bootstrap from "../assets/bootstrap.jpeg"
import Express from "../assets/express.png"
import Mongodb from "../assets/mongodb.png"
import Socket from "../assets/socket.png"
import Mysql from "../assets/mysql.png"

const skills = [
  { name: 'HTML', level: 8 ,img:HTML},
  { name: 'CSS', level: 8 ,img:CSS},
  { name: 'JavaScript', level: 9,img:Javascript },
  { name: 'Bootstrap', level: 8 ,img:Bootstrap},
  { name: 'Tailwind', level: 7,img:Tailwind },
  { name: 'ReactJS', level: 9,img:Reactj },
  { name: 'ExpressJS', level: 8 ,img:Express},
  { name: 'MongoDB', level: 7 ,img:Mongodb},
  { name: 'Socket.io', level: 6 ,img:Socket},
  { name: 'MySQL', level: 7 ,img:Mysql},
];

const SkillsPage = () => {
    //variable to adjust the length of skill-bar.
    const [skillLengthMultiplier,setSkillLengthMult] = useState(30);

    useEffect(() => {
      if(window.screen.width<1000 ){
        setSkillLengthMult(25);
      }
    },[window.screen.width])
    //setting the transition type and duration.
    const transition = { type: 'spring', duration: 3 }

  return (
    <div className="skills" id='Skills'>
      <h2>Skills</h2>
      <div className="skills-container"
      
      >
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            
            <span>{skill.name}</span>
         
            <div className="skill-bar">
              <motion.div
               initial={{ width: "1px"}}
               whileInView={{ width:skill.level*skillLengthMultiplier }}
               transition={{...transition,type:'tween'}}
              className="skill-level" ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;