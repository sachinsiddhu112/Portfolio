import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";

import "./Alert.css";
import { AiOutlineClose } from "react-icons/ai";


export default function Alert(props) {
const [widerView,setwiderView]= useState(false);
  useEffect(()=>{
  const width=window.screen.width;
  if(width>700){
    setwiderView(true);
  }
  else{
    setwiderView(false);
  }

  setTimeout(()=>{
  props.setAlert(false);
  },3000)

  },[window.screen.width])
  const capitalize=(word)=>{
    if(word==='danger'){
      word='failed';
    }
    
    return word.toUpperCase() 
  }


  return (
    <motion.div 
    initial={{transform:"translateX(-80px)"}}
    whileInView={{transform:"translateX(40px)"}}
    transition={{type:"tween",duration:3}}
    className={`alert-container ${props.type} ${widerView ? "widerViewAlertPopUp":""}`}>
       <div className="alert" role='alert'>
        <span><strong>{capitalize(props.type)}:</strong></span>
        <span>{props.msg} </span>
       
        </div>
      <button className='btn' onClick={()=> props.setAlert(false)}><AiOutlineClose /></button>
    </motion.div>
   
  )
}