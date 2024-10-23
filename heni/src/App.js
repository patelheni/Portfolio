import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';  // Import Chatbot

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;
