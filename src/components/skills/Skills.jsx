import React from 'react';
import {motion} from 'framer-motion';


import './Skills.css'; // Custom CSS for styling
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
  { name: 'Tailwind', level: 7.5,img:Tailwind },
  { name: 'ReactJS', level: 9,img:Reactj },
  { name: 'ExpressJS', level: 8 ,img:Express},
  { name: 'MongoDB', level: 7 ,img:Mongodb},
  { name: 'Socket.io', level: 6 ,img:Socket},
  { name: 'MySQL', level: 7 ,img:Mysql},
];

const SkillsPage = () => {

    const transition = { type: 'spring', duration: 3 }

  return (
    <div className="skills" id='Skills'>
      <h2>Skills</h2>
      <motion.div className="skills-container"
       initial={{height:"0px" , opacity:"0"}}
       whileInView={{height:"fit-content",opacity:"1"}}
       transition={{type:"spring",duration:3}}
      >
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            
            <img className='skill-img' src={skill.img} alt='Loading'/>
            <div className="skill-bar">
              <motion.div
               initial={{ width: "1px"}}
               whileInView={{ width:skill.level*20 }}
               transition={{...transition,type:'tween'}}
              className="skill-level" style={{ width: `${skill.level * 10}%` }}></motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default SkillsPage;