import React from 'react';

import "./App.css"
import HomePage from './components/home/Home';
import SkillsPage from './components/skills/Skills';
import ProjectsPage from './components/projects/Projects';
import ContactPage from './components/contact/Contact';

const App = () => {
  return (
  <div className='app'>
  <HomePage/>
  <hr className='break'/>
  <SkillsPage/>
  <hr className='break'/>
  <ProjectsPage/>
  <hr className='break'/>
  <ContactPage/>
  
  </div>  
  )
}

export default App;